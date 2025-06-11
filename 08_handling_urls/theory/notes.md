# 🌐 Handling URLs in Node.js

## 🔎 What is a URL?

- **URL** stands for **Uniform Resource Locator**.
- It acts as a **human-friendly substitute** for an IP address (e.g., `google.com` for `142.250.187.142`).
- URLs are crucial in **backend development**, especially for routing and data retrieval.

---

## 🧱 Components of a URL

A URL is typically structured as:

protocol://domain/path?queryParameters


### 1. **Protocol**
- Defines **how the client communicates** with the server.
- Common types:
  - `http`: Hypertext Transfer Protocol (insecure)
  - `https`: Secure version using SSL encryption
  - `ws`: WebSockets for real-time data exchange

### 2. **Domain**
- **Represents the server's IP address** in a readable format.
- Examples:
  - `www.google.com`
  - `piyushgarg.dev`
  - `localhost:3000` (for local development)

### 3. **Path**
- Follows the domain, **identifying a resource** on the server.
- Begins with a slash (`/`).
- Examples:
  - `/` → Home or root
  - `/about` → About page
  - `/project/1` → Nested dynamic path
  - `/search`, `/results` → Search result endpoints

### 4. **Query Parameters**
- Follows a `?`, used to send **key-value data** to the server.
- Format: `?key=value&key2=value2`
- Examples:
  - `?userId=1`
  - `?name=John&role=admin`
  - `?q=nodejs+tutorial` (spaces replaced by `+`)

---

## ⚙️ URL Handling in Node.js

### Basic Retrieval
- Using Node's built-in `http` module:
  ```js
  const http = require('http');

  http.createServer((req, res) => {
    console.log(req.url); 
    // Example: /about?name=Ankit
  }).listen(3000);


Parsing the URL
```js
Step 1: Use the url module
Install (if needed): npm install url

Require and parse:


const url = require('url');
const parsedUrl = url.parse(req.url, true);
```
```js
Step 2: Extract data
parsedUrl.pathname → Just the path (/about)

parsedUrl.query → Query object: { name: 'Ankit', userId: '1' }

Access values:


parsedUrl.query.name // "Ankit"
parsedUrl.query.userId // "1"


🧠 Practical Usage in Servers
Use pathname to determine routing logic:

if (parsedUrl.pathname === '/about') {
  // Serve about page
}

// Use query to handle user-specific or filtered data:

if (parsedUrl.query.userId) {
  // Fetch user data from database using ID
}


| Concept           | Purpose                             | Example                      |
| ----------------- | ----------------------------------- | ---------------------------- |
| Protocol          | Defines communication rules         | `https`, `http`, `ws`        |
| Domain            | Human-readable IP address           | `google.com`, `localhost`    |
| Path              | Identifies the resource             | `/home`, `/user/2`           |
| Query Parameters  | Sends extra data                    | `?q=node&lang=en`            |
| `url.parse()`     | Breaks URL into components          | `{ pathname, query }`        |
| `parsedUrl.query` | Accesses query parameters as object | `{ name: "Ankit" }`          |
| `pathname` usage  | Route logic                         | `if (pathname === '/about')` |
| `query` usage     | Filter/search/data selection        | `query.userId === '1'`       |
