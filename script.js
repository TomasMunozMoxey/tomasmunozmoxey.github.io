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