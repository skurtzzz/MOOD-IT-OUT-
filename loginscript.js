const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});
function submitForm() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    // You can use the Fetch API to send data to the backend
    fetch('backend/login.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    })
    .then(response => response.json())
    .then(data => {
      // Handle the response from the backend (e.g., show success or error messages)
      console.log(data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  }