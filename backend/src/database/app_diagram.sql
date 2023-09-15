CREATE TABLE "User" (
  "id" varchar(36) PRIMARY KEY,
  "created_at" timestamp,
  "updated_at" timestamp,
  "full_name" varchar(255),
  "image" varchar(255),
  "total_points" int
);

CREATE TABLE "Answer" (
  "id" varchar(36) PRIMARY KEY,
  "trivia_id" varchar(36),
  "label" varchar(255),
  "is_correct" boolean
);

CREATE TABLE "Category" (
  "id" varchar(36) PRIMARY KEY,
  "name" varchar(255),
  "description" text
);

CREATE TABLE "Trivia" (
  "id" varchar(36) PRIMARY KEY,
  "created_at" timestamp,
  "updated_at" timestamp,
  "question" text,
  "correct_id" varchar(36)
);

CREATE TABLE "Comment" (
  "id" varchar(36) PRIMARY KEY,
  "content" text,
  "created_at" timestamp,
  "user_id" varchar(36),
  "trivia_id" varchar(36)
);

CREATE TABLE "Rating" (
  "id" varchar(36) PRIMARY KEY,
  "score" int,
  "created_at" timestamp,
  "user_id" varchar(36),
  "trivia_id" varchar(36)
);

CREATE TABLE "Following" (
  "id" varchar(36) PRIMARY KEY,
  "follower_id" varchar(36),
  "followee_id" varchar(36)
);

CREATE TABLE "Authentication" (
  "id" varchar(36) PRIMARY KEY,
  "username" varchar(255),
  "password_hash" varchar(255),
  "email" varchar(255),
  "role" varchar(50)
);

CREATE TABLE "ErrorLog" (
  "id" varchar(36) PRIMARY KEY,
  "description" text,
  "created_at" timestamp
);

CREATE TABLE "SessionLog" (
  "id" varchar(36) PRIMARY KEY,
  "user_id" varchar(36),
  "login_time" timestamp,
  "logout_time" timestamp
);

CREATE TABLE "ActivityLog" (
  "id" varchar(36) PRIMARY KEY,
  "activity_description" text,
  "user_id" varchar(36),
  "activity_time" timestamp
);

ALTER TABLE "Answer" ADD FOREIGN KEY ("trivia_id") REFERENCES "Trivia" ("id");

ALTER TABLE "Trivia" ADD FOREIGN KEY ("correct_id") REFERENCES "Answer" ("id");

ALTER TABLE "Comment" ADD FOREIGN KEY ("user_id") REFERENCES "User" ("id");

ALTER TABLE "Comment" ADD FOREIGN KEY ("trivia_id") REFERENCES "Trivia" ("id");

ALTER TABLE "Rating" ADD FOREIGN KEY ("user_id") REFERENCES "User" ("id");

ALTER TABLE "Rating" ADD FOREIGN KEY ("trivia_id") REFERENCES "Trivia" ("id");

ALTER TABLE "Following" ADD FOREIGN KEY ("follower_id") REFERENCES "User" ("id");

ALTER TABLE "Following" ADD FOREIGN KEY ("followee_id") REFERENCES "User" ("id");

ALTER TABLE "SessionLog" ADD FOREIGN KEY ("user_id") REFERENCES "User" ("id");

ALTER TABLE "ActivityLog" ADD FOREIGN KEY ("user_id") REFERENCES "User" ("id");
