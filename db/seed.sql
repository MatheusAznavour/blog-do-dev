INSERT INTO users (username, email, password) 
    VALUES ("admin", "admin@123", "$2a$10$c.VpC4JmuJyiJ/vL44ml7uX0vACfXfajot/.gNijnAyaZ7UhvevJq");

INSERT INTO roles (name, users_id) 
    VALUES ("admin", 1);

-- article example
INSERT INTO articles (title, slug, content, users_id) 
    VALUES ("My first article!", "My-first-article!", "<p>This is a paragraph</p>", 1);