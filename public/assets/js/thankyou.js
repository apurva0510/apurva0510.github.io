(function() {
    const form = document.getElementById("contact-form");
    const status = document.getElementById("form-status");
    const confirmation = document.getElementById("contact-confirmation");
    const sendAnotherButton = document.getElementById("send-another-message");

    if (!form || !status || !confirmation || !sendAnotherButton) return;

    const submitButton = form.querySelector('button[type="submit"]');

    function showMessage(message, type = "") {
      status.textContent = message;
      status.className = type ? `form-status ${type}` : "form-status";
    }

    form.addEventListener("submit", async function(event) {
      event.preventDefault();

      if (submitButton && submitButton.disabled) return;

      if (submitButton) {
        submitButton.disabled = true;
        submitButton.textContent = "Sending…";
      }

      const data = new FormData(form);

      showMessage("Sending message…", "is-pending");

      try {
        const [response] = await Promise.all([
          fetch(form.action, {
            method: form.method,
            body: data,
            headers: { "Accept": "application/json" }
          }),
          new Promise((resolve) => setTimeout(resolve, 750))
        ]);

        if (response.ok) {
          form.reset();
          form.classList.add("is-complete");
          window.setTimeout(() => {
            form.hidden = true;
            status.hidden = true;
            confirmation.hidden = false;
            confirmation.focus({ preventScroll: true });
          }, window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : 220);
        } else {
          showMessage("Something went wrong. Please try again.", "is-error");
        }
      } catch (error) {
        showMessage("Network error. Please check your connection and try again.", "is-error");
      } finally {
        if (submitButton) {
          submitButton.disabled = false;
          submitButton.textContent = "Send Message";
        }
      }
    });

    form.addEventListener("reset", function() {
      showMessage("");
    });

    sendAnotherButton.addEventListener("click", function() {
      confirmation.hidden = true;
      status.hidden = false;
      form.hidden = false;
      form.classList.remove("is-complete");
      showMessage("");
      form.querySelector('input[name="name"]')?.focus({ preventScroll: true });
    });
  })();
