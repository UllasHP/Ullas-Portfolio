function sendMail() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;

   
    if (!name || !email || !subject || !message) {
        alert("Please fill in all fields.");
        return;
    }

    var pars = {
        name: name,
        email: email,
        subject: subject,
        message: message,
    };

    const serviceID = "service_ne9l55k";
    const templateID = "template_k0q4f6f";

    emailjs.send(serviceID, templateID, pars)
        .then((res) => {
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("subject").value = "";
            document.getElementById("message").value = "";
            console.log(res);
            alert("Your message sent successfully");
        })
        .catch((err) => {
            console.error("Error sending email:", err);
            alert("Oops! Something went wrong. Please try again later.");
        });
}
