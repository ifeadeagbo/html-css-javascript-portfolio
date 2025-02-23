// Toggle Hamburger Menu
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Handle Form Submission
document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the form from submitting

  // Get form values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Display a response message
  const response = document.getElementById('formResponse');
  response.textContent = `Thank you, ${name}! Your message has been sent.`;
  response.style.color = 'green';

  // Clear the form
  document.getElementById('contactForm').reset();
});