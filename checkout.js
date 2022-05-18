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
	document.getElementById('clearcart').onclick = test;
	var username = getCookie('username');
    

	document.getElementById("username").innerHTML = username;
    

    console.log(getCookie('img'));
	showImg('img/'+getCookie('img'));
	var cartdata = sessionStorage.getItem("cartarraykey")
	UpdateCart(cartdata);
	sessionStorage.setItem("cartdata",cartdata);
}

function test(){
	sessionStorage.clear();
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


function UpdateCart(data){
    var checkOutPanel = document.getElementById("checkoutpanel")
	var Jsoncart = JSON.parse(data);
    var keys = Object.keys(Jsoncart);
	var totalPrice = 0;
	console.log(Jsoncart);
    for(var i =0; i< keys.length;i++)
    {
        var divcart = document.createElement("div")
		divcart.className = "boxcart";
        var piccart = document.createElement("img");
		piccart.id = "scam";
		var sectionsmth = document.createElement("div")
		sectionsmth.className = "section-separation";
		var span = document.createElement("span");

        piccart.src = Jsoncart[keys[i]].Pic;
        span.innerHTML = "x" + Jsoncart[keys[i]].Amount + " Price " + Jsoncart[keys[i]].Price+ " Bth." + " Total " + Jsoncart[keys[i]].TotalPrice + " Bth."  ;
		divcart.appendChild(piccart);
		divcart.appendChild(span);
		divcart.appendChild(sectionsmth);
       	checkOutPanel.prepend(divcart);
		totalPrice += Jsoncart[keys[i]].TotalPrice;
    }
	var totalPriceText = document.getElementById("totalPriceText");
	totalPriceText.innerHTML = "Total " +totalPrice + " Bth.";
}