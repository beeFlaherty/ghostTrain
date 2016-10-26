(function() {
    'use strict';

    module.exports = function(AFRAME) {
        function lerp(start, end, duration) {
            return (start * (1 - duration)) + (end * duration);
        }

        function lerpDegrees(start, end, amount) {
            var difference = Math.abs(end - start);
            if (difference > 180) {
                // We need to add on to one of the values.
                if (end > start) {
                    // We'll add it on to start...
                    start += 360;
                } else {
                    // Add it on to end.
                    end += 360;
                }
            }

            // Interpolate it.
            var value = (start + ((end - start) * amount));

            // Wrap it..
            var rangeZero = 360;

            if (value >= 0 && value <= 360) {
                return value;
            }

            return (value % rangeZero);
        }

        function compareOrder(a, b) {
            if (a.order < b.order) {
                return -1;
            } else if (a.order > b.order) {
                return 1;
            } else {
                return 0;
            }
        }

        function distanceVector(v1, v2) {
            var dx = v1.x - v2.x;
            var dy = v1.y - v2.y;
            var dz = v1.z - v2.z;

            return Math.sqrt(dx * dx + dy * dy + dz * dz);

            // .distanceTo( v ) ?
        }

        // Converts from degrees to radians.
        Math.radians = function(degrees) {
            return degrees * Math.PI / 180;
        };

        // Converts from radians to degrees.
        Math.degrees = function(radians) {
            return radians * 180 / Math.PI;
        };


        AFRAME.registerComponent('kart', {
            schema: {},
            init: function() {


                this.element = this.el.object3D;
                this.rotationHelper =
                    document.getElementById('rotation-helper').object3D;

                this.closeEnoughDistance = 0.1;
                this.first = false;
                this.trackPosition = 0;

                var trackElements = document.querySelectorAll('a-entity[track]');
                var track = [];
                var position;

                // get all track elements- build a list and sort them to create a track
                for (var i = 0; i < trackElements.length; i++) {
                    position = trackElements[i].getAttribute("position");
                    track.push({
                        order: parseInt(trackElements[i].getAttribute("order")),
                        position: new THREE.Vector3(position.x, position.y, position.z),
                        duration: parseInt(trackElements[i].getAttribute("duration")),
                        rotationDuration: parseInt(trackElements[i].getAttribute("rotationDuration")) || -1,
                        allowMovement: trackElements[i].getAttribute("allowMovement") === 'false' ? false : true
                    });
                }

                track.sort(compareOrder);
                this.track = track;

                this.startTime = new Date();
                this.timeSinceStart = 0;
                this.startPosition = this.element.position.clone();
                this.endPosition = this.track[this.trackPosition].position.clone();
                //this.element.lookAt(this.endPosition);
                this.percentComplete = 0;
                this.rotationPercentComplete = 0;
                this.speed = 1.75;
                if (this.el.getAttribute("kart")[""]) {
                    this.speed = parseFloat(this.el.getAttribute("kart")[""]);
                }

                var duration =
                    distanceVector(this.startPosition, this.endPosition) / this.speed;

                if (typeof(this.track[this.trackPosition].duration) !== 'undefined' && this.track[this.trackPosition].duration !== -1 && this.track[this.trackPosition].duration !== '-1') {
                    this.duration = this.track[this.trackPosition].duration;
                } else {
                    this.duration = parseInt(duration);
                }

                if (typeof(this.track[this.trackPosition].rotationDuration) !== 'undefined' && this.track[this.trackPosition].rotationDuration !== -1 && this.track[this.trackPosition].rotationDuration !== '-1') {
                    this.rotationDuration = this.track[this.trackPosition].rotationDuration;
                } else {
                    this.rotationDuration = -1;
                }

                this.allowMovement = this.track[this.trackPosition].allowMovement == "true" ? true : false;
                this.allowMovement = this.allowMovement || true;

                this.startRotation = this.element.rotation.clone();
                this.rotationHelper.position.set(this.element.position.x,
                    this.element.position.y,
                    this.element.position.z);
                this.rotationHelper.lookAt(this.endPosition);
                var value = Math.degrees(this.rotationHelper.rotation.y);

                if (value < 0) {
                    value = 360 + value;
                }

                if (value > 360) {
                    value = 360 - value;
                }
                value = Math.radians(value);

                //  this.rotation = new THREE.Vector3(0, value, 0);
                window.doRotation = false;


            },
            tick: function(time) {
                var value;

                this.rotationHelper.position.set(this.element.position.x,
                    this.element.position.y,
                    this.element.position.z);
                this.distance = distanceVector(this.element.position, this.endPosition);

                if (this.distance > this.closeEnoughDistance || this.timeSinceStart <= this.duration) {
                    if (!this.first) {
                        this.startTime = new Date();
                        this.first = true;
                    }

                    this.timeSinceStart = (new Date() - this.startTime) / 1000;

                    if (this.rotationDuration != -1) {
                        this.rotationPercentComplete = this.timeSinceStart / this.rotationDuration;
                    } else {
                        this.rotationPercentComplete = this.timeSinceStart / this.duration;
                    }

                    this.percentComplete = this.timeSinceStart / this.duration;



                    if (window.doRotation) {
                        value = lerpDegrees(
                            Math.degrees(this.startRotation.y), Math.degrees(this.rotation.y),
                            (this.rotationPercentComplete) > 1 ? 1 : this.rotationPercentComplete);

                        if (value < 0) {
                            value = 360 + value;
                        }

                        if (value > 360) {
                            value = 360 - value;
                        }

                        value = Math.radians(value);
                        this.element.rotation.set(0, value, 0);
                    }

                    if (this.allowMovement) {
                        this.element.position.lerpVectors(
                            this.startPosition, this.endPosition, this.percentComplete);
                    }

                } else if (this.timeSinceStart > this.duration) {
                    window.doRotation = true;
                    if (this.trackPosition + 1 < this.track.length) {
                        this.trackPosition++;
                        this.startRotation = this.element.rotation.clone();
                        this.startTime = new Date();
                        this.timeSinceStart = 0;
                        this.startPosition = this.element.position.clone();
                        this.endPosition = this.track[this.trackPosition].position.clone();
                        this.percentComplete = 0;
                        this.rotationPercentComplete = 0;
                        var duration =
                            distanceVector(this.startPosition, this.endPosition) /
                            this.speed;



                        if (typeof(this.track[this.trackPosition].duration) !== 'undefined' && this.track[this.trackPosition].duration !== -1 && this.track[this.trackPosition].duration !== '-1') {
                            this.duration = this.track[this.trackPosition].duration;
                        } else {
                            this.duration = parseInt(duration);
                        }

                        if (typeof(this.track[this.trackPosition].rotationDuration) !== 'undefined' && this.track[this.trackPosition].rotationDuration !== -1 && this.track[this.trackPosition].rotationDuration !== '-1') {
                            this.rotationDuration = this.track[this.trackPosition].rotationDuration;
                        } else {
                            this.rotationDuration = -1;
                        }



                        this.allowMovement = this.track[this.trackPosition].allowMovement == "true" ? true : false;
                        this.allowMovement = this.allowMovement || true;

                        this.rotationHelper.lookAt(this.endPosition.clone());

                        value = Math.degrees(this.rotationHelper.rotation.y);

                        if (value < 0) {
                            value = 360 + value;
                        }

                        if (value > 360) {
                            value = 360 - value;
                        }

                        value = Math.radians(value);

                        this.rotation = new THREE.Vector3(0, value, 0);
                    } else {
                        if (!this.el.is('finished')) {
                            this.el.addState('finished');
                            this.el.emit('finished');
                        }
                    }
                }
            }
        });
    };
}());
