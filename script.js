fetch('https://code-app-backend.onrender.com/', { mode: 'cors' })
  .then(response => response.text())
  .then(data => document.getElementById('status').textContent = data)
  .catch(err => document.getElementById('status').textContent = 'Backend unreachable');