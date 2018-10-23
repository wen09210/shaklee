

/*影片尚未公布*/

function notyet(){
  alert("影片還沒公佈喔!")
}
/*跳出影片*/
  // function filmpopup(a){

  //   var filmname=document.getElementById("filmname"+a).innerHTML;
  //   document.getElementById('filmInput').value=filmname;
  //   document.getElementById('shareBtn').setAttribute('onclick','share('+a+')');
  //   /*$(".embed-responsive iframe").remove();*/
  //   $(".embed-responsive").append(" <div id='showform'></div>");


  //   var videoid = ["QdS2Bfo0Ok8"];
  //     $('<iframe id="showform" width="420" height="315" frameborder="0" allowfullscreen></iframe>')
  //         .attr("src", "http://www.youtube.com/embed/" + videoid[a-1]+"?enablejsapi=1")
  //         .appendTo(".embed-responsive");
  //   onYouTubeIframeAPIReady();
  //   createPlayer(a);

  // }
  /*關閉影片*/

/*注意事項*/

// $(document).ready(function(){


//   $('#notice_toggle').click(function(){
//     $( "#notice_toggle" ).toggleClass( "open" );
//     $(".notice_content_more").slideToggle();
//   });
// });
/*選單滑動*/
$(function(){
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      var ptop = 57
    }else{
      var ptop = 90
    }

        $('#nav2').click(function(){
          var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
          
       	$("html, body").animate({ scrollTop:  $(".activity").offset().top-ptop }, "slow");
     	  		return false;
          return false;
          });

        $('#nav3').click(function(){
          var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
          
       	$("html, body").animate({ scrollTop:  $(".film").offset().top-ptop }, "slow");
     	  		return false;
          return false;
          });
         $('#nav4').click(function(){
          var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
          
        $("html, body").animate({ scrollTop:  $(".vote").offset().top-ptop }, "slow");
            return false;
          return false;
          });

        

});  

