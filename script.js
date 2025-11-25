document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  const popup = document.getElementById("success-popup");

  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const formData = new FormData(form);

    const response = await fetch("https://formspree.io/f/xkgejdkw", {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" },
    });

    if (response.ok) {
      popup.style.display = "flex";
      form.reset();

      setTimeout(() => {
        popup.style.display = "none";
      }, 3000);
    } else {
      alert("Message failed. Please try again.");
    }
  });
});
window.addEventListener("scroll", () => {
  const btn = document.getElementById("back-to-top");
  if (window.scrollY > 300) {
    btn.classList.add("show");
  } else {
    btn.classList.remove("show");
  }
});

// Scroll to top
document.getElementById("back-to-top").addEventListener("click", () => {
  document.querySelector("#hero").scrollIntoView({ behavior: "smooth" });
});
