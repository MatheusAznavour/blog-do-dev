-- select user and belonged role
SELECT * FROM users INNER JOIN roles ON users.id=roles.users_id;