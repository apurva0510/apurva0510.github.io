(function() {
    const form = document.getElementById("contact-form");
    const status = document.getElementById("form-status");

    function showMessage(message, isError = false) {
      status.textContent = message;
      status.style.color = isError ? "#ff6b6b" : "#4CAF50"; // red for error, green for success
    }

    form.addEventListener("submit", async function(event) {
      event.preventDefault();

      const data = new FormData(form);

      showMessage("Sending message...");

      try {
        const response = await fetch(form.action, {
          method: form.method,
          body: data,
          headers: {
            "Accept": "application/json"
          }
        });

        if (response.ok) {
          showMessage("Thank you, your message has been sent!");
          form.reset();
        } else {
          showMessage("Oops, something went wrong. Please try again later.", true);
        }
      } catch (error) {
        showMessage("Network error. Please check your connection and try again.", true);
      }
    });
  })();