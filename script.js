// ==========================
// Dark / Light Mode Toggle
// ==========================

const themeToggle = document.getElementById("themeToggle");

// Check saved theme
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    themeToggle.textContent = "☀️";
    themeToggle.setAttribute("aria-label", "Switch to Light Mode");
} else {
    themeToggle.textContent = "🌙";
    themeToggle.setAttribute("aria-label", "Switch to Dark Mode");
}

// Toggle Theme
themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {

        localStorage.setItem("theme", "dark");
        themeToggle.textContent = "☀️";
        themeToggle.setAttribute("aria-label", "Switch to Light Mode");

    } else {

        localStorage.setItem("theme", "light");
        themeToggle.textContent = "🌙";
        themeToggle.setAttribute("aria-label", "Switch to Dark Mode");

    }

});


// ==========================
// Smooth Scroll (Optional)
// ==========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            e.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });
        }

    });

});


// ==========================
// Contact Form Validation
// ==========================

const form = document.querySelector("form");

if (form) {

    form.addEventListener("submit", function (e) {

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (name === "" || email === "" || message === "") {

            e.preventDefault();
            alert("Please fill in all required fields.");

        } else {

            alert("Thank you! Your message has been submitted.");

        }

    });

}


// ==========================
// Current Year in Footer
// ==========================

const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}