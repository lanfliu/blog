var abcs;
$(document).ready(function() {
  var result = $("#result");
  var box = $("#letterBox");
  abcs = new Array();
  abcs['a'] = '"儿" & "a"';
  abcs['b'] = 'ㄅ';
  abcs['c'] = 'ㄎ';
  abcs['d'] = 'ㄉ';
  abcs['e'] = '"ㄟ", "椅"';
  abcs['f'] = 'ㄈ';
  abcs['g'] = 'ㄍ';
  abcs['h'] = 'ㄏ';
  abcs['i'] = '"愛", "----1"';
  abcs['j'] = 'G';
  abcs['k'] = 'ㄎ';
  abcs['l'] = 'ㄌ';
  abcs['m'] = 'm恩~';
  abcs['n'] = '鼻音 ㄋ';
  abcs['o'] = 'O';
  abcs['p'] = 'ㄆ';
  abcs['q'] = 'ㄎ';
  abcs['r'] = '"阿兒", "ㄌ,惹"';
  abcs['s'] = '斯';
  abcs['t'] = '特';
  abcs['u'] = '"you", "啊"';
  abcs['v'] = 'ver (沒有r的音)';
  abcs['w'] = '"霧"';
  abcs['x'] = '可斯';
  abcs['y'] = '一';
  abcs['z'] = 'ㄗ';

  box.val("");
  
  var started = false;
  $("#letterBox").keydown(function(event){
    if(event.keyCode >= 65 && event.keyCode <= 90)
    {
      box.val("");
    }
    if(started && box.val() == "")
    {
      result.text("");
    }
  });
  
  $("#letterBox").keyup(function(event){
    if(event.ctrlKey)return;

    if(event.keyCode >= 65 && event.keyCode <= 90)
    {
      var ch = String.fromCharCode(event.keyCode).toLowerCase();
      var answer = abcs[ch];
      box.val(ch);
      result.text(answer);
      started = true;
    }

  });
});