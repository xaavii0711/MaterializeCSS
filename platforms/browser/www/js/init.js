(function($){
  $(function(){
    $('.sidenav').sidenav();
    $('.parallax').parallax();
    $('.tabs').tabs({"swipeable":true});

  }); // end of document ready
})(jQuery); // end of jQuery name space

$(document).ready(function(){
  $('.fixed-action-btn').floatingActionButton();
});
 
document.addEventListener('deviceready', onDeviceReady, false);
 
function onDeviceReady() {
    // Cordova is now initialized. Have fun!
 
    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    //document.getElementById('deviceready').classList.add('ready');
}


