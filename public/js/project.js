$(document).ready(function(){

// Textarea Character Left //

/*var charLeft;

$('.textarea-word-tracker textarea').on('keyup load', function () {
  charLeft = 300 - $(this).val().length;
  if (charLeft < 0) {
    charLeft = 0;
  }
  $(this).siblings('span').text(charLeft);
});

$(window).load( function() {
  $('.textarea-word-tracker textarea').each( function () {
    charLeft = 300 - $(this).val().length;
    $(this).siblings('span').text(charLeft);    
  });
});*/

// Static Content ol li number //

/*
$(window).load(function(){
  var StaticliNumber = $('.static-content ol li').length;
  for(var i = 1; i <= StaticliNumber; i++){
    $('.static-content ol li:nth-child('+i+')').attr('list-number', i);
  }
});
*/

// Number Bullet //

/*$(window).load(function(){
  var liNumber = $('.number-bullet li').length;
  for(var i = 1; i <= liNumber; i++){
    $('.number-bullet li:nth-child('+i+')').attr('list-number', i);
  }
});*/

// Nav Toggle //

$('.nav-toggle').on('click', function(){
  $(this).toggleClass('active');
});

// Remove Button //

$('a.remove').on('click', function(){
  $(this).parent().remove();
});

// Close Button //

$('a.close:not(.overlay-close)').on('click', function(){
  $(this).parent().hide();
});

// Overlay //

$('.overlay-bttn').on('click', function(e){
  e.preventDefault();
  var bttnID = $(this).attr('href');
  $(bttnID).toggleClass('active');
  console.log(bttnID);
  $('body').addClass('mobile-scrollable');
});
$('.overlay-close').on('click', function(){
  $(this).parents('.overlay').removeClass('active');
  $('body').removeClass('mobile-scrollable');
});

$('.overlay').on('click', function(){
  $(this).removeClass('active');
  $('body').removeClass('mobile-scrollable');
});

$('.inner-overlay-box').on('click', function(e){
  e.stopPropagation();
});

// Responsive Table //

$(window).load(function(){
  $('.table.responsive').each(function(){  
    for (var i = 1; i <= $(this).find('th').length ; i++) {
      var thVal = $(this).find('th:nth-child('+i+')').html();
      $(this).find('td:nth-child('+i+')').attr('th-data', thVal);
    };
  });
});

// Inline Upload Button Show Image
/*

function readURL(input) {
  if (input.files && input.files[0]) {
      var reader = new FileReader();

      reader.onload = function (e) {
          var $parent = $(input).parents('.inline-upload');
          if($parent.find('#uploaded-photos').children().length > 0){
            $parent.find('#uploaded-photos img').attr('src', e.target.result);
          } else{
            $('#uploaded-photos').append('<div class="uploaded-photo-box"><img src="' + e.target.result + '" /><a class="remove" href="javascript:void(0)">&nbsp;</a></div>'); 
          }
      };

      reader.readAsDataURL(input.files[0]);
  }
};

$(document).on('change', '#upload_bttn', function(e){
  readURL(this);
});
*/

// Uploaded Photo Remove //

/*
$(document).on('click', '#uploaded-photos a.remove', function(){
  var removeID = $(this).data('attr');
  $(this).parents('.uploaded-photo-box').remove();
  removeID = removeID.split('_');
  fileUploaded.splice(removeID[1],1);
});  
*/

// Banner Box

$('.banner-box').on('mouseover', function(){
  console.log($(this));
  $(this).addClass('active').siblings().removeClass('active')
});

// Number Validate

/*$('.number-field').numeric();*/

// Filters
/*

$('.filters-bttn').on('click', function(){
  $(this).toggleClass('active');
  $('.filters').fadeToggle();
});
*/

// window.sr=ScrollReveal(),sr.reveal(".reveal", {distance: '100px', duration: 700, viewFactor: 0.4});

// Mobile Items

$('.nav-toggle').on('click', function(){
  $('.navigation').toggleClass('active');
});

// Accordion

$(function() {
  $('.accordion').accordion({collapsible : true, active : 'none'});
  
});

// Character Limit

var myText = $('.listing-items ul li p');
myText.text(myText.text().substring(0,120))

// Mobile Tab

$('.mobile-tab').on('click', function(e){
  e.preventDefault();
  $(this).siblings('.mobile-inner').slideToggle().parents('li').toggleClass('active');
  $(this).parents('li').siblings().removeClass('active').find('.mobile-inner').slideUp();
});

// Footer Nav

$('.open-nav').on('click', function(e){
  e.preventDefault();
  $(this).toggleClass('active').siblings('ul').slideToggle();
});

// Quantity

/*$('<div class="quantity-nav"><div class="quantity-button quantity-up">+</div><div class="quantity-button quantity-down">-</div></div>').insertAfter('.quantity input');
$('.quantity').each(function() {
  var spinner = $(this);
  var inputNum = spinner.find('input');
  var btnUp = spinner.find('.quantity-up');
  var btnDown = spinner.find('.quantity-down');
  var inputMin = inputNum.attr('min');
  var inputMax = inputNum.attr('max');

  inputNum.on('blur', function(){
    if($(this).val().length == 0){
      $(this).val('1');
    }
  });

  btnUp.on('click', function() {
    var oldValue = parseFloat(inputNum.val());
    if (oldValue >= inputMax) {
      var newVal = oldValue;
    } else {
      var newVal = oldValue + 1;
    }
    inputNum.val(newVal);
    inputNum.trigger("change");
  });

  btnDown.on('click', function() {
    var oldValue = parseFloat(inputNum.val());
    if (oldValue <= inputMin) {
      var newVal = oldValue;
    } else {
      var newVal = oldValue - 1;
    }
    inputNum.val(newVal);
    inputNum.trigger("change");
  });

});*/

// Show Password

/*$('.show-password').on('click', function(){
  if($(this).hasClass('active')){
    $(this).removeClass('active').find('svg').attr('data-icon', 'eye');
    $(this).siblings('input').attr('type', 'password');
  } else{
    $(this).addClass('active').find('svg').attr('data-icon', 'eye-slash');
    $(this).siblings('input').attr('type', 'text');
  }
});*/

// Tour Icons

setInterval(() => {
  let getIndex = $('.tour-icons li.active').index()+1;
  let icons = $('.tour-icons ul').children().length;
  if(getIndex == icons){
    $('.tour-icons li:first-child').addClass('active').siblings().removeClass('active');
  } else{
    $('.tour-icons li.active').removeClass('active').next().addClass('active');
  }
}, 3000);

// Responsive

  if($(window).width() < 860){
    // Static Sidebar

    $('.static-sidebar ul li.active a').on('click', function(e){
      e.preventDefault();
      $(this).parents('.static-sidebar').toggleClass('active');
    });
  
  }



});