function sendemail(ContactemailJS) {
    emailjs.send("gmail", "conor_s_advice_free", {
        "from_name": ContactemailJS.name.value,
        "from_email": ContactemailJS.emailaddress.value,
        "project_request": ContactemailJS.projectsummary.value
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