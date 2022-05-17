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
    

    console.log(getCookie('img'));
	showImg('img/'+getCookie('img'));

	var xhr = new XMLHttpRequest(); 
    var xhr1 = new XMLHttpRequest(); 
    var xhr2 = new XMLHttpRequest(); 
     xhr.open("GET", "itemgasha.json");
     xhr.onload = function() { 
        var jsongasha = JSON.parse(xhr.responseText);
        console.log(jsongasha);
        showDatagasha(jsongasha);
    }; 
    xhr.onerror = function() { alert("ERROR!"); }; 
    xhr.send();

    xhr1.open("GET", "itemweapon.json");
    xhr1.onload = function() { 
        var jsonweapon = JSON.parse(xhr1.responseText);
        console.log(jsonweapon);
        showDataweapon(jsonweapon);
    }; 
    xhr1.onerror = function() { alert("ERROR!"); }; 
    xhr1.send();

    xhr2.open("GET", "itemtalent.json"); 
    xhr2.onload = function() { 
         var jsontalent = JSON.parse(xhr2.responseText);
         console.log(jsontalent);
         showDatatalent(jsontalent);
    }; 
    xhr2.onerror = function() { alert("ERROR!"); }; 
    xhr2.send();
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

function showDatagasha(data){
	
     var showwish = document.getElementById("container-wish")  
     var keys = Object.keys(data);
     for(var i =0; i< showwish.childElementCount;i++)
     {
        for( var j = 0; j < keys.length; j++)
        {
            var picwi = document.createElement("img");
            var namewi = document.createElement("p");
            var temp1 = document.createElement("p");
            picwi.src = data[keys[i]].pic;
            namewi.innerHTML = data[keys[i]].name; 
            temp1.innerHTML = "Price : " + data[keys[i]].price;
        }
        showwish.children[i].appendChild(picwi);
        showwish.children[i].appendChild(namewi);
        showwish.children[i].appendChild(temp1);
     }
     
}
function showDataweapon(data){
    var showweapon = document.getElementById("container-weapon")
    var keys = Object.keys(data);
    for(var i =0; i< showweapon.childElementCount;i++)
     {
        for( var j = 0; j < keys.length; j++)
        {
            var picwe = document.createElement("img");
            var namewe = document.createElement("p");
            var temp2 = document.createElement("p");
            picwe.src = data[keys[i]].pic;
            namewe.innerHTML = data[keys[i]].name; 
            temp2.innerHTML = "Price : " + data[keys[i]].price;
        }
        showweapon.children[i].appendChild(picwe);
        showweapon.children[i].appendChild(namewe);
        showweapon.children[i].appendChild(temp2);
     }
}
function showDatatalent(data){
    var showtalent = document.getElementById("container-talent")
    var keys = Object.keys(data);
    for(var i =0; i< showtalent.childElementCount;i++)
    {
       for( var j = 0; j < keys.length; j++)
       {
           var picta = document.createElement("img");
           var nameta = document.createElement("p");
           var temp3 = document.createElement("p");
           picta.src = data[keys[i]].pic;
           nameta.innerHTML = data[keys[i]].name; 
           temp3.innerHTML = "Price : " + data[keys[i]].price;
       }
       showtalent.children[i].appendChild(picta);
       showtalent.children[i].appendChild(nameta);
       showtalent.children[i].appendChild(temp3);
       
    }
}

function DecreaseItem(){
    console.log("-");
    var value = parseInt(document.getElementById('numstock').value, 10);
    value = isNaN(value) ? 0 : value;
    value < 1 ? value = 1 : '';
    value--;
    document.getElementById('numstock').value = value;
}

function PlusItem(){
    console.log("+");
    var value = parseInt(document.getElementById('numstock').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('numstock').value = value;
}

