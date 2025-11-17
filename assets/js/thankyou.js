(function() {
    const form = document.getElementById("contact-form");
    const status = document.getElementById("form-status");

    function showMessage(message, isError = false) {
      status.textContent = message;
      status.style.color = isError ? "#ff6b6b" : "#4CAF50";
    }

    form.addEventListener("submit", function(event) {
      event.preventDefault();

      const data = new FormData(form);

      // Immediately show "success" to feel snappy
      showMessage("Thank you, your message has been sent!");

      fetch(form.action, {
        method: form.method,
        body: data,
        headers: {
          "Accept": "application/json"
        }
      }).then(response => {
        if (!response.ok) {
          showMessage("Oops, something went wrong. Please email me at aggarw86@msu.edu.", true);
        } else {
          form.reset();
        }
      }).catch(() => {
        showMessage("Network error. Please email me at aggarw86@msu.edu.", true);
      });
    });
  })();