// Cursor glow
const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', (e) => {
  cursor.style.left = `${e.pageX}px`;
  cursor.style.top = `${e.pageY}px`;

  // Dynamic gradient background
  let x = e.clientX / window.innerWidth;
  let y = e.clientY / window.innerHeight;
  document.body.style.background = `radial-gradient(circle at ${x * 100}% ${y * 100}%, 
    hsl(${x * 360}, 100%, 50%), 
    hsl(${y * 360}, 100%, 40%), 
    hsl(${(x + y) * 180}, 100%, 30%)
  )`;
});

// Toggle forms
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');
const toSignup = document.getElementById('toSignup');
const toLogin = document.getElementById('toLogin');

toSignup.addEventListener('click', (e) => {
  e.preventDefault();
  loginForm.classList.remove('active');
  signupForm.classList.add('active');
});

toLogin.addEventListener('click', (e) => {
  e.preventDefault();
  signupForm.classList.remove('active');
  loginForm.classList.add('active');
});
