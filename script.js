document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const eventSelected = document.getElementById('event').value;

    if (name && email && phone && eventSelected) {
        document.getElementById('message').textContent = 'Thank you for registering, ' + name + '!';
        document.getElementById('registrationForm').reset();
    } else {
        document.getElementById('message').textContent = 'Please fill in all fields.';
    }
});
