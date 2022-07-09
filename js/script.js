

//  scroll down event
 function scl(){
    let str = document.querySelector("#header");
    if(scrollY > 20) {

        str.style.background="#3D4D6A";
    }
    else{
        
        str.style.background="none";
    }
}

addEventListener("scroll",scl);

