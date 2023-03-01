(function($){
  $(function(){
    $('.sidenav').sidenav();
    $('.tabs').tabs({"swipeable":true});
    $('.parallax').parallax();
    $("#mostrarTitol").on("click",function(){
      $.ajax({
        method: "GET",
        url: "https://api.spaceflightnewsapi.net/v3/articles?_limit=6",
        dataType: "json",   // necessitem això pq ens retorni un objecte JSON
      }).done(function (msg) {
        for(let item in msg) {
          elem = $("<a href='#!' class='collection-item'>"+msg[item].title+"</a>");
          $(".collection").append(elem);
          $(elem).on("click",function(){
            $('.tabs').tabs("select","test-swipe-2");
            $("#test-swipe-2").empty();
            $("#test-swipe-2").append("<h4>" + msg[item].title+ "</h4><img src='"+msg[item].imageUrl+"'>")
            read_more = $("<a href='#'> Read more... </a>");
            $("#test-swipe-2").append(read_more);
            $(read_more).on("click",function(){
              window.open(msg[item].url, '_system'); return false;
            });
            $(".card-image").append("<img src='"+msg[item].imageUrl+"'></img>");
            $(".card-image").append("<span>"+ msg[item].title + "</span>");

          });
        };
      }).fail(function () {
        alert("ERROR");
      });
    });
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


