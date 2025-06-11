Here are notes generated from the provided source transcript on building an HTTP server in Node.js:

The video tutorial demonstrates how to build a basic **HTTP web server using Node.js**. It is described as an easy, important, and beginner-level tutorial.
```js
The process starts in an empty project directory (named 'server' in the video example) with a terminal and code area.

1.  **Initialising the Project**:
    *   The first step is to use `npm init` in the terminal.
    *   This command asks a few questions (the video creator accepts the defaults) and creates a `package.json` file with basic scripts and configuration.

2.  **Creating the Main File**:
    *   A `.js` file is created and named `index.js`.
    *   Naming the main file `index.js` is a **good practice** in the production world because it serves as the entry point for the project's execution. Developers often look for `index.js` first to understand where execution begins.
    *   The `package.json` file automatically sets `main` to `index.js`, indicating it's the main file where execution starts.

3.  **Requiring the HTTP Module**:
    *   To build an HTTP server, Node.js has a built-in module called `http`.
    *   This module is required using `const http = require('http');`.
    *   It's identified as a built-in module because `require()` is used without a dot-slash (`./`) prefix.
    *   The `http` package allows you to create your own server.

4.  **Creating the Server**:
    *   A variable is created to hold the server, for example, `const myServer = ...`. The name can be anything like `server` or `myServer`.
    *   The `http.createServer()` function is called to create a web server.
    *   This function takes a **request listener** as a callback function. This callback function is responsible for processing incoming requests.
    *   The callback function passed to `http.createServer()` receives **two arguments**: `req` (or `request`) and `res` (or `response`).
        *   The `req` object contains information about the **incoming request**. This includes details like who is requesting, their IP address, what they requested, and other metadata or data from the client side. The `req` object is described as very large, containing information about the user, browser, and the type of request. It contains information like headers (`req.headers`), which provide extra details about the request. It also includes the request path or URL (`req.url` or `req.path`).
        *   The `res` object is used to **send the response back** to the client.

5.  **Handling Requests and Sending Responses**:
    *   When an incoming request arrives at the server, the callback function passed to `http.createServer()` is executed.
    *   Inside this function, you can perform actions and send a response.
    *   An example shown is logging "New Request Received" to the console (`console.log('New Request Received');`) whenever a new request comes in.
    *   To send a response, the `res.end()` method is used. The example sends "Hello From Server" back to the user (`res.end('Hello From Server');`).
    *   The server can send anything back as a response, including text, images, or even entire HTML.

6.  **Listening on a Port**:
    *   To make the server accessible for incoming requests, it needs to **listen on a specific port number**.
    *   A port is described as a "door" on a machine.
    *   The `myServer.listen()` method is used for this, taking the port number as the first argument.
    *   For local development, ports like **8000** are often used. Other ports like 8001, 8002, etc., can also be used.
    *   Multiple servers cannot run on the same port; each server needs a unique port number.
    *   The `listen()` method can also take an **optional callback function** as a second argument. This function runs if everything initialises correctly.
    *   The video uses this callback to log "Server Started", indicating successful server launch. If this message doesn't appear, it means the server didn't start.
    *   The `listen` method makes the server listen for incoming requests on the specified port.

7.  **Running the Server**:
    *   The server can be started directly using `node index.js`.
    *   However, it's a good practice to use an **npm script**.
    *   A `start` script is added to `package.json` with the command `node index.js`.
    *   The server is then started from the terminal using `npm start`.
    *   The console shows "Server Started" if successful.

8.  **Testing the Server**:
    *   The server running on the local machine can be accessed through a web browser by typing `localhost:<port_number>`, e.g., `localhost:8000`.
    *   Upon accessing `localhost:8000`, the browser receives and displays "Hello From Server".
    *   Simultaneously, the server's console shows "New Request Received", demonstrating that the callback function was executed upon receiving the request.
    *   Any changes made to the server code require restarting the server (Ctrl+C in the terminal to stop, then `npm start` again) for the changes to take effect.

9.  **Exploring the Request Object**:
    *   The `req` (request) object is a large object containing all information about the user's request.
    *   Logging the entire `req` object (`console.log(req);`) reveals details like the client (browser), IP address (though not found immediately in the video example), and headers (`req.headers`).
    *   Request headers contain extra information about the request, such as the host (`localhost:8000` in the example) and information about the client's system (like 'Mac' in the example).

10. **Implementing a Logging Mechanism**:
    *   The video demonstrates adding functionality to log incoming requests to a file.
    *   The `fs` (File System) built-in module is required (`const fs = require('fs');`).
    *   Inside the request handling callback, `fs.appendFile()` (a **non-blocking** asynchronous method) is used to write logs to a file named `log.txt`.
    *   **Important Note**: When handling concurrent (parallel) requests, it is crucial to use **non-blocking** (asynchronous) I/O operations like `fs.appendFile` instead of blocking (synchronous) ones like `fs.appendFileSync`. Using blocking operations can tie up Node.js's threads (Event Loop and worker threads/thread pool) and make other users wait for a long time, negatively impacting performance.
    *   The log entry includes the current time (`Date.now()`) and a message like "New Request Received", followed by a newline character.
    *   The `log.txt` file is created upon the first request, containing entries for each request received. Browsers often make an extra call for a 'favicon', which might result in an unexpected extra log entry initially.
    *   More details can be added to the log, such as the user's IP address and the request path/URL.

11. **Handling Different Paths/URLs**:
    *   The `req.url` or `req.path` property of the request object contains the path the user is requesting (e.g., `/about`, `/contactus`).
    *   This can be used to send different responses based on the requested path.
    *   A **switch case** structure is demonstrated to handle different URLs:
        *   Case `/` (representing the home page): `res.end('Home Page');`.
        *   Case `/about`: `res.end('I am Piyush Garg');`.
        *   Default case (for any other path not explicitly handled): `res.end('404 Not Found');`.
    *   This allows creating a **multi-page** server experience where different URLs serve different content.
    *   The log file is updated with the requested path for each incoming request.

12. **Key Concepts and Principles**:
    *   Node.js provides the **`http` module** for building web servers.
    *   The **`http.createServer()`** function is used, which takes a **request handler** function as an argument.
    *   The request handler function receives **`request` and `response` objects** to access incoming request information and send responses.
    *   It is critical to use **non-blocking tasks** inside the request handler, especially for I/O operations or potentially slow tasks.
    *   Avoid doing CPU-intensive work (like image processing) directly within the request handler to prevent blocking the Event Loop and thread pool, which would make other users wait.
    *   The server is made accessible by calling the **`listen()`** method on a specific **port**.

13. **Future Direction**:
    *   This tutorial created a very basic server.
    *   Future videos will upgrade this server by adding more features.
    *   The series will gradually move towards using the **Express framework**, which simplifies server development.