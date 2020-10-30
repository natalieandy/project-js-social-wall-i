CREATE TABLE reply (
  user_id serial PRIMARY KEY,
	username VARCHAR ( 50 ) UNIQUE NOT NULL,
	password VARCHAR ( 50 ) NOT NULL,
	email VARCHAR ( 255 ) UNIQUE NOT NULL,
	created_on TIMESTAMP NOT NULL,
  last_login TIMESTAMP
)
}
-- Referenced: https://www.postgresqltutorial.com/postgresql-create-table/
