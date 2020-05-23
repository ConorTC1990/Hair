function sendemail(contact) {
    emailjs.send("gmail", "conor", {
        "from_name": contact.name.value,
        "from_email": contact.emailaddress.value,
        "free_guide": contact.free_guide.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;  // To block from loading a new page
}