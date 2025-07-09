CREATE TABLE `hobby` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`slug` text NOT NULL,
	`description` text,
	`created_at` integer NOT NULL,
	`updated_at` integer NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `hobby_slug_unique` ON `hobby` (`slug`);--> statement-breakpoint
CREATE TABLE `hobbyLog` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`description` text,
	`started_at` integer,
	`ended_at` integer,
	`hobby_id` integer NOT NULL,
	`created_at` integer NOT NULL,
	`updated_at` integer NOT NULL,
	FOREIGN KEY (`hobby_id`) REFERENCES `hobby`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `hobbyProject` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`description` text,
	`started_at` integer,
	`ended_at` integer,
	`hobby_id` integer NOT NULL,
	`hobby_log_id` integer NOT NULL,
	`created_at` integer NOT NULL,
	`updated_at` integer NOT NULL,
	FOREIGN KEY (`hobby_id`) REFERENCES `hobby`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`hobby_log_id`) REFERENCES `hobbyLog`(`id`) ON UPDATE no action ON DELETE no action
);
