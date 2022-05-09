window.onload = pageLoad;
function pageLoad(){
	var getdata = document.getElementById("myForm");
    getdata.onsubmit = checkdata;
    getdata.onreset = cleartext;
}

function checkdata()
{
    var userdata = document.forms["myForm"]["username"];
    var passdata = document.forms["myForm"]["password"];
    var repassdata = document.forms["myForm"]["repassword"];
    var userstore = userdata.value;
    sessionStorage.setItem("userRegis",userstore);
    var passstore = repassdata.value;
    sessionStorage.setItem("repassRegis",passstore);

    if (passdata.value != repassdata.value)
    {
        var Error = document.getElementById("errormsg");
        Error.textContent = "Password Not Match"
        return false;
    }
    else
    {
        return true;
    }
}

function cleartext()
{
    var Error = document.getElementById("errormsg");
    Error.textContent = null;
}

function validateForm() {
    //ถ้าตรวจสอบแล้วว่ามีการ register ไม่ถูกต้องให้ return false ด้วย
}