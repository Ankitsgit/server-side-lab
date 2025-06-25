# 📦 Modules in Node.js

## 🔹 What is a Module?
- In Node.js, **each JavaScript file is treated as a module**.
- A module encapsulates code in its own scope.
- Helps in organizing large codebases into smaller, manageable units.

---

## 🔹 Why Use Modules?
- Encourages **modular programming**.
- Improves **code reusability**, **readability**, and **maintainability**.
- Crucial for building **scalable Node.js applications**.

---

## 🔹 Importing Modules with `require()`

### ✅ Syntax:
```js
const moduleName = require('./fileName');
```

### 🔄 How `require()` Resolves Modules:
| Type | Example | Description |
|------|---------|-------------|
| Relative path | `./maths.js` | Looks in current directory |
| Built-in/Installed | `fs`, `http`, `express` | Looks in core or installed node_modules |

> 📌 `require()` is **built-in** to Node.js (not standard JavaScript).

---

## 🔹 Exporting from a Module

To **share** functions or variables from one file to another, they must be **exported**.

### ✅ Method 1: `module.exports` (Most Flexible)
Exports a **single item** or an **object with multiple items**.
```js
// maths.js
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

module.exports = {
  add,
  subtract
};
```

### ✅ Method 2: `exports` (Syntactic Sugar)
Used to export **multiple items** by adding them as properties.
```js
// maths.js
exports.add = (a, b) => a + b;
exports.subtract = (a, b) => a - b;
```

> ⚠️ Don’t assign a new value to `exports` directly — it will break the link with `module.exports`.

---

## 🔹 Using Imported Functionality

### Example with Object:
```js
// index.js
const math = require('./maths');
console.log(math.add(3, 5));       // Output: 8
console.log(math.subtract(9, 2));  // Output: 7
```

### Example with Destructuring:
```js
const { add, subtract } = require('./maths');
console.log(add(10, 20));         // Output: 30
console.log(subtract(20, 5));     // Output: 15
```

---

## 🔹 Built-in Node.js Modules

Node.js has **core modules** that don’t require installation:

| Module | Purpose |
|--------|---------|
| `fs`   | File system operations |
| `http` | Create web servers |
| `crypto` | Cryptographic operations |
| `path` | File path utilities |
| `buffer` | Binary data manipulation |

### Example:
```js
const fs = require('fs');
const http = require('http');
```

---

## 🧠 Final Summary
- **Modular programming** keeps Node.js apps organized.
- Use `require()` to import code from another file/module.
- Use `module.exports` or `exports` to export functionality.
- Built-in modules like `http`, `fs`, and `crypto` power Node.js applications.

> ✅ Tip: Always structure code into modules for better development and testing!
