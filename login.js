window.onload = loginLoad;
function loginLoad()
{
	var Login = document.getElementById("myLogin");
	Login.onsubmit = checkLogin;
}

function checkLogin()
{
	var checkuser = sessionStorage.getItem("userRegis");
	var checkpass = sessionStorage.getItem("repassRegis");
	var userlog = document.forms["myLogin"]["username"];
    var passlog = document.forms["myLogin"]["password"];
	if (checkuser == userlog.value)
	{
		if (checkpass == passlog.value)
		{
			alert(" Login Success ");
		}
		else
		{
			alert(" Wrong Password ");
		}
	}
	else
	{
		alert(" Wrong Username ");
	}
	return false;
	//ถ้าตรวจสอบแล้วพบว่ามีการ login ไม่ถูกต้อง ให้ return false ด้วย
}

			