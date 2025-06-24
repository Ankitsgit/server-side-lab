# Mongoose

1. Schema - Define the Structure
    Schema - Model
    Using Model we do CRUD Operation


# Mongoose & Express Integration: Key Notes

## 1. Transition from File Storage to MongoDB

* **Old Method:** Used `fs` module to read/write JSON files.

  * Example: `fs.readFile` to get data, `fs.writeFile` to save.
* **New Approach:** Store and manage data in MongoDB.

  * Improves scalability, persistence, and data integrity.

## 2. Start MongoDB Service

* MongoDB must be running before connecting.
* Common command to verify:

  ```bash
  mongosh
  ```
* Default address:
  `127.0.0.1:27017`

## 3. Install Mongoose

* Mongoose is an ODM (Object Data Modelling) library for MongoDB in Node.js.
* Simplifies schema design and CRUD operations.

```bash
npm install mongoose
```

* Verify in `package.json`:

```json
"mongoose": "6.8.4"
```

## 4. Mongoose Workflow: Schema → Model → CRUD

1. **Schema** – Defines structure of documents.
2. **Model** – Interface for the collection.
3. **CRUD** – Create, Read, Update, Delete using the model.

## 5. Defining a Schema

Defines field types and validation for a document.

```js
const userSchema = new mongoose.Schema({
  first_name: { type: String, required: true },
  last_name: { type: String },
  email: { type: String, required: true, unique: true },
  gender: { type: String },
  job_title: { type: String }
}, { timestamps: true });
```

### Key Concepts:

* `required: true`: Field must be present.
* `unique: true`: Prevents duplicate values (e.g., email).
* `timestamps: true`: Automatically adds `createdAt` and `updatedAt`.

## 6. Creating a Model

* Converts schema to a usable object.
* Automatically pluralizes name for the MongoDB collection.

```js
const User = mongoose.model("User", userSchema);
```

* `User` → MongoDB Collection: `users`

## 7. Connecting to MongoDB

```js
mongoose.connect("mongodb://localhost:27017/youtube_app_1")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log("Mongo Error", err));
```

* If `youtube_app_1` doesn’t exist, MongoDB creates it.

## 8. CRUD Operations using Mongoose Model

### Create (POST)

```js
await User.create({
  first_name: req.body.first_name,
  ...
});
```

### Read (GET)

* **All users**:

  ```js
  const users = await User.find({});
  ```
* **Single user by ID**:

  ```js
  const user = await User.findById(req.params.id);
  ```

### Update (PATCH)

```js
await User.findByIdAndUpdate(req.params.id, {
  last_name: "Updated Name"
});
```

### Delete (DELETE)

```js
await User.findByIdAndDelete(req.params.id);
```

## 9. Auto ID & Timestamps

* MongoDB generates `_id` automatically.
* With `timestamps: true`, Mongoose adds:

  * `createdAt`
  * `updatedAt`

## 10. Refactor with MVC Pattern

### Problem:

* All logic in one file = cluttered & hard to maintain.

### Solution:

* Use **MVC Architecture**:

  * **Model**: Schema & data logic (Mongoose)
  * **View**: (Optional in API)
  * **Controller**: Request handling logic
  * **Routes**: Define endpoints

> "We will refactor it according to industry standards to build scalable projects."

## Summary

| Step     | Description            |
| -------- | ---------------------- |
| Install  | `npm install mongoose` |
| Connect  | `mongoose.connect()`   |
| Schema   | Define data structure  |
| Model    | Interface to MongoDB   |
| CRUD     | Use model methods      |
| Refactor | Use MVC architecture   |
