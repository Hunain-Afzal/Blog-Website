/* =========================================
   WELCOME ALERT
========================================= */

let welcomeShown = sessionStorage.getItem("welcomeShown");

if (welcomeShown !== "true") {

    let currentHour = new Date().getHours();

    if (currentHour < 12) {

        alert("Good Morning! Welcome to My Lifestyle Blog");

    }
    else if (currentHour < 18) {

        alert("Good Afternoon! Welcome to My Lifestyle Blog");

    }
    else {

        alert("Good Evening! Welcome to My Lifestyle Blog");

    
    sessionStorage.setItem("welcomeShown", "true");

}
/* =========================================
   SUBSCRIBE FORM VALIDATION
========================================= */

let subscribeForm = document.getElementById("subscribe-form");

if (subscribeForm) {

    let emailInput = document.getElementById("email");
    let messageInput = document.getElementById("message");


    /* Form submit hone par ye function chalega */
    subscribeForm.addEventListener("submit", function(event) {

        event.preventDefault();

        let email = emailInput.value;
        let message = messageInput.value;

        if (email === "" || message === "") {a 

            alert("Please fill in all fields.");

        }
        else {

            alert("Thank you for subscribing!");

            subscribeForm.reset();
        }

    });

}
/* =========================================
   BACK TO TOP BUTTON
========================================= */

let backToTopButton = document.getElementById("back-to-top");


window.addEventListener("scroll", function() {

    if (window.scrollY > 300) {

        backToTopButton.style.display = "block";

    } else {

        backToTopButton.style.display = "none";
    }

});

backToTopButton.addEventListener("click", function() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});
