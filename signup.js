document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Here you can handle the signup logic, such as validating the inputs, sending them to a server, etc.
    console.log('Form submitted:', { name, email, password });

    alert("Account Created Successfully!");
});
