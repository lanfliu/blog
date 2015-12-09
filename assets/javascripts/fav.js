$(document).ready(function () {
  var url = $("#hiFav").val();
  // Assign handlers immediately after making the request,
  // and remember the jqxhr object for this request
  var jqxhr = $.getJSON( url, function() {
    //console.log( "success" );
  })
  .done(function(favs) {
    $("#favTable").show();
    ko.applyBindings(favs);
  })
  .fail(function(abc) {
    alert("oops something wrong");
  })
  .always(function() {
  });

  // Set another completion function for the request above
  jqxhr.complete(function() {
    $("#loadingText").hide();
  });
});