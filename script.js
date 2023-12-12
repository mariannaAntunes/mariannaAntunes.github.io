function sendEmail(){
  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "finalproject.tech1101@gmail.com",
    Password : "password",
    To : 'marianna.antunes22@gmail.com',
    From : document.getElementById("email").value,
    Subject : "New Contact Form",
    Body : "Name: "+document.getElementById("name2").value+"<br> Email: "+document.getElementById("email").value+"<br> Message: "+document.getElementById("message").value
}).then(
  message => alert("Message sent successfully.")
);
}
