function finishload(){
    document.getElementById("loading").setAttribute("style","opacity: 0;");
    document.getElementById("loading-box").setAttribute("style","opacity: 0;");
    setTimeout(erase(),1000);
    setTimeout(start_animation(),1000)
}

function erase(){
    document.getElementById("loading").setAttribute("class","hidden");
    document.getElementById("loading-box").setAttribute("class","hidden");
}

function start_animation(){
    let services = document.querySelectorAll(".service")
    for (i = 0; i < services.length; i++) {
        services[i].setAttribute("style","animation: rotate 1s;");
    }
    document.querySelector(".soluction-text").setAttribute("style","animation: translate-left 2s;")
    document.querySelector(".planos-box").setAttribute("style","animation: translate-bottom 1.5s;")
}

function topbutton(){
    document.querySelector('.button').style.display = "block"
}

function animehover(x){
    x.children[0].setAttribute("style","animation: services-hover 2s;");
}

function endhover(x){
    x.children[0].setAttribute("style","animation: rotate 1s;");
}