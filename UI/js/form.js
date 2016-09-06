(function() {
  "use strict";
  var config,
  params = window.location.href.split("?"),
  form = $('#design-train'),
  built = $('#train-ready'),
  generateButton = $('#generate'),
  train = new Object(),
  trainUrl ="";

  //load config data file, run landing script on sucess.
  $.getJSON("js/config.txt", function(data){
    config = data;
    })
    .done(function() {
      console.log(config);
      createLandingPage();
    })
    .fail(function() {
      document.write( "<p>error - could not load json file</p>" );
    });


//functions

  function createLandingPage() {
    if (typeof params[1] === "undefined") {
      createForm();
    }
    else {
        built.removeClass('hidden');
        jsonFromURL();
    }
  };

  function createForm() {
     console.log('createform');
     var roomCount = config.settings.stages;
     var formMarkup = '<form id="design-train"><h1>Create your Ghost train</h1></form>';
     var settingsFieldsetMarkup  = '<fieldset class="train-settings"><legend>Train:</legend></fieldset>';
     var roomFieldsetMarkup  = '<fieldset class="room"><legend>Room 1:</legend></fieldset>';

     $('.js-interface').append(formMarkup);
     var form = $('.js-interface form');
     form.append(settingsFieldsetMarkup);
     var settingsFieldset = form.find(".train-settings");
     console.log(config.settings.trainsettings);
     config.settings.trainsettings.forEach(function(formItem){

        if(formItem[1] === "text") {
          settingsFieldset.append('<p><label for="' + setting[0]+ '">' + setting[0] +
          '</label> <input type="text" name="'+ setting[0] + '" id="'+ setting[0] +'"/></p>');
        }
        if(formItem[1] === "select" & typeof formItem[2] !== "undefined") {
          settingsFieldset.append('<p><label for="' + setting[0]+ '">' + setting[0] +
          '</label> <select name="'+ formItem[0] + '" id="'+formItem[0]+'"> </select></p>');

          $.each(config.options[formItem[2]], function(index, value) {
            $('#'+formItem[0]).append('<option value="'+ index +'">'+ value[0] + '</option>');
          });

        }
     });

     //add button action
     generateButton.on('click', function(event){
       event.preventDefault();
       train={};
       jsonFromForm();
       urlFromJson(train);
     });
  }

  function jsonFromForm(){
    var trainsettings = { },
    rooms = [];

    $.each(form.find('.train-settings').serializeArray(), function(){
      trainsettings[this.name] = this.value.replace(/<\/?[^>]+(>|$)|"/g, "");
    });

    form.find('.room').each( function(i){
      var room = {}
      $.each($(this).serializeArray(), function(){
        room[this.name] = this.value;
      });
      rooms[i] = room;
    });

    train.trainsettings= trainsettings;
    train.rooms= rooms;

    train = JSON.stringify(train);
    console.log(train);
  };

  function urlFromJson(train){
    // http://localhost:8080/?=masapa&masapa&masapa&masapa&masapa~aatrain_name
    var trainObj = JSON.parse(train);
    trainUrl ="?="

    trainObj.rooms.forEach(function(room, i){
      trainUrl += room['monster'] + room['sound'] + room['position'];

      if (i>0 & i < trainObj.rooms.length-1) {
        trainUrl += '&';
      }
    });

    trainUrl +=  "~" + trainObj.trainsettings['music'] + trainObj.trainsettings['train-name'].replace(" ", "_");
    trainUrl = window.location.href + trainUrl;
    console.log(trainUrl);
  };

  function jsonFromURL(){
    //example of expected url
    // http://localhost:8080/?=masapa&masapa&masapa&masapa&masapa~aatrain_name
    var trainsettings = {},
    rooms = [],
    roomDeliminator = '&',
    settingsDeliminator = "~",
    settings = params[1].split(settingsDeliminator),
    roomArray = settings[0].replace("=", "").split(roomDeliminator);

    //get train settings from second part of substring
    trainsettings['music'] = settings[1].substring(0, 2);
    trainsettings['name'] = settings[1].substring(2).replace("_", " ");

    //loop through room array and create objects
    roomArray.forEach( function(item, i){
      var room = {}
        room['monster'] = item.substring(0, 2);
        room['sound'] = item.substring(2, 4);
        room['position'] = item.substring(4, 6);
        rooms[i] = room;
    });

    //build object
    train.trainsettings= trainsettings;
    train.rooms= rooms;
    train = JSON.stringify(train);
    //console log TBR
    console.log(train);
  };


})();
