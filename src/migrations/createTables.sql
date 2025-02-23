CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(50) UNIQUE NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  price DECIMAL(10, 2) NOT NULL,
  stock INT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE orders (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id),
  total_price DECIMAL(10, 2) NOT NULL,
  status VARCHAR(20) DEFAULT 'pending',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE order_items (
  order_id INT REFERENCES orders(id),
  product_id INT REFERENCES products(id),
  quantity INT NOT NULL,
  PRIMARY KEY (order_id, product_id)
);

CREATE OR REPLACE FUNCTION register_user(param_username text, param_email text, param_password text)
RETURNS TABLE(id INT, username TEXT, email TEXT) AS $$
BEGIN
  INSERT INTO users (username, email, password)
  VALUES (param_username, param_email, param_password)
  RETURNING id, username, email;
END;
$$ LANGUAGE plpgsql;


CREATE OR REPLACE FUNCTION get_user_by_username(p_username VARCHAR(50))
RETURNS TABLE(id INT, username VARCHAR(50), email VARCHAR(100), password VARCHAR(255)) AS $$
BEGIN
  RETURN QUERY
  SELECT u.id, u.username, u.email, u.password
  FROM users u
  WHERE u.username = p_username;
END;
$$ LANGUAGE plpgsql;




