============================
📘 File Handling in NodeJS
============================

1. Main Theme:
---------------
NodeJS provides a built-in module called `fs` (File System) to interact with the local file system. It supports reading, writing, appending, copying, deleting, checking file status, and creating directories — both synchronously and asynchronously.

----------------------------------------
2. The fs Module (No Installation Needed)
----------------------------------------
```js
const fs = require('fs');

---

3. File Operations
==================

A. Creating & Writing Files
----------------------------
// Synchronous - blocks execution

fs.writeFileSync('./test.txt', 'Hey there');

// Asynchronous - non-blocking
fs.writeFile('./test_async.txt', 'Hello async', (err) => {
  if (err) throw err;
  console.log('File written asynchronously.');
});

---

B. Reading Files
-----------------
// Synchronous
const data = fs.readFileSync('./test.txt', 'utf8');
console.log('Sync read:', data);

// Asynchronous
fs.readFile('./test.txt', 'utf8', (err, result) => {
  if (err) throw err;
  console.log('Async read:', result);
});

---

C. Appending to Files
----------------------
// Synchronous
fs.appendFileSync('./test.txt', '\nNew data added');

// Asynchronous
fs.appendFile('./test.txt', '\nMore data asynchronously', (err) => {
  if (err) throw err;
  console.log('Data appended.');
});

---

D. Copying Files
------------------
// Copy test.txt to copy.txt
fs.copyFileSync('./test.txt', './copy.txt');

---

E. Deleting Files
------------------
// Delete copy.txt
fs.unlinkSync('./copy.txt');

---

F. Getting File Information (Stat)
-----------------------------------
// Get metadata of file
const stats = fs.statSync('./test.txt');
console.log('Is file?', stats.isFile());
console.log('Size:', stats.size, 'bytes');

---

4. Directory Operations
=========================

// Create nested directories using recursive option
fs.mkdirSync('./my_docs/a/b', { recursive: true });

---

5. Synchronous vs. Asynchronous
===============================

| Type        | Description                        | Example               |
|-------------|------------------------------------|------------------------|
| Synchronous | Blocks execution, returns result   | fs.readFileSync()     |
| Asynchronous| Non-blocking, uses callbacks       | fs.readFile()         |

// Example Sync
try {
  const content = fs.readFileSync('./test.txt', 'utf8');
  console.log(content);
} catch (err) {
  console.error(err);
}

// Example Async
fs.readFile('./test.txt', 'utf8', (err, result) => {
  if (err) console.error(err);
  else console.log(result);
});

Note: Use async versions in production to avoid blocking the event loop.

---

6. Logging Use Case
====================

// Log requests with timestamp
const logData = `Request received at ${new Date().toISOString()}\n`;

fs.appendFile('./log.txt', logData, (err) => {
  if (err) throw err;
  console.log('Request logged.');
});

---

7. Key Takeaways
==================

- NodeJS has the `fs` module for working with the file system.
- All operations (read, write, append, copy, delete, stat, mkdir) come in sync and async versions.
- Sync methods block execution; async uses callbacks.
- Prefer async for scalability and performance.
- File handling is server-side only (not for browsers).

---

🔥 Pro Tip: Learn about NodeJS Event Loop and Promises to understand async deeply!
