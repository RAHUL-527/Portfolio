document.addEventListener("DOMContentLoaded", () => {

    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
        hamburger.classList.toggle("open");
    });

});


/* *********************************************************************** */
                    // EMAIL CONTACT FORM
/* *********************************************************************** */

const form = document.querySelector(".contact-form");
const result = document.getElementById("result");

form.addEventListener("submit", async function (e) {
    e.preventDefault();
    result.innerHTML = "Sending...";

    const formData = new FormData(form);

    try {
        const response = await fetch(
            "https://api.web3forms.com/submit",
            {
                method: "POST",
                body: formData
            }
        );

        const data = await response.json();

        if (data.success) {
            result.innerHTML =
                "✅ Message sent successfully!";
            result.style.color = "#38bdf8";

            form.reset();
        } else {
            result.innerHTML =
                "❌ Failed to send message.";
            result.style.color = "#ff4d4d";
        }
    } catch (error) {
        result.innerHTML =
            "❌ Something went wrong.";
        result.style.color = "#ff4d4d";
    }
});
