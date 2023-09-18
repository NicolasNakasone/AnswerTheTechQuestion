CREATE TABLE "User" (
  "id" varchar(36) PRIMARY KEY,
  "created_at" timestamp,
  "updated_at" timestamp,
  "full_name" varchar(255),
  "image" varchar(255),
  "total_points" int,
  "user_rank_id" varchar(36),
  "user_level_id" varchar(36)
);

CREATE TABLE "UserRank" (
  "id" varchar(36) PRIMARY KEY,
  "name" varchar(255),
  "description" text
);

CREATE TABLE "UserLevel" (
  "id" varchar(36) PRIMARY KEY,
  "number" int,
  "experience_points" int
);

CREATE TABLE "Category" (
  "id" varchar(36) PRIMARY KEY,
  "name" varchar(255),
  "description" text
);

CREATE TABLE "Question" (
  "id" varchar(36) PRIMARY KEY,
  "question" text,
  "user_rank_id" varchar(36),
  "correct_answer_id" varchar(36)
);

CREATE TABLE "CategoryQuestion" (
  "id" varchar(36) PRIMARY KEY,
  "category_id" varchar(36),
  "question_id" varchar(36)
);

CREATE TABLE "Answer" (
  "id" varchar(36) PRIMARY KEY,
  "option" text,
  "is_correct" boolean,
  "question_id" varchar(36)
);

CREATE TABLE "Comment" (
  "id" varchar(36) PRIMARY KEY,
  "content" text,
  "created_at" timestamp,
  "user_id" varchar(36),
  "question_id" varchar(36)
);

CREATE TABLE "Rating" (
  "id" varchar(36) PRIMARY KEY,
  "score" int,
  "created_at" timestamp,
  "user_id" varchar(36),
  "question_id" varchar(36)
);

CREATE TABLE "Following" (
  "id" varchar(36) PRIMARY KEY,
  "follower_id" varchar(36),
  "followee_id" varchar(36)
);

CREATE TABLE "Authentication" (
  "id" varchar(36) PRIMARY KEY,
  "username" varchar(255) UNIQUE,
  "password_hash" varchar(255),
  "email" varchar(255) UNIQUE,
  "user_id" varchar(36),
  "role" varchar(50)
);

CREATE TABLE "SessionLog" (
  "id" varchar(36) PRIMARY KEY,
  "user_id" varchar(36),
  "login_time" timestamp,
  "logout_time" timestamp
);

CREATE TABLE "ActivityLog" (
  "id" varchar(36) PRIMARY KEY,
  "activity_description" text
);

CREATE TABLE "Trivia" (
  "id" varchar(36) PRIMARY KEY,
  "created_at" timestamp,
  "updated_at" timestamp,
  "title" varchar(255),
  "description" text,
  "user_id" varchar(36),
  "categories" Category[],
  "levels" UserLevel[],
  "questions" Question[],
  "ratings" Rating[]
);

ALTER TABLE "User" ADD FOREIGN KEY ("user_rank_id") REFERENCES "UserRank" ("id");

ALTER TABLE "User" ADD FOREIGN KEY ("user_level_id") REFERENCES "UserLevel" ("id");

ALTER TABLE "Question" ADD FOREIGN KEY ("user_rank_id") REFERENCES "UserRank" ("id");

ALTER TABLE "Question" ADD FOREIGN KEY ("correct_answer_id") REFERENCES "Answer" ("id");

ALTER TABLE "CategoryQuestion" ADD FOREIGN KEY ("category_id") REFERENCES "Category" ("id");

ALTER TABLE "CategoryQuestion" ADD FOREIGN KEY ("question_id") REFERENCES "Question" ("id");

ALTER TABLE "Answer" ADD FOREIGN KEY ("question_id") REFERENCES "Question" ("id");

ALTER TABLE "Comment" ADD FOREIGN KEY ("user_id") REFERENCES "User" ("id");

ALTER TABLE "Comment" ADD FOREIGN KEY ("question_id") REFERENCES "Question" ("id");

ALTER TABLE "Rating" ADD FOREIGN KEY ("user_id") REFERENCES "User" ("id");

ALTER TABLE "Rating" ADD FOREIGN KEY ("question_id") REFERENCES "Question" ("id");

ALTER TABLE "Following" ADD FOREIGN KEY ("follower_id") REFERENCES "User" ("id");

ALTER TABLE "Following" ADD FOREIGN KEY ("followee_id") REFERENCES "User" ("id");

ALTER TABLE "Authentication" ADD FOREIGN KEY ("user_id") REFERENCES "User" ("id");

ALTER TABLE "SessionLog" ADD FOREIGN KEY ("user_id") REFERENCES "User" ("id");

ALTER TABLE "Trivia" ADD FOREIGN KEY ("user_id") REFERENCES "User" ("id");

ALTER TABLE "Trivia" ADD FOREIGN KEY ("categories") REFERENCES "Category" ("id");

ALTER TABLE "Trivia" ADD FOREIGN KEY ("levels") REFERENCES "UserLevel" ("id");

ALTER TABLE "Trivia" ADD FOREIGN KEY ("questions") REFERENCES "Question" ("id");
