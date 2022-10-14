'use strict'


var arr=["img/apple.jpg","img/snow.png"]


function AppleCreate(){
    var rnd2=Math.ceil(Math.random()*arr.length);
    const apples=$(".apples")
    const appleDiv=$("<div class='apple'></div>")
    appleDiv.append(`<img src="${arr[rnd2-1]}" alt="">`)
    apples.append(appleDiv)
    var rnd=Math.floor(Math.random()*(apples.width()-50));
    appleDiv.css("left",rnd+"px")
}



setInterval(()=>{
    AppleCreate()
    setTimeout(()=>{
        $(".apple").first().remove()
    }, 6000);
}, 100);