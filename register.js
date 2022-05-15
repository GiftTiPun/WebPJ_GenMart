window.onload = pageLoad;
function pageLoad(){
	var getdata = document.getElementById("myForm");
    document.getElementById('regisbutt').onclick = checkdata;
    getdata.onreset = cleartext;
}

function checkdata()
{
    var usDB = document.getElementById("username").value;
    var pwDB = document.getElementById("password").value
    var all = usDB + pwDB;
	writePost(all);
}

function cleartext()
{
    var Error = document.getElementById("errormsg");
    Error.textContent = null;
}
async function writePost(all){
	let response = await fetch("/writePost",{
		method: "POST",
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			user:usDB,
			password:pwDB})
	});
    let content = await response.json();
}

function validateForm() {
    //ถ้าตรวจสอบแล้วว่ามีการ register ไม่ถูกต้องให้ return false ด้วย
}