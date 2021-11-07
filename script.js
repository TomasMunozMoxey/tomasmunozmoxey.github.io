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
    strings: ["Software Engineer","Software Developer","Problem Solver","Surfer","Athlete","Coffee Enthusiast","Creator","Traveler"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});