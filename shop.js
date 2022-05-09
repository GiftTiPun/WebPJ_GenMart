window.onload = pageLoad;

function pageLoad(){
	var xhr = new XMLHttpRequest(); 
     xhr.open("GET", "itemgasha.json");
     xhr.open("GET", "itemweapon.json");
     xhr.open("GET", "itemtalent.json"); 
     xhr.onload = function() { 
         var jsondata = JSON.parse(xhr.responseText);
         console.log(jsondata);
         showData(jsondata);
     }; 
     xhr.onerror = function() { alert("ERROR!"); }; 
     xhr.send();
}

function showData(data){
	console.log(Object.keys(data).length);
     var showwish = document.getElementById("container-wish")
     var showweapon = document.getElementById("container-weapon")
     var showtalent = document.getElementById("container-talent")
     var keys = Object.keys(data);
     for(var i =0; i< showwish.childElementCount;i++)
     {
        for( var j = 0; j < keys.length; j++)
        {
            var picwi = document.createElement("img");
            var name = document.createElement("p");
            var temp1 = document.createElement("p");
            picwi.src = data[keys[i]].pic;
            namewi.innerHTML = data[keys[i]].name; 
            temp1.innerHTML = "Price : " + data[keys[i]].price;
        }
        showwish.children[i].appendChild(picwi);
        showwish.children[i].appendChild(namewi);
        showwish.children[i].appendChild(temp1);
     }
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
     for(var i =0; i< showtalent.childElementCount;i++)
     {
        for( var j = 0; j < keys.length; j++)
        {
            var picta = document.createElement("img");
            var nameta = document.createElement("p");
            var temp3 = document.createElement("p");
            picwe.src = data[keys[i]].pic;
            nameta.innerHTML = data[keys[i]].name; 
            temp3.innerHTML = "Price : " + data[keys[i]].price;
        }
        showtalent.children[i].appendChild(picta);
        showtalent.children[i].appendChild(nameta);
        showtalent.children[i].appendChild(temp3);
        
     }

}

