$(document).ready(function(){
  $(".urlclick").click(function(){
    var iframe = $(this).next();
    var url = $(this).attr("url");
    if(iframe.attr("src") == url){
    }
    else {
      iframe.attr("src", url);
    }
    iframe.show();
  });
  $("#allclick").click(function(){
    $(".urlclick").click();
  });
  
});