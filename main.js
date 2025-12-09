function showToast(message, duration = 3000) {
  const toast = document.getElementById("toast");
  toast.innerHTML = message;
  toast.classList.add("show");
}

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();

  const form = e.target;

  Array.from(form.elements).forEach((el) => {
    if (el.tagName !== "BUTTON") {
      el.disabled = true;
    }
  });

  const submitBtn = document.getElementById("form-submit-button");
  submitBtn.disabled = true;
  submitBtn.textContent = "Changes Saved";

  showToast(
    "Reminder added successfully! <a href='./' style='color: white; text-decoration: underline'>Go to Homepage</a>"
  );

  setTimeout(() => {
    window.location.href = "./";
  }, 5000);
});
