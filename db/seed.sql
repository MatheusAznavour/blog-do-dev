INSERT INTO users (username, email, password) 
    VALUES ("admin", "admin@123", "$2a$10$c.VpC4JmuJyiJ/vL44ml7uX0vACfXfajot/.gNijnAyaZ7UhvevJq");

INSERT INTO roles (name, users_id) 
    VALUES ("admin", 1);