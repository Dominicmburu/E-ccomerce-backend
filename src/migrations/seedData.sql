INSERT INTO users (username, email, password) VALUES
('john_doe', 'john@example.com', 'hashedpassword1'),
('jane_doe', 'jane@example.com', 'hashedpassword2');

INSERT INTO products (name, price, stock) VALUES
('Laptop', 999.99, 50),
('Smartphone', 599.99, 100),
('Headphones', 49.99, 200);

INSERT INTO orders (user_id, total_price, status) VALUES
(1, 1099.99, 'completed'),
(2, 649.99, 'pending');

INSERT INTO order_items (order_id, product_id, quantity) VALUES
(1, 1, 1), 
(1, 3, 2), 
(2, 2, 1); 
