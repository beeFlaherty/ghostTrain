<?php

require './common.php';

init_call();

// If the database hasn't been setup then do so now
function create_structure() {
	run_query('
		CREATE TABLE IF NOT EXISTS `rides` (
		  `key` varchar(30) NOT NULL,
		  `data` varchar(3000) NOT NULL,
		  `created` date NOT NULL,
		  `ip` varchar(255) NOT NULL
		);
	');
}

function empty_database() {
	run_query('
		DROP TABLE `rides`;
	');
}

function get_ride($key) {
	$key = str_replace('\\', '', $key);

	$query = run_query(sprintf('
		SELECT `data` FROM `rides`
		WHERE `key` = \'%s\';
	', $key))->fetch(PDO::FETCH_ASSOC);

	if (!$query || !$query['data']) {
		send_message('error', 'No ride found for key');
	} else {
		send_message('success', $query['data']);
	}

	return;
}

function set_ride($data) {
	$data = str_replace('\\', '', $data);

	$query = run_query(sprintf('
		SELECT `key` FROM `rides`
		WHERE `data` = \'%s\';
	', $data))->fetch(PDO::FETCH_ASSOC);

	if (!$query || !$query['key']) {
		$key = substr(hash('md5', 'abcdef' . microtime()), 0, 8);
		$ip = $_SERVER['REMOTE_ADDR'];

		$query = run_query(sprintf('
			INSERT INTO `rides`
			(`key`, `data`, `created`, `ip`)
			VALUES(\'%s\', \'%s\', NOW(), \'%s\');
		', $key, $data, $ip));

		$query = run_query(sprintf('
			SELECT `key` FROM `rides`
			WHERE `data` = \'%s\';
		', $data))->fetch(PDO::FETCH_ASSOC);

		if (!$query) {
			send_message('error', 'Failed writing to database');
		} else {
			send_message('success', $key);
		}
	} else {
		send_message('success', $query['key']);
	}

	return;

	// $result = run_query(sprintf('
	// 	SELECT correct_answer FROM quickfire_questions WHERE id = %s;',
	// 	$answer['id']
	// ))->fetch(PDO::FETCH_ASSOC);

	// return ($result['correct_answer'] == $answer['answer']);
}