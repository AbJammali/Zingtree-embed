function EnableDisable(txtPassportNumber) {
        //Reference the Button.
        var btnSubmit = document.getElementById("btnSubmit");
 
        //Verify the TextBox value.
        if (txtPassportNumber.value.trim() != "") {
            //Enable the TextBox when TextBox has value.
            btnSubmit.disabled = false;
        } else {
            //Disable the TextBox when TextBox is empty.
            btnSubmit.disabled = true;
        }
    }
    
    if(document.getElementById("txtPassportNumber").value.length == 0)
{
    alert("empty")
}
