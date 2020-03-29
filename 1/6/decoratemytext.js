
function bling(){

    //alert("Bling!!!!!");
    var checked = document.getElementById("blingID").checked;
    var tarea = document.getElementById("tarea");
    
    if(checked){

        tarea.style.fontWeight = "bold";
        tarea.style.fontSize = "24px";
        tarea.style.textDecoration = "underline";
        tarea.style.color = "green";
        
        //var div = document.getElementById("backGround");
        var img = document.getElementById("imgMain");
        img.src = "usdollar.jpg";

    }
    else{

        tarea.style.fontWeight = "normal";
        tarea.style.color = "black";
        tarea.style.fontSize = "15px";
        tarea.style.textDecoration = "none";

        //var div = document.getElementById("backGround");
        var img = document.getElementById("imgMain");
        img.src = "ny.jpeg";
    }

}

var deco;

function biggerDeco(){

    deco = setInterval(function(){

        var fsize = document.getElementById("tarea");
        var style = window.getComputedStyle(fsize, null).getPropertyValue('font-size');
        var currPtSize = parseInt(style);
        fsize.style.fontSize = parseInt((currPtSize + 2)) + "px";

    }, 1000);
    //console.log("a: " + parseInt(currPtSize));

}

function stopDeco(){

    clearInterval(deco);

}


function Malkovitch(){

    var arrOrig = document.getElementById("tarea").value.split("\n");
    
    // Remove white spaces for each array indexes
    arr = arrOrig.map(function(str){
        return str.trim();
    });
    
    // Remove white spaces array indexes
    arr = arr.filter(function(str){
        return /\S/.test(str);
    });
    //console.log(arr);

    for(let i = 0; i < arr.length; i++){
        if(arr[i].length >= 5){
            arrOrig[i] = "Malkovich";
        }// if
    }// for

   
    document.getElementById("tarea").value = arrOrig;
   
}





