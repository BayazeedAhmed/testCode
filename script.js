let cart = [];

function addToCart(itemName, itemPrice) {
    cart.push({ itemName, itemPrice });
    alert(`${itemName} has been added to your cart.`);
}

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple login validation (for demonstration purposes)
    if (username === "admin" && password === "password") {
        alert("Login successful!");
        closeLogin();
        // You can redirect or perform other actions here
    } else {
        alert("Invalid username or password.");
    }
}

function closeLogin() {
   document.getElementById('loginModal').style.display = "none";
}

// Open login modal when clicking on the login link
document.getElementById('loginBtn').onclick = function() {
   document.getElementById('loginModal').style.display = "block";
}

// Close modal when clicking outside of it
window.onclick = function(event) {
   const modal = document.getElementById('loginModal');
   if (event.target === modal) {
       modal.style.display = "none";
   }
}