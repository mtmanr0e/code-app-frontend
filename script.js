fetch("https://code-app-backend.onrender.com/test-db")
  .then(res => res.json())
  .then(data => {
    const div = document.createElement("div");
    div.textContent = data.success
      ? `✅ DB Connected at ${data.time}`
      : "❌ DB connection failed.";
    document.body.appendChild(div);
  })
  .catch(err => {
    const div = document.createElement("div");
    div.textContent = "❌ Error connecting to backend.";
    document.body.appendChild(div);
  });
