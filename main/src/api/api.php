<?php

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

require './common.php';

init_call();

// If the database hasn't been setup then do so now
function create_structure() {
	run_query('
		CREATE TABLE IF NOT EXISTS `rides` (
		  `id` VARCHAR(30) NOT NULL,
		  `data` VARCHAR(3000) NOT NULL,
		  `created` DATETIME NOT NULL,
		  `ip` VARCHAR(255) NOT NULL
		);
	');
}

function empty_database() {
	run_query('
		DROP TABLE `rides`;
	');
}

function get_ride($id) {
	$id = str_replace('\\', '', $id);

	$query = run_query(sprintf('
		SELECT `data` FROM `rides`
		WHERE `id` = \'%s\';
	', $id))->fetch(PDO::FETCH_ASSOC);

	if (!$query || !$query['data']) {
		send_message('error', 'No ride found for id');
	} else {
		send_message('success', $query['data']);
	}

	return;
}

function set_ride($data) {
	$data = str_replace('\\', '', $data);

	$query = run_query(sprintf('
		SELECT `id` FROM `rides`
		WHERE `data` = \'%s\';
	', $data))->fetch(PDO::FETCH_ASSOC);

	if (!$query || !$query['id']) {
		$id = substr(hash('md5', 'abcdef' . microtime()), 0, 8);
		$ip = $_SERVER['REMOTE_ADDR'];

		$query = run_query(sprintf('
			INSERT INTO `rides`
			(`id`, `data`, `created`, `ip`)
			VALUES(\'%s\', \'%s\', NOW(), \'%s\');
		', $id, $data, $ip));

		$query = run_query(sprintf('
			SELECT `id` FROM `rides`
			WHERE `data` = \'%s\';
		', $data))->fetch(PDO::FETCH_ASSOC);

		if (!$query) {
			send_message('error', 'Failed writing to database');
		} else {
			send_message('success', $id);
		}
	} else {
		send_message('success', $query['id']);
	}

	return;

	// $result = run_query(sprintf('
	// 	SELECT correct_answer FROM quickfire_questions WHERE id = %s;',
	// 	$answer['id']
	// ))->fetch(PDO::FETCH_ASSOC);

	// return ($result['correct_answer'] == $answer['answer']);
}