const toast = document.querySelector("#toast");
let toastTimer;

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2200);
}

document.querySelector(".primary").addEventListener("click", () => {
  document.querySelector(".answer-review").scrollIntoView({ behavior: "smooth" });
  showToast("Review the reframed answers above");
});

document.querySelectorAll(".secondary, .book-session").forEach((button) => {
  button.addEventListener("click", () => showToast("Mentor booking opened"));
});

document.querySelector(".chat").addEventListener("click", () => {
  showToast("Chat support is ready");
});
