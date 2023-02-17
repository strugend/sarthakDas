function SendMail(){
    var params={
        form_name: document.getElementById("name").value,
        email_id: document.getElementById("email").value,
        email_subject: document.getElementById("subject").value,
        message: document.getElementById("email-message").value
    }
    emailjs.send("service_fh5jrpb", "template_jbi23bq", params).then(function (res){
        alert("Success! "+res.status);
    })
}