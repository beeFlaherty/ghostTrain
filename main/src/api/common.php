<?php

require './config.php';

date_default_timezone_set('GMT');

// initiates the request handling - should be called at the start of all requests
function init_call() {
	// domain_check();
	session_check();
	api_key_check();

	$db = connect_database(); // Connect... to the... database...
	create_structure(); // Ensure the data tables exist
	process_action(); // Work how to respond

	send_message('error', array('reason' => 'none', 'message' => 'Something went wrong'));
}

// What it says on the tin
function connect_database() {
	global $config, $db;

	$db = new PDO(
		'mysql:host=' . $config['db_host'] . ';dbname=' . $config['db_name'],
		$config['db_user'],
		$config['db_pass']
	);
	$db->setAttribute(PDO::ATTR_EMULATE_PREPARES, 1);

	return $db;
}

// Run a SQL query
function run_query($query) {
	global $db;

	try {
		$statement = $db->prepare($query);
		$statement->execute();

		return $statement;
	} catch(PDOException $e) {
		echo $e->getMessage();
	}

	// $db = ORM::get_db();
	// return $db->exec($query);
}

// Run a SQL query and return the number of lines returned
function count_query($query) {
	$statement = run_query($query);
	return count($statement->fetchAll(PDO::FETCH_OBJ));
}

// Check if at least one row returns from a SQL query
function exists_query($query) {
	return (count_query($query) > 0);
}

// Generated a unique ID
function make_id($base) {
	return substr(hash('md5', $base . microtime()), 0, 6);
}

// Check for and tidy up POST variables
function get_post($name) {
	if (!isset($_POST[$name])) {
		return '';
	} else {
		return clean_variable($_POST[$name]);
	}
}

// Check for the presence of a session variable (contents don't actually matter)
function session_check() {
	if (!isset($_POST['session'])) {
		send_message('error', array('reason' => 'no_session_token','message' => 'No session token passed'));
	}
}

// Check for the presence of an API key - allow us to slow down rogue users of the API
function api_key_check() {
	global $config;

	if (!isset($_POST['api_key'])) {
		send_message('error', array('reason' => 'no_api_key','message' => 'No API key passed'));
	} else if ($_POST['api_key'] != $config['api_key']) {
		send_message('error', array('reason' => 'invalid_api_key','message' => 'Invalid API key passed'));
	}
}

// Make it slightly harder for cross-domain access to the API
function domain_check() {
	if (!isset($_SERVER['HTTP_REFERER']) || strpos($_SERVER['HTTP_REFERER'], $_SERVER['SERVER_NAME']) == FALSE) {
		send_message('error', array('reason' => 'wrong_domain','message' => 'Cross-domain calls are not allowed'));
	}
}

// Work out which API action to perform
function process_action() {
	if (!isset($_POST['action'])) send_message('error', array('reason' => 'no_action', 'message' => 'No action specified'));

	$action = clean_variable($_POST['action']);

	switch($action) {
		case 'get_ride':
			$params = array(get_post('key'));
			break;
		case 'set_ride':
			$params = array(get_post('data'));
			break;

		default:
			send_message('error', array('reason' => 'unknown_action', 'message' => 'Unrecognised action specified'));
			return;
	}

	call_user_func_array($action, $params);
}


// We've done all we can, pass feedback to the user now
function send_message($status, $message) {
	$GLOBALS['json_response']['status'] = $status;

	if(is_array($message)) {
		$GLOBALS['json_response'] = array_merge($GLOBALS['json_response'], $message);
	} else {
		$GLOBALS['json_response']['message'] = $message;
	}

	respond($GLOBALS['json_response']);
}

// Send a JSON response to the user
function respond($arr) {
	header('Content-Type: application/json');
	header('Cache-Control: no-store, no-cache, must-revalidate, max-age=0');
	header('Cache-Control: post-check=0, pre-check=0', false);
	header('Pragma: no-cache');

	exit(json_encode($arr));
}

// Make sure there's nothing nasty in a user input
function clean_variable($variable) {
	return mysql_escape_mimic(trim($variable));
}

function mysql_escape_mimic($inp) {
	if (!empty($inp) && is_string($inp)) {
		return str_replace(array('\\', "\0", "\n", "\r", "'", '"', "\x1a"), array('\\\\', '\\0', '\\n', '\\r', "\\'", '\\"', '\\Z'), $inp);
	}

	return $inp;
}