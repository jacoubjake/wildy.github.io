function setUpEvents(){

    var show = document.getElementById("us");
    var button0 = document.getElementById("show-more");

    button0.onclick = function(){
        if (show.className == "on"){
            show.className = "";
            button0.innerHTML = "+";
        } else {
            show.className = "on";
            button0.innerHTML = "^";
        }
    }
    
    // setTimeout
    var village0 = document.querySelectorAll("#title0")
    function villageIn(){
        village0.className("show");
    }

    // var switches = document.querySelector('.switches span');
    // var root = document.querySelector(':root');

    // switches.addEventListener('click', function(e){
    //     root.style.setProperty('--main-color', e.target.style.background);
    // })

    var swatches = document.querySelectorAll('.swatches span');
    var root = document.querySelector(':root');
    var foot = document.querySelector('footer');

    swatches.forEach((swatch) => {
        swatch.addEventListener('click', (e) => {
            root.style.setProperty('--main-color', e.target.style.color="#000511");
            root.style.setProperty('--sec-color', e.target.style.color="white");
            root.style.setProperty('--shad', e.target.style.color="#ffffff18");
            foot.style.backgroundColor = '#000e29';
        });
    });

    var swatches2 = document.querySelectorAll('.swatches span:nth-child(2)');
    var root = document.querySelector(':root');
    var foot = document.querySelector('footer');

    swatches2.forEach((swatch) => {
        swatch.addEventListener('click', (e) => {
            root.style.setProperty('--main-color', e.target.style.color="#ffffff");
            root.style.setProperty('--sec-color', e.target.style.color="#141414");
            root.style.setProperty('--shad', e.target.style.color="#0000001e");
            foot.style.backgroundColor = '#0f0f0f';
        });
    });

}    

window.onload = function(){
setUpEvents();
}