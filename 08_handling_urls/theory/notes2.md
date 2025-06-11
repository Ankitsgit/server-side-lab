## 🧠 What is a URL?

- **URL** stands for **Uniform Resource Locator**.
- It is a **human-readable address** pointing to a resource on the Internet.
- It acts as a readable alias for complex IP addresses.

> `"URL basically means a user-friendly name for your IP address."`

---

## 🧱 Components of a URL

### 1. **Protocol**
- Defines how the browser communicates with the server.
- Examples:
  - `http` → HyperText Transfer Protocol
  - `https` → Secure HTTP using SSL
  - `ws` → WebSocket for real-time communication

> `"http://www.mywebsite.com/" → This part is the protocol."`

---

### 2. **Domain Name**
- A readable name mapped to an IP via **DNS (Domain Name System)**.
- Example: `mywebsite.com`

> `"We buy a domain and point it to our IP so that the website has a human-friendly name."`

---

### 3. **Path**
- Indicates **which resource/page** is requested.
- Starts with `/`, e.g.:
  - `/` → Root (homepage)
  - `/projects/1` → Nested path

> `"The slash you see represents the path or homepage."`

---

### 4. **Query Parameters**
- Pass **extra data** to the server.
- Syntax:
  - Begins with `?`
  - Key-value pairs: `key=value`
  - Multiple pairs separated by `&`: `key1=value1&key2=value2`
  - Spaces are usually encoded or replaced with `+`

> `"After the question mark, anything is treated as query parameters."`

---

## 🔧 URL Handling in Native NodeJS

### Using `request.url`
- The native HTTP module gives access to the URL using `req.url`.
- However, it **does not parse** the query parameters or URL components.

> `"The built-in module only gives the raw URL and doesn’t split query parameters."`

---

## 📦 Using External URL Parsing (npm `url` Package)

### Installation
```bash
npm install url

# Usage
const url = require('url');
const parsedUrl = url.parse(req.url, true);  // true parses query string into an object

Output Object
protocol

hostname

pathname

query (parsed query parameters)

"The external package can break down the URL into all parts including query parameters."

🧩 Responding Based on URL Parts
After parsing, use pathname to route requests:

switch(parsedUrl.pathname) {
  case '/about':
    // serve about page
    break;
  case '/search':
    const searchQuery = parsedUrl.query.q;
    // fetch data using query
    break;
}
This enables:

Page routing (/home, /contact)

API responses based on query values

Interaction with databases using extracted parameters

"We can create switch cases for paths and use extracted query params to interact with our database."

🌍 Real-World Examples
# Google Search:


https://www.google.com/search?q=nodejs
→ pathname = /search, query = { q: 'nodejs' }
# YouTube Search:



https://www.youtube.com/results?search_query=javascript


| Feature         | Native Node.js | With `url` Package           |
| --------------- | -------------- | ---------------------------- |
| Gets full URL   | ✅              | ✅                            |
| Parses path     | ✅ (manually)   | ✅                            |
| Parses query    | ❌              | ✅ (`parseQueryString: true`) |
| Routing Support | Manual         | Enhanced                     |


✅ Key Takeaways
Understanding a URL is crucial for web development in Node.js.

Native HTTP module lacks detailed parsing.

Use external libraries (url, querystring, or URL from built-in url) for full control.

Enables building of dynamic servers that respond based on route and data passed via URL.