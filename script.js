/* =========================================
   WELCOME ALERT
========================================= */
alert("JavaScript is working!");
/* Check karna ke Welcome Alert pehle show hua hai ya nahi */
let welcomeShown = sessionStorage.getItem("welcomeShown");

/* Alert sirf tab show hoga jab pehle show nahi hua */
if (welcomeShown !== "true") {

    /* Current time ka hour lena */
    let currentHour = new Date().getHours();

    /* Time ke according welcome message show karna */
    if (currentHour < 12) {

        alert("Good Morning! Welcome to My Lifestyle Blog");

    }
    else if (currentHour < 18) {

        alert("Good Afternoon! Welcome to My Lifestyle Blog");

    }
    else {

        alert("Good Evening! Welcome to My Lifestyle Blog");

    }

    /* Mark karna ke Welcome Alert show ho chuka hai */
    sessionStorage.setItem("welcomeShown", "true");

}


/* =========================================
   SUBSCRIBE FORM VALIDATION
========================================= */

/* Subscribe Form ko select karna */
let subscribeForm = document.getElementById("subscribe-form");

/* Check karna ke current page par Subscribe Form موجود hai ya nahi */
if (subscribeForm) {

    /* Input fields ko select karna */
    let emailInput = document.getElementById("email");
    let messageInput = document.getElementById("message");

    /* Form submit hone par ye function chalega */
    subscribeForm.addEventListener("submit", function(event) {

        /* Page refresh hone se rokna */
        event.preventDefault();

        /* User ke inputs ko variables mein store karna */
        let email = emailInput.value;
        let message = messageInput.value;

        /* Check karna ke fields empty hain ya nahi */
        if (email === "" || message === "") {

            alert("Please fill in all fields.");

        }
        else {

            alert("Thank you for subscribing!");

            /* Form clear karna */
            subscribeForm.reset();

        }

    });

}


/* =========================================
   BACK TO TOP BUTTON
========================================= */

/* Back to Top button ko select karna */
let backToTopButton = document.getElementById("back-to-top");

/* Check karna ke current page par button موجود hai ya nahi */
if (backToTopButton) {

    /* Page scroll hone par button show ya hide karna */
    window.addEventListener("scroll", function() {

        if (window.scrollY > 300) {

            /* Button show karna */
            backToTopButton.style.display = "block";

        }
        else {

            /* Button hide karna */
            backToTopButton.style.display = "none";

        }

    });


    /* Button click hone par page ko smoothly top par le jana */
    backToTopButton.addEventListener("click", function() {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}
