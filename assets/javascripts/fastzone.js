function getCurrentDate(){
  var dt = new Date();
  var yyyy = dt.getFullYear().toString();
  var mm = (dt.getMonth()+1).toString(); // getMonth() is zero-based
  var dd  = dt.getDate().toString();
  return yyyy + "-" + (mm[1]?mm:"0"+mm[0]) +  "-" + (dd[1]?dd:"0"+dd[0]);
}
var selectedType = "";
$(document).ready(function(){

  selectedType = $("#buttonGroup").children("button").first().attr("category");

  $("#buttonGroup").children("button").click(function(){
    $("#buttonGroup").children("button").removeClass("btn-success");
    $(this).addClass("btn-success");
    selectedType = $(this).attr("category");
    $(".divType").hide();
    $("#div" + selectedType).show();
  });

  $("#music_inputAlbumReleaseDate").val(getCurrentDate());
  $("#buttonConvert").click(function(){
    if(selectedType == "Music")
    {
      var albumDate = $("#music_inputAlbumReleaseDate").val();
      var singer = $("#music_inputSinger").val();
      var album = $("#music_inputAlbum").val();
      var quality = $("#music_inputSoundQuality").val();
      var size = $("#music_inputSpaceSize").val();
      var linkLocation = $("#music_inputLinkLocation").val();
      var songlist = $("#music_inputSongList").val();
      var result = $("#music_inputTemplate")
                   .text()
                   .replace("#music_releaseDate#", albumDate)
                   .replace("#music_singer#", singer)
                   .replace("#music_album#", album)
                   .replace("#music_quality#", quality)
                   .replace("#music_space#", size)
                   .replace("#music_downloadLocation#", linkLocation)
                   .replace("#music_songList#", songlist);
      $("#inputSubject").val(
        albumDate + " " + singer + " - " + album + 
        " (MP3@" + quality.replace("bps","") + "@XUITE@" + size.split(" ")[0] + "MB)");
    }else if (selectedType == "Vid")
    {
      var siteName = $("#vid_inputSiteName").val();
      var subject = $("#vid_inputSubject").val();
      var fileName = $("#vid_inputFilename").val();
      var size = $("#vid_inputSpaceSize").val();
      var linkLocation = $("#vid_inputLinkLocation").val();

      var result = $("#vid_inputTemplate")
                   .text()
                   .replace("#vid_filename#", fileName)
                   .replace("#vid_space#", size)
                   .replace("#vid_downloadLocation#", linkLocation);
      $("#inputSubject").val(
        "【" + siteName + "】" + subject + " [MEGA@IE@" + size.split(" ")[0] + "MB]");
    }
    else if (selectedType == "Pic")
    {
      var siteName = $("#pic_inputSiteName").val();
      var subject = $("#pic_inputSubject").val();
      var fileName = $("#pic_inputFilename").val();
      var size = $("#pic_inputSpaceSize").val();
      var picAmount = $("#pic_inputPhotoAmount").val();
      var linkLocation = $("#pic_inputLinkLocation").val();

      var result = $("#pic_inputTemplate")
                   .val()
                   .replace("#pic_filename#", fileName)
                   .replace("#pic_space#", size)
                   .replace("#pic_amount#", picAmount)
                   .replace("#pic_downloadLocation#", linkLocation);
      $("#inputSubject").val(
        "【" + siteName + "】" + subject + " [MEGA@IE@" + size.split(" ")[0] + "MB]");      
    }
    $("#inputResult").val(result);
    $("#resultBlock").show();
    $("#inputResult").focus();
  });
  
  $("#buttonReset").click(function(){
    if (selectedType == "Music")
    {
      $("#music_inputAlbumReleaseDate").val("");
      $("#music_inputSinger").val("");
      $("#music_inputAlbum").val("");
      $("#music_inputSoundQuality").val("320Kbps");
      $("#music_inputSpaceSize").val("");
      $("#music_inputLinkLocation").val("");
      $("#music_inputSongList").val("");
      $("#music_inputAlbumReleaseDate").val(getCurrentDate());
    }
    else if (selectedType == "Vid")
    {
      $("#vid_inputLinkLocation").val("");
      $("#vid_inputSpaceSize").val("");
      $("#vid_inputSubject").val("");
      $("#vid_inputSiteName").val("");
      $("#vid_inputFilename").val("");
    }
    else if (selectedType == "Pic")
    {
      $("#pic_inputFilename").val("");
      $("#pic_inputSiteName").val("");
      $("#pic_inputSubject").val("");
      $("#pic_inputSpaceSize").val("");
      $("#pic_inputPhotoAmount").val("");
      $("#pic_inputLinkLocation").val("");
    }
    $("#inputResult").val("");
    $("#inputSubject").val("");
    $("#resultBlock").hide();
  });
});