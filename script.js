$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
            $('.home').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
            $('.home').removeClass("sticky");
        }
    })
}); 

var typed = new Typed(".typing", {
    strings: ["Software Developer","Network Engineer","Problem Solver","Surfer","Athlete","Coffee Enthusiast","Creator","Traveler"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

function adjustStyle(width) {
    width = parseInt(width);
    if (width < 701) {
       $("#size-stylesheet").attr("href", "style_mobile.css");
    } else if (width < 1200) {
       $("#size-stylesheet").attr("href", "style_mobile.css");
    } else {
       $("#size-stylesheet").attr("href", "style.css");
    }
 }
 
 $(function() {
    adjustStyle($(this).width());
    $(window).resize(function() {
       adjustStyle($(this).width());
    });
 });
