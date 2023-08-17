function show(){
    var butt = document.getElementById("buttons");
    if(window.pageYOffset > 200){
        butt.style.display="block";
    }
    else{
        butt.style.display="none"
    }
}