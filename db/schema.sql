CREATE SCHEMA IF NOT EXISTS blogdodev01;

CREATE TABLE IF NOT EXISTS `blogdodev01`.`roles` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`name` VARCHAR(45) NOT NULL,
	`users_id` INT NOT NULL,
	PRIMARY KEY (`id`),
	INDEX `fk_users_roles_idx` (`users_id` ASC) VISIBLE,
	CONSTRAINT `fk_users_roles`
		FOREIGN KEY (`users_id`)
		REFERENCES `blogdodev01`.`users` (`id`)
		ON DELETE NO ACTION
		ON UPDATE NO ACTION);

CREATE TABLE IF NOT EXISTS `blogdodev01`.`users` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`username` VARCHAR(20) NOT NULL,
	`email` VARCHAR(254) NOT NULL,
	`password` VARCHAR(200) NOT NULL,
	`image_link` VARCHAR(150) NULL,
	`description` VARCHAR(500) NULL,
	`likes_count` INT NULL DEFAULT 0,
	`created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ,
	`updated_at` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
);

CREATE TABLE IF NOT EXISTS `blogdodev01`.`projects` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`title` VARCHAR(50) NOT NULL,
	`slug` VARCHAR(100) NOT NULL,
	`description` VARCHAR(500) NULL,
	`repository_link` VARCHAR(150) NOT NULL,
	`deployed_link` VARCHAR(150) NULL,
	`is_done` TINYINT NOT NULL,
	`image_link` VARCHAR(150) NULL,
	`likes_count` INT NULL DEFAULT 0,
	`users_id` INT NOT NULL,
	`created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ,
	`updated_at` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	PRIMARY KEY (`id`),
	INDEX `fk_users_project_idx` (`users_id` ASC) VISIBLE,
	CONSTRAINT `fk_users_project`
		FOREIGN KEY (`users_id`)
		REFERENCES `blogdodev01`.`users` (`id`)
		ON DELETE NO ACTION
		ON UPDATE NO ACTION);

CREATE TABLE IF NOT EXISTS `blogdodev01`.`articles` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`title` VARCHAR(50) NOT NULL,
	`slug` VARCHAR(100) NOT NULL,
	`content` LONGTEXT NOT NULL,
	`likes_count` INT NULL DEFAULT 0,
	`users_id` INT NOT NULL,
	`created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ,
	`updated_at` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	PRIMARY KEY (`id`),
	INDEX `fk_users_articles_idx` (`users_id` ASC) VISIBLE,
	CONSTRAINT `fk_users_articles`
		FOREIGN KEY (`users_id`)
		REFERENCES `blogdodev01`.`users` (`id`)
		ON DELETE NO ACTION
		ON UPDATE NO ACTION);

CREATE TABLE IF NOT EXISTS `blogdodev01`.`interactions` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`post_id` INT NULL,
	`article_id` INT NULL,
	`profile_id` INT NULL,
	`users_id` INT NOT NULL,
	PRIMARY KEY (`id`),
	INDEX `fk_users_interactions_idx` (`users_id` ASC) VISIBLE,
	CONSTRAINT `fk_users_interactions`
		FOREIGN KEY (`users_id`)
		REFERENCES `blogdodev01`.`users` (`id`)
		ON DELETE NO ACTION
		ON UPDATE NO ACTION);

CREATE TABLE IF NOT EXISTS `blogdodev01`.`profissional_experience` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`position` VARCHAR(50) NOT NULL,
	`enterprise` VARCHAR(50) NOT NULL,
	`arrival_date`  VARCHAR(10) NOT NULL,
	`departure_date` VARCHAR(10) NULL,
	`description` VARCHAR(250) NULL,
	`users_id` INT NOT NULL,
	PRIMARY KEY (`id`),
	INDEX `fk_users_profissional_experience_idx` (`users_id` ASC) VISIBLE,
	CONSTRAINT `fk_users_profissional_experience`
		FOREIGN KEY (`users_id`)
		REFERENCES `blogdodev01`.`users` (`id`)
		ON DELETE NO ACTION
		ON UPDATE NO ACTION);

CREATE TABLE IF NOT EXISTS `blogdodev01`.`academic_background` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`major` VARCHAR(50) NOT NULL,
	`institution` VARCHAR(50) NOT NULL,
	`arrival_date` DATE NOT NULL,
	`departure_date` DATE NULL,
	`description` VARCHAR(250) NULL,
	`users_id` INT NOT NULL,
	PRIMARY KEY (`id`),
	INDEX `fk_users_academic_background_idx` (`users_id` ASC) VISIBLE,
	CONSTRAINT `fk_users_academic_background`
		FOREIGN KEY (`users_id`)
		REFERENCES `blogdodev01`.`users` (`id`)
		ON DELETE NO ACTION
		ON UPDATE NO ACTION);

CREATE TABLE IF NOT EXISTS `blogdodev01`.`stacks` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`name` VARCHAR(45) NULL,
	`users_id` INT NOT NULL,
	PRIMARY KEY (`id`),
	INDEX `fk_users_stacks_idx` (`users_id` ASC) VISIBLE,
	CONSTRAINT `fk_users_stacks`
		FOREIGN KEY (`users_id`)
		REFERENCES `blogdodev01`.`users` (`id`)
		ON DELETE NO ACTION
		ON UPDATE NO ACTION);