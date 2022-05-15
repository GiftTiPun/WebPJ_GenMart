function checkCookie(){
	var username = "";
	if(getCookie("username")==false){
		window.location = "index.html";
	}
}
checkCookie();
window.onload = pageLoad;

function getCookie(name){
	var value = "";
	try{
		value = document.cookie.split("; ").find(row => row.startsWith(name)).split('=')[1]
		return value
	}catch(err){
		return false
	} 
}
function pageLoad(){
    document.getElementById('displayPic').onclick = fileUpload;
	document.getElementById('fileField').onchange = fileSubmit;

	var username = getCookie('username');
    

	document.getElementById("username").innerHTML = username;
    document.getElementById("username2").innerHTML = username;

    console.log(getCookie('img'));
	showImg('GenshinWEBPJ/'+getCookie('img'));
}


function fileUpload(){
	document.getElementById('fileField').click();
}

function fileSubmit(){
	document.getElementById('formId').submit();
}

function showImg(filename){
	if (filename !==""){
		var showpic = document.getElementById('displayPic');
		showpic.innerHTML = "";
		var temp = document.createElement("img");
		temp.src = filename;
		showpic.appendChild(temp);
	}
}