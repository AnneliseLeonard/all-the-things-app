CREATE TABLE `hobbies` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`slug` text NOT NULL,
	`icon` text,
	`description` text
);
--> statement-breakpoint
CREATE UNIQUE INDEX `hobbies_slug_unique` ON `hobbies` (`slug`);--> statement-breakpoint
CREATE TABLE `hobbyLog` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`description` text,
	`started_at` integer NOT NULL,
	`ended_at` integer NOT NULL,
	`hobby_id` integer NOT NULL,
	`created_at` integer NOT NULL,
	`updated_at` integer NOT NULL,
	FOREIGN KEY (`hobby_id`) REFERENCES `hobbies`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `hobbyLogProject` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`description` text,
	`key` text NOT NULL,
	`hobby_log_id` integer NOT NULL,
	`created_at` integer NOT NULL,
	`updated_at` integer NOT NULL,
	FOREIGN KEY (`hobby_log_id`) REFERENCES `hobbyLog`(`id`) ON UPDATE no action ON DELETE no action
);
