function tombol1(){
    tagButton = document.getElementById("btn1");
    tagButton.style="background-color:#968b7f;";
    tagButton2 = document.getElementById("btn2");
    tagButton2.style="background-color:#E9F0FA;";
    tagButton3 = document.getElementById("btn3");
    tagButton3.style="background-color:#E9F0FA;";

    document.getElementsByTagName("img")[0].hidden=false;
    document.getElementsByTagName("img")[1].hidden=true;
    document.getElementsByTagName("img")[2].hidden=true;

}

function tombol2(){
    tagButton = document.getElementById("btn1");
    tagButton.style="background-color:#E9F0FA;";
    tagButton2 = document.getElementById("btn2");
    tagButton2.style="background-color:#968b7f;";
    tagButton3 = document.getElementById("btn3");
    tagButton3.style="background-color:#E9F0FA;";

    document.getElementsByTagName("img")[0].hidden=true;
    document.getElementsByTagName("img")[1].hidden=false;
    console.log("tombol 2 ditekan")
    document.getElementsByTagName("img")[2].hidden=true;
}


function tombol3(){
    tagButton = document.getElementById("btn1");
    tagButton.style="background-color:#E9F0FA;";
    tagButton2 = document.getElementById("btn2");
    tagButton2.style="background-color:#E9F0FA;";
    tagButton3 = document.getElementById("btn3");
    tagButton3.style="background-color:#968b7f;";
    document.getElementsByTagName("img")[0].hidden=true;
    document.getElementsByTagName("img")[1].hidden=true;
    document.getElementsByTagName("img")[2].hidden=false;
    console.log("tombol 2 ditekan")
}