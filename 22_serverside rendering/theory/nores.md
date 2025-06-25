# 🧠 Server-Side Rendering (SSR) with EJS and Node.js — Complete Notes

## 1. 🧾 Introduction to Server-Side Rendering (SSR)
- **Definition:** SSR means generating the **entire HTML page on the server** and sending it to the client's browser.
- **Contrast:** Unlike **client-side rendering** (CSR), where JavaScript builds the DOM, SSR sends pre-rendered HTML.
- **Example:**
  ```js
  app.get('/test', (req, res) => {
      res.send("<h1>From server</h1>");
  });
  ```

## 2. ⚠️ Challenges with Direct HTML Rendering

### ❌ Why it’s not scalable:
- **No CSS/JS separation** → Poor UI/UX
- **Cumbersome code**: Writing raw HTML in Node route handlers is messy.
- **Dynamic data is hard to manage**: Mixing logic and UI makes maintenance painful.
- **Example Problem:**
  ```js
  let list = "<ol>";
  allUrls.forEach(url => {
    list += `<li>${url.shortId} (${url.visitHistory.length})</li>`;
  });
  list += "</ol>";
  ```

## 3. 💡 Solution: Use Templating Engines

### ✅ What are templating engines?
- Tools to render HTML dynamically using logic (loops, conditionals).
- **Popular engines**:  
  - **EJS** (Embedded JavaScript) ✅  
  - Pug  
  - Handlebars

## 4. ⚙️ Implementing SSR with EJS in Express.js

### 4.1 🛠️ Installation and Setup
```bash
npm install ejs
```

#### Setup in Express:
```js
const path = require('path');
app.set('view engine', 'ejs');
app.set('views', path.resolve('./views'));
```

### 4.2 📤 Rendering EJS Templates

#### Basic Example:
```js
app.get('/', (req, res) => {
  res.render('home'); // looks for views/home.ejs
});
```

#### Passing Data:
```js
const allUrls = await URL.find({});
res.render('home', { urls: allUrls });
```

### 4.3 🧩 Writing Dynamic HTML in EJS

#### EJS Syntax:
- `<%= value %>` → Escape & print
- `<%- value %>` → Unescaped print (raw HTML)
- `<% code %>` → Run JS without output

#### Example - Loop:
```ejs
<ul>
  <% urls.forEach(url => { %>
    <li><%= url.shortId %></li>
  <% }); %>
</ul>
```

#### Example - Condition:
```ejs
<% if (id) { %>
  <p>URL Generated: <a href="/url/<%= id %>">Click here</a></p>
<% } %>
```

### 4.4 🧪 Practical Integration: Short URL App

#### 1. Home Page:
- Render `home.ejs` on root route
- Contains a form to enter original URLs
```html
<form action="/url" method="POST">
  <input name="url" type="text" required />
  <button>Shorten</button>
</form>
```

#### 2. Handle Form Submission:
```js
app.use(express.urlencoded({ extended: false }));

router.post('/url', async (req, res) => {
  const shortId = generateShortId(); // logic to shorten URL
  await URL.create({ shortId, redirectURL: req.body.url });
  res.render("home", { id: shortId });
});
```

#### 3. Display All URLs:
```js
const allUrls = await URL.find({});
res.render("home", { urls: allUrls });
```

#### 4. Populate Table in `home.ejs`:
```ejs
<table>
  <thead>
    <tr><th>#</th><th>Short ID</th><th>Original URL</th><th>Clicks</th></tr>
  </thead>
  <tbody>
    <% urls.forEach((url, index) => { %>
      <tr>
        <td><%= index + 1 %></td>
        <td><a href="/url/<%= url.shortId %>"><%= url.shortId %></a></td>
        <td><%= url.redirectURL %></td>
        <td><%= url.visitHistory.length %></td>
      </tr>
    <% }); %>
  </tbody>
</table>
```

## 5. ✅ Benefits of Using EJS for SSR

| Benefit | Description |
|--------|-------------|
| ✨ Clean Code | HTML is written in `.ejs` files, not in route handlers |
| 🎨 Design Friendly | Can use full HTML/CSS/JS without interference |
| 🔁 Dynamic Pages | Supports loops, conditionals, logic |
| 🧹 Maintainable | Clear separation of logic and presentation |
| 🔍 SEO-Friendly | HTML is fully pre-rendered on server |

> **Tip:** View Source shows final HTML (not JS-built DOM like in CSR).

## 6. 🧰 Developer Tools

- **VS Code Extension**: `EJS Language Support`
  - Adds syntax highlighting
  - Auto-closes tags and quotes

## ✅ Conclusion
EJS and Node.js provide a powerful, maintainable, and efficient way to build dynamic web pages on the server. Compared to manual HTML string concatenation, EJS simplifies code, improves scalability, and enables clean integration of server-side logic into UI components.