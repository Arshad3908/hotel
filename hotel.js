      // Get the form element and add a submit event listener
      var form = document.querySelector('form');
      form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        // Get the form inputs by name
        var nameInput = document.querySelector('input[name="name"]');
        var emailInput = document.querySelector('input[name="email"]');

        // Get the form input values
        var name = nameInput.value;
        var email = emailInput.value;

        // Perform basic form validation
        if (name.trim() === '') {
          alert('Please enter your name.');
          nameInput.focus();
          return false;
        }

        if (email.trim() === '') {
          alert('Please enter your email address.');
          emailInput.focus();
          return false;
        }

        if (!isValidEmail(email)) {
          alert('Please enter a valid email address.');
          emailInput.focus();
          return false;
        }

        // If form is valid, submit the form
        form.submit();
      });

      // Helper function to validate email address
      function isValidEmail(email) {
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
      }