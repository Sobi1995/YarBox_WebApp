$(function(){

    $('.status-item .heading').click(function(){
        var $this = $(this);
        var $status = $(this).parent('.status-item');
        if($status.hasClass('open')){
            $status.removeClass('open');
            $this.find('.close-status i').addClass('zmdi-chevron-down');
            $this.find('.close-status i').removeClass('zmdi-chevron-up');
            $this.parent('.status-item').find('.status-bar').slideDown();
        }
        else{
            $status.addClass('open');
            $this.find('.close-status i').addClass('zmdi-chevron-up');
            $this.find('.close-status i').removeClass('zmdi-chevron-down');
            $this.parent('.status-item').find('.status-bar').slideUp();
        }
    });

    $('.select-option-link').click(function(){
        $('.overlay-profile').fadeIn('fast');
        $('.selected-names-list').fadeIn('fast');
    });

    $('.selected-names-list .inner').slimScroll({
        railVisible: true,
        alwaysVisible: false,
        position: 'left',
        size: '4px',
        height : '320px',
        distance: '12px',
        railColor: '#468abf',
        railOpacity: 0.6,
        wheelStep: 6
    });
    $('.select-option-goods').click(function(){
        $('.overlay-profile').fadeIn('fast');
        $('.selected-goods-list').fadeIn('fast');
    });

    $('.selected-goods-list .inner').slimScroll({
        railVisible: true,
        alwaysVisible: false,
        position: 'left',
        size: '4px',
        height : '220px',
        distance: '12px',
        railColor: '#468abf',
        railOpacity: 0.6,
        wheelStep: 6
    });
    $('.popup-terminal .inner').slimScroll({
        railVisible: true,
        alwaysVisible: false,
        position: 'left',
        size: '4px',
        height : '90%',
        distance: '12px',
        railColor: '#468abf',
        railOpacity: 0.6,
        wheelStep: 6
    });

    $('.selected-goods-list .heading span').click(function(){
        $('.overlay-profile').css('display','none');
        $('.selected-goods-list').css('display','none');
    });
    $('.selected-names-list .heading span').click(function(){
        $('.overlay-profile').css('display','none');
        $('.selected-names-list').css('display','none');
    });
    $('#select-address-on-map').click(function(){
        $('.popup-map-overlay').fadeIn('fast');
        $('.popup-map').fadeIn('fast');
    });
    $('.close-map').click(function(){
        $('.popup-map-overlay').fadeOut('slow');
        $('.popup-map').fadeOut('fast');
    });
    $('#select-terminal').click(function(){
        $('.popup-terminal-overlay').fadeIn('fast');
        $('.popup-terminal').fadeIn('fast');
    });
    $('.close-terminal').click(function(){
        $('.popup-terminal-overlay').fadeOut('slow');
        $('.popup-terminal').fadeOut('fast');
    });
    $('.selected-names-list .add-new-name-link').click(function(){
        $('.add-new-name').slideToggle('fast');
        $(this).fadeOut();
    });

    $('.delivery-option input:radio').change(function(){
        var $this = $(this);
        var $id = $(this).attr('id');
        if ($this.is(':checked') && $id == 'home-delivery-option') {
            $('.receiver-address').css('display','block');
            $('.receiver-address-map #select-address-on-map').css('display','block');
            $('.receiver-address-map #select-terminal').css('display','none');
        }
        else if ($this.is(':checked') && $id == 'terminal-delivery-option') {
            $('.receiver-address').css('display','none');
            $('.receiver-address-map #select-address-on-map').css('display','none');
            $('.receiver-address-map #select-terminal').css('display','block');
        }
    });  
    $('#insurance-ok').change(function(){
        var $this = $(this);
        if ($this.is(':checked')) {
            $('.tooltip-pocket-layer').slideDown();
        }
    });   
    $('#insurance-not').change(function(){
        var $this = $(this);
        if ($this.is(':checked')) {
            $('.tooltip-pocket-layer').slideUp();
        }
    });  
    $('.count-pocket-carousel').owlCarousel({
        loop:false,
        autoplay:false,
        autoplayHoverPause:false,
        dots: false,
        nav : false,
        margin:0,
        rtl: true,
        responsiveClass:true,
        responsive:{
            0:{
                items:3
            },
            470:{
                items:6
            },
            1024:{
                items:8
            },
            1366:{
                items:10
            }
        }
    });
    $('.profile-page .access-menu ul li span').click(function(){
        var $this = $(this);
        var $status = $(this).parent('li');
        if($status.hasClass('open')){
            $status.removeClass('open');
            $this.find('i').addClass('zmdi-chevron-down');
            $this.find('i').removeClass('zmdi-chevron-up');
            $this.parent('li').find('ul:first').slideDown();
        }
        else{
            $status.addClass('open');
            $this.find('i').addClass('zmdi-chevron-up');
            $this.find('i').removeClass('zmdi-chevron-down');
            $this.parent('li').find('ul:first').slideUp();
        }
    });

    $('.table-list .tbl-row .heading').click(function(){
        $(this).parent().find('.detail').slideToggle();
    });

    $('.add-new-address').click(function(){
        $('.new-address-layer').fadeToggle();
    });
	
	
	 $("#menu-close").click(function(e) {
    e.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
	 });
    $("#menu-toggle").click(function(e) {
	e.preventDefault();
	$("#sidebar-wrapper").toggleClass("active");
    });
	
	
	
	    jQuery('<div class="quantity-nav"><div class="quantity-button quantity-up">+</div><div class="quantity-button quantity-down">-</div></div>').insertAfter('.quantity input');
    jQuery('.quantity').each(function() {
      var spinner = jQuery(this),
        input = spinner.find('input[type="number"]'),
        btnUp = spinner.find('.quantity-up'),
        btnDown = spinner.find('.quantity-down'),
        min = input.attr('min'),
        max = input.attr('max');

      btnUp.click(function() {
        var oldValue = parseFloat(input.val());
        if (oldValue >= max) {
          var newVal = oldValue;
        } else {
          var newVal = oldValue + 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
      });

      btnDown.click(function() {
        var oldValue = parseFloat(input.val());
        if (oldValue <= min) {
          var newVal = oldValue;
        } else {
          var newVal = oldValue - 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
      });

    });
	
	
	
	
	// $(".btn-circle-download").click(function() {
	//   $(this).addClass("load");
	//   setTimeout(function() {
	// 	$(".btn-circle-download").addClass("done");
	//   }, 1000);
	//   setTimeout(function() {
	// 	$(".btn-circle-download").removeClass("load done");
	//   }, 5000);
	// });
    
    

    


	
	$(document).ready(function(){
		$( ".vecl-type-label1" ).click(function() {
			setTimeout(function() {
				if ( $('#myModal3').hasClass('in') ) { //Check if the modal is already showing
					$('#myModal3').modal('hide');
				};
			}, 3000); // milliseconds
		});
	});
	
	$(document).ready(function(){
		$( ".vecl-type-label2" ).click(function() {
			setTimeout(function() {
				if ( $('#myModal4').hasClass('in') ) { //Check if the modal is already showing
					$('#myModal4').modal('hide');
				};
			}, 3000); // milliseconds
		});
	});
	
	
	
	

});