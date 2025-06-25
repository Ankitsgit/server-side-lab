# 📘 Postman & API Testing – Notes

---

## 1. Introduction to Postman
### 🔍 Purpose
- Postman is a **free tool** for testing and documenting **APIs**.
- Useful when browser **can't handle requests like POST, PATCH, DELETE**.

### 🧩 Availability
- Free download: [postman.com](https://www.postman.com)
- Simple to install on all platforms.

### 🛠️ Core Functionality
- Allows developers to make **HTTP requests**: `GET`, `POST`, `PATCH`, `DELETE`, etc.
- Helps test server endpoints and inspect responses.

### 💡 User Interface
- New requests via **"+" button**.
- Choose HTTP methods from a dropdown menu.

---

## 2. Testing GET Requests with Postman
### ⚙️ Process
- Test URLs like:  
  - `http://localhost:8000/users`  
  - `http://localhost:8000/api/users`

### 🧾 Inspecting Responses
- **Response Body**: Viewable as `Raw`, `Pretty`, `Preview`.
- **Status Code**:  
  - `200` means success (`एवरीथिंग गान गुड`).
- **Response Time**:  
  - Displayed in milliseconds (e.g., 6 ms, 12 ms).  
  - Important in production: less time = better UX.
- **Response Size**:  
  - Shows data size (e.g., 14 KB, 135.9 KB).

---

## 3. Implementing and Testing POST Requests
### 🧱 Why POST?
- Browsers perform only GET by default.  
- POST is needed to **send data** (e.g., to create users).

### 📨 Sending Data in POST (Request Body)
- **Postman Options**:
  - `x-www-form-urlencoded`: Like filling a website form.
  - `Raw – JSON`: For structured data; introduced later.

### 🔧 Server-Side Handling (Express.js)
- **Middleware Required**:
  - `express.urlencoded({ extended: false })`
  - Parses incoming `x-www-form-urlencoded` data.
  - Without this, `req.body` is `undefined`.

- **Usage**:
  ```js
  app.use(express.urlencoded({ extended: false }));
  ```

### 🧠 POST Logic Flow
1. **Retrieve Data**: From `req.body`.
2. **Generate ID**:  
   ```js
   const id = users.length + 1;
   ```
3. **Create User Object**.
4. **Push to Users List**.
5. **Persist Data**:
   - Use `fs` module + `JSON.stringify`.
   - Save to `mockData.json`.
6. **Respond**:
   ```js
   res.send({ status: "Success", id });
   ```

---

## 4. Importance of API Performance
- **Response Time is key**:
  - Tracked for all requests.
  - Aim to keep this **low for better UX**.
  - Quotes:  
    > "जितना ज्यादा ये टाइम लेगा ना उतना ही ज्यादा तुम्हारी यूजर्स को वेट करना पड़ेगा"

---

## 5. Assignment – PATCH and DELETE
### 📌 Task
- Implement:
  - **PATCH**: To update user data.
  - **DELETE**: To remove users.

### 🧩 Tools & Logic
- Use Postman to test these requests.
- Write corresponding **server-side logic** in Express.
- Use JS array methods (`map`, `filter`, etc.) for operations.

---

## ✅ Summary
- Postman is essential for full API testing beyond browser capabilities.
- Supports detailed inspection of **GET and POST** requests.
- Emphasizes:
  - **Middleware** for parsing data.
  - **Response inspection** (time, size, code).
  - Importance of **API performance**.
- Introduces PATCH and DELETE as logical extensions.
