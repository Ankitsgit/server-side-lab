# 📘 Building an HTTP Server in NodeJS

## 🎯 Overall Goal
Build a basic HTTP server using Node.js's built-in `http` module, focusing on foundational understanding before exploring frameworks like Express.

---

## 📦 Project Initialization

- Initialize Node project:
  ```bash
  npm init
  ```
- Creates `package.json` for dependency and config management.
- Default entry point: `index.js`

> ✅ **Best Practice**: Always name the main file `index.js` for consistency and clarity across development teams.

---

## 🌐 HTTP Module

- Use the built-in `http` module:
  ```js
  const http = require('http');
  ```
- No need to install externally.

---

## 🛠️ Creating a Server

```js
const server = http.createServer((req, res) => {
  // handle request and send response
});
```

- **`http.createServer()`**: Creates an HTTP server.
- Takes a **request listener callback function** as argument.

> 🗣️ *"ये हमारे लिए एक वेब सर्वर बना देगा"*  
> _("This creates a web server for us.")_

---

## ⚙️ Request Listener Function

- Callback gets:
  - `req` (Request object)
  - `res` (Response object)

### ✅ `req` contains:
- `req.url`: Requested path (e.g., `/about`)
- `req.headers`: Request headers

### ✅ `res` is used to:
- Send data back using `res.end()`
  ```js
  res.end('Hello from server');
  ```

---

## 🔉 Starting the Server

```js
server.listen(8000, () => {
  console.log("Server started on port 8000");
});
```

- Starts the server on port 8000
- Port = like a "door" through which traffic is received

---

## 🚦 Accessing Request Info

```js
console.log(req.url);
console.log(req.headers);
```

> 🗣️ *"हर एक इनफॉर्मेशन अवेलेबल है जो यूजर ने सेंड की है"*  
> _("Every piece of information sent by the user is available.")_

---

## 📂 Logging Requests (with `fs`)

- Use Node's built-in `fs` module:
  ```js
  const fs = require('fs');

  fs.appendFile('log.txt', `${req.url}\n`, (err) => {
    if (err) throw err;
  });
  ```

> ⚠️ Use **asynchronous** methods like `fs.appendFile`, **not synchronous**, to prevent blocking the event loop.

---

## 🔀 Basic Routing with `req.url`

```js
switch (req.url) {
  case '/':
    res.end('Home Page');
    break;
  case '/about':
    res.end('About Page');
    break;
  case '/contact':
    res.end('Contact Page');
    break;
  default:
    res.end('404 Not Found');
}
```

- Enables basic routing logic.

---

## ⏱️ Synchronous vs Asynchronous Operations

> ⚠️ Avoid **CPU-intensive** or **blocking** tasks inside request handlers like:
- Image processing
- `fs.readFileSync` or `appendFileSync`

> 🗣️ *"तुम इवेंट लूप को ब्लॉक कर लोग... बाकी यूजर्स को वेट करना पड़ेगा"*  
> _"You will block the event loop... other users will have to wait."_

---

## 🏁 Running the Server with `npm start`

- Add to `package.json`:
  ```json
  "scripts": {
    "start": "node index.js"
  }
  ```
- Run with:
  ```bash
  npm start
  ```

---

## 🧠 Most Important Takeaways

- ✅ Use `http.createServer()` to create the server
- ✅ Handle requests with `req` and respond with `res.end()`
- ✅ Start the server with `server.listen(port)`
- ✅ Route requests using `req.url`
- ✅ Log requests using `fs.appendFile`
- ✅ Always use **non-blocking**, asynchronous functions
- ✅ Name your main file `index.js`
- ✅ Add an npm `start` script for convenience

---

## 📌 Conclusion

This tutorial lays the **foundational building blocks** of a web server in Node.js using only core modules. It stresses **clean practices**, **asynchronous handling**, and **modular thinking** — preparing learners to graduate to frameworks like Express.js.

> 📈 **Next Step**: Learn Express.js for advanced routing, middleware, and REST APIs.