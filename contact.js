const form = document.getElementById('forms');

const nameInput = document.getElementById('name');

const emailInput = document.getElementById('email');

const subjectInput = document.getElementById('subject');

const messageInput = document.getElementById('message');

const serviceID = 'service_ne9l55k'; 

const templateID = 'template_k0q4f6f'; 

const publickey = '9oGTL7YIlhk1MfOT9'; 

emailjs.init(publickey);

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const inputData = {
        from_name: nameInput.value,
        user_email: emailInput.value,
        subject: subjectInput.value,
        message: messageInput.value
    };

    emailjs.send(serviceID, templateID, inputData).then(
        () => {
            nameInput.value = '';
            emailInput.value = ''; 
            subjectInput.value = '';
            messageInput.value = '';
            console.log('Success!');
        },
        (error) => {
            console.log(error);
        }
    );
});
