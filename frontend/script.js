document.addEventListener('DOMContentLoaded', () => {
    // Admin login validation
    const adminLoginForm = document.querySelector('form[action="admin-panel.html"]');
    if (adminLoginForm) {
      adminLoginForm.addEventListener('submit', (e) => {
        const id = adminLoginForm.querySelector('[name="adminId"]').value;
        const pass = adminLoginForm.querySelector('[name="adminPass"]').value;
        if (id !== "admin" || pass !== "1234") {
          alert("Invalid Admin ID or Password");
          e.preventDefault();
        }
      });
    }
  
    // Student login validation
    const studentLoginForm = document.querySelector('form:not([action])');
    if (studentLoginForm && window.location.pathname.includes('login')) {
      studentLoginForm.addEventListener('submit', (e) => {
        const user = studentLoginForm.querySelector('[name="username"]').value;
        const pass = studentLoginForm.querySelector('[name="password"]').value;
        if (!user || !pass) {
          alert("Please enter both username and password.");
          e.preventDefault();
        } else {
          localStorage.setItem('lastLogin', new Date().toLocaleString());
          alert("Login successful!");
        }
      });
  
      const lastLogin = localStorage.getItem('lastLogin');
      if (lastLogin) {
        document.getElementById('lastLogin').textContent = `Last login: ${lastLogin}`;
      }
    }
  
    // Order confirmation
    const orderForm = document.querySelector('form[action=""]');
    if (orderForm && window.location.pathname.includes('order')) {
      orderForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert("Your order has been placed!");
      });
    }
  
    // Mess subscription reminder
    const messForm = document.querySelector('form');
    if (messForm && window.location.pathname.includes('mess-record')) {
      messForm.addEventListener('submit', (e) => {
        const endDateInput = messForm.querySelector('[type="date"][name="endDate"]');
        if (endDateInput) {
          const endDate = new Date(endDateInput.value);
          const today = new Date();
          const daysLeft = Math.ceil((endDate - today) / (1000 * 60 * 60 * 24));
          if (daysLeft <= 3) {
            alert(`Notice: This student's mess subscription is ending in ${daysLeft} day(s)!`);
          }
        }
      });
    }
  });
  