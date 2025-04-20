document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("registerForm");
  
    if (form) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();
  
        // Optionally, collect the values
        const formData = new FormData(form);
        const userDetails = {};
        formData.forEach((value, key) => {
          userDetails[key] = value;
        });
  
        // Simulate success and redirect
        alert("Registration successful! Welcome, " + userDetails.name + "!");
        window.location.href = "dashboard.html"; // Redirect to dashboard
      });
    }
  });
  