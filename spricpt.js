console.log('Script loaded'); // Add this to check if the script is being executed

// Initialize EmailJS with your Public Key
emailjs.init('nJ2jLcypJ4Py0VEzf'); // Replace with your actual EmailJS Public Key

// Function to send email
function sendEmail(event) {
    event.preventDefault(); // Prevent default form submission

    console.log('Form submission prevented');

    // Get the form element
    const contactForm = document.getElementById('contact-form');

    console.log('Attempting to send email...');

    // Send email using EmailJS
    emailjs.sendForm('service_53cxr8c', 'template_ve85jkc', contactForm)
        .then(function(response) {
            console.log('Email sent!', response.status, response.text);
            alert('Email sent successfully!');
            contactForm.reset(); // Optionally, reset the form after successful submission
        }, function(error) {
            console.error('Error sending email:', error);
            alert('Oops! Something went wrong.');
        });
}

// Attach event listener to the form
document.getElementById('contact-form').addEventListener('submit', sendEmail);