$(document).ready(function(){

//Style first li element in porthpholio block
							// $('.nav li:first a').addClass("active");
//Owl-Carousel
							$(".owl-carousel").owlCarousel({
								nav: true,
								items: 2,
								dots: true,
								navText: ["<i class='fa fa-angle-left' aria-hidden='true'></i>","<i class='fa fa-angle-right' aria-hidden='true'></i>"],
								responsive : {
									0 : {
										items: 1,
										nav: false,
									},
									995:{
										items:2,
										nav:true,
									}
								}
							});
//Show/Hide ArrowToTop button
							$(document).scroll(function() {
								var y = $(this).scrollTop();
								if (y > 1200) {
									$('.arrow-up').fadeIn();
								} else {
									$('.arrow-up').fadeOut();
								}
							});
//Show/Hide popup block in porthpholio section
							// $(".porthpholio-block")
							// .on("mouseenter", function(){
							// 	$(".popup-block").removeClass("active");
							// 	$(this).find(".popup-block").addClass("active");
							// })
							// .on("mouseleave", function() {
							// 	$(".popup-block").removeClass("active");
							// });
						});
//Header arrow scroll to #about-us section
						$("#arrow_about").click(function() {
							$('html, body').animate({
								scrollTop: $("#about-us").offset().top
							}, 1000);
						});
//BackToTop arrow scroll
						$("#arrow-top").click(function() {
							$('html, body').animate({ scrollTop: 0 }, '2500');
						});
//Order button scroll
						$(".order-btn").click(function() {
							$('html, body').animate({
								scrollTop: $(".contacts").offset().top
							}, 1000);
						});
//Remove/Add .active from porthpholio li element(to style it)
						// $(".nav li a").on("click", function(){
						// 	$(".nav li a").removeClass("active");
						// 		$(this).addClass("active");
						// });

					$(".navbar-nav").on("click","a", function (event) {
						//отменяем стандартную обработку нажатия по ссылке
						event.preventDefault();

						//забираем идентификатор бока с атрибута href
						var id  = $(this).attr('href'),

						//узнаем высоту от начала страницы до блока на который ссылается якорь
							top = $(id).offset().top;

						//анимируем переход на расстояние - top за 1500 мс
						$('body,html').animate({scrollTop: top}, 1500);

					});
//Портфолио
					$(function() {
						var selectedClass = "";
						$(".fil-cat").click(function(){
							selectedClass = $(this).attr("data-rel");
							$("#portfolio").fadeTo(100, 0.1);
							$("#portfolio div").not("."+selectedClass).fadeOut().removeClass('scale-anm');
							setTimeout(function() {
								$("."+selectedClass).fadeIn().addClass('scale-anm');
								$("#portfolio").fadeTo(300, 1);
							}, 300);

						});
					});
//hide bootstrap menu
$('#map').click(function () {
    $('#map iframe').css("pointer-events", "auto");
});

$( "#map" ).mouseleave(function() {
  $('#map iframe').css("pointer-events", "none"); 
});
$("#contact-form-button").click(function() {
    $('#contact-form').submit();
});
$('#contact-form').submit(function(event){
    event.preventDefault();
    var n = $('#i_name').val();
    var c = $('#i_email').val();
    var tt = $('#i-message').val();
    $.post( "/ajax/recall.php", { name: n, email: c, mess: tt})
        .done(function(data){
            $('#email-success').fadeIn(1200);
            $('#contact-form').hide();
        });
    return false;
});
$(function() {
    $('.nav a').on('click', function(){ 
        if($('.navbar-toggle').css('display') !='none'){
            $(".navbar-toggle").trigger( "click" );
        }
    });
});