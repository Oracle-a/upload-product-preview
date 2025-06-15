const addressForm = document.getElementById('address-form');

addressForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const phoneNumber = document.getElementById('phone-number').value.trim();
  const streetAddress = document.getElementById('street-address').value.trim();
  const city = document.getElementById('city').value.trim();
  const state = document.getElementById('state').value.trim();
  const country = document.getElementById('country').value;

  if (!name || !phoneNumber || !streetAddress || !city || !state || !country) {
    alert('Please fill in all required fields.');
    return;
  }

  const phoneRegex = /^\d{11}$/;
  if (!phoneRegex.test(phoneNumber)) {
    alert('Invalid phone number format. Please use 11 digits.');
    return;
  }

  // Form submission logic here
  console.log('Form submitted successfully!');
});

//Navbar toggle
const navbarToggle = document.querySelector('[data-collapse-toggle="navbar-search"]');
const navbarSearch = document.getElementById('mobileMenu');

navbarToggle.addEventListener('click', () => {
  navbarSearch.classList.toggle('hidden');
  
});