Assignment 1 --- Microservices with API Gateway
=============================================

This project demonstrates a simple microservices architecture with an API Gateway in Node.js using Express and http-proxy-middleware.

📂 Project Structure
--------------------

microservices-assignment-1/\
├─ api-gateway/      # Runs on port 3000\
│  └─ src/index.js   # Forwards requests to services\
├─ user-service/     # Runs on port 3001\
│  └─ src/index.js   # Returns hardcoded users\
├─ order-service/    # Runs on port 3002\
│  └─ src/index.js   # Returns hardcoded orders\
└─ README.md

🚀 Services Overview
--------------------

### 👤 User Service (port 3001)

Endpoint: GET /users\
Response:

[{ "id": 1, "name": "Alice" }]

### 📦 Order Service (port 3002)

Endpoint: GET /orders\
Response:

[{ "id": 101, "item": "Book" }]

### 🌐 API Gateway (port 3000)

Proxies requests:\
- /api/users → forwards to User Service\
- /api/orders → forwards to Order Service

⚙️ Setup & Run
--------------

Open three terminals (or use something like concurrently).

1\. User Service\
cd user-service\
npm install\
npm start

2\. Order Service\
cd order-service\
npm install\
npm start

3\. API Gateway\
cd api-gateway\
npm install\
npm start

🧪 Testing the setup
--------------------

### Using curl

curl http://localhost:3000/api/users\
→ [{"id":1,"name":"Alice"}]

curl http://localhost:3000/api/orders\
→ [{"id":101,"item":"Book"}]

### Direct access (optional)

curl http://localhost:3001/users\
curl http://localhost:3002/orders

🛠 Health Endpoints (optional)
------------------------------

Gateway → GET http://localhost:3000/health\
Users → GET http://localhost:3001/health\
Orders → GET http://localhost:3002/health

📬 Postman
----------

You can also test with Postman:\
1\. Create a new collection called Assignment 1.\
2\. Add two GET requests:\
   - http://localhost:3000/api/users\
   - http://localhost:3000/api/orders\
3\. Send the requests and confirm responses.

📌 Notes
--------

- Requires Node.js 18+ (includes npm).\
- If a service is down, the API Gateway will return a proxy error.\
- Ports can be changed by setting a PORT environment variable before starting each service.
