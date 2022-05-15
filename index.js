// window.onload = pageLoad;
// function pageLoad()
// {
// 	var Login = document.getElementById("myLogin");
// 	Login.onsubmit = checkLogin;
// }

// function checkLogin()
// {
// 	var checkuser = sessionStorage.getItem("userRegis");
// 	var checkpass = sessionStorage.getItem("repassRegis");
// 	var userlog = document.forms["myLogin"]["username"];
//     var passlog = document.forms["myLogin"]["password"];
// 	if (checkuser == userlog.value)
// 	{
// 		if (checkpass == passlog.value)
// 		{
// 			alert(" Login Success ");
// 			window.location.href = "shoppingpage.html";
			
// 		}
// 		else
// 		{
// 			alert(" Wrong Password ");
// 		}
// 	}
// 	else
// 	{
// 		alert(" Wrong Username ");
// 	}
// 	return false;
// 	//ถ้าตรวจสอบแล้วพบว่ามีการ login ไม่ถูกต้อง ให้ return false ด้วย
// }

window.onload = pageLoad;

function pageLoad(){
	const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString);
	if (urlParams.get("error")==1){
		document.getElementById('errordisplay').innerHTML = "Username or password does not match.";
	}	
}
			