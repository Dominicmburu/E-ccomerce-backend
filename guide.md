/e-commerce-backend
├── /config                  # Configuration files (DB, JWT, etc.)
│   ├── dbConfig.js          # Database connection configuration
│   ├── jwtConfig.js         # JWT token settings
│   ├── rateLimitConfig.js   # Rate limiting config
├── /controllers             # Controller logic for handling API requests
│   ├── authController.js    # User authentication (login, register)
│   ├── productController.js # Product-related logic (CRUD)
│   ├── orderController.js   # Order-related logic (CRUD)
│   ├── userController.js    # User-related logic (CRUD)
├── /middlewares             # Custom middlewares (auth, rate limiter)
│   ├── authMiddleware.js    # Middleware to check JWT token
│   ├── rateLimitMiddleware.js # Rate limit middleware
│   ├── errorHandler.js      # Error handling middleware
├── /prisma                  # Prisma-related files
│   ├── schema.prisma        # Prisma schema defining the models
│   ├── migrations/          # Prisma migration files
├── /routes                  # Route handlers (Express routes)
│   ├── authRoutes.js        # Routes for authentication (login, register)
│   ├── productRoutes.js     # Routes for products (CRUD)
│   ├── orderRoutes.js       # Routes for orders (CRUD)
│   ├── userRoutes.js        # Routes for users (CRUD)
├── /services                # Logic for handling complex tasks (e.g., database queries)
│   ├── authService.js       # Authentication logic (JWT, cookies, user management)
│   ├── productService.js    # Product-related services (CRUD, stored procedures)
│   ├── orderService.js      # Order-related services (CRUD, stored procedures)
│   ├── userService.js       # User-related services (CRUD, stored procedures)
├── /utils                   # Utility functions (e.g., rate limiting)
│   ├── rateLimiter.js       # Rate limiting functionality
│   ├── jwtUtils.js          # Helper functions for JWT creation/validation
│   ├── errorUtils.js        # Utility for error handling
├── /public                  # Public files (static files, documentation)
│   ├── /images              # Product images or static files
├── .env                     # Environment variables (DB creds, JWT secret, etc.)
├── .gitignore               # Git ignore file
├── package.json             # Node.js project dependencies and scripts
└── server.js                # Main server entry point (Express app)

npx prisma migrate dev --name init
https://chatgpt.com/c/67bb3af7-6c34-8004-9117-64c3cd9ac7a2