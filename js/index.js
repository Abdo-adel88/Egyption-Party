$('#clic').click(function () {


     $('.close').show(700);
})



$('.difbut').click(function () {
     $('.close').hide(700);
})



$(' .hclic').click(function () {
     $('.p-about').not($(this).next()).slideUp(500);
     $(this).next().slideToggle(500);
})





$('.close a[href^="#"]').click(function (e) {
     let linkAhref = $(e.target).attr('href');
     let sectionOffset = $(linkAhref).offset().top;
     $('html,body').animate({ scrollTop: sectionOffset }, 200)

})









var countDownDate = new Date("Jan 5, 2030 15:37:25").getTime();


var x = setInterval(function () {


     var now = new Date().getTime();


     var distance = countDownDate - now;


     var days = Math.floor(distance / (1000 * 60 * 60 * 24));
     var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
     var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
     var seconds = Math.floor((distance % (1000 * 60)) / 1000);


     document.getElementById("fir-cer").innerHTML = days + "d ";
     document.getElementById("sec-cer").innerHTML = hours + "h "

     document.getElementById("three-cer").innerHTML = minutes + "m "
     document.getElementById("four-cer").innerHTML = seconds + "s ";


     if (distance < 0) {
          clearInterval(x);
          document.getElementById("fir-cer").innerHTML = "EXPIRED";
     }
}, 1000);



$('.myInput').keyup(function () {
     var text_length = $('.myInput').val().length;
     var text_remaining = 100 - text_length;

     if (text_remaining>= 0) {
          $('#counter').html( `<span class="text-danger fs-4">${text_remaining}</span>` + ' characters remaining');
        } else {
         $('#counter').html('<span class="text-danger fs-4">your available character finished</span> Characyer Reamining');
         
        }
  
    
});



