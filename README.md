# Lab-12.1: Build a Basic Express.js Server
**Author:** Jameka Haggins 
---

## Reflection Questions
1. What is the difference between res.send() and res.sendFile()? When would you use one over the other?
2. Why is the path module necessary when serving files? What could go wrong if you just used a relative path like 'public/index.html'?
3. How would you add a third page (e.g., a menu page) to this server? What steps would you take?
---

`res.send()` vs `res.sendFile()`: Use `res.send()` for simple text or data. Use `res.sendFile()` when you want to display an entire HTML document.

Relative paths (like `./index.html`) can break depending on where you start the server from. path combined with `__dirname` creates an stable path which is like giving the server a specific GPS coordinate for the file.

You would create `menu.html` in the public folder, then add a new `app.get('/menu', ...)` block in your server.js.
