var text = 'sh trollstateengorge.sh';

var i = 0;

runner();

function runner() {
  textarea.append(text.charAt(i));
  i++;
  setTimeout(
    function() {
      if (i < text.length)
        runner();
      else {
        textarea.append("<br>")
        i = 0;
        setTimeout(function() {feedbacker();}, 1000);
      }
    }, Math.floor(Math.random() * 120) + 2);
}

var count = 0;
var time = 1;
function feedbacker() {
  textarea.append("[    " + count / 1000 + "] " + output[i] + "<br>");
  if (time % 2 == 0) {
    i++;
    textarea.append("[    " + count / 1000 + "] " + output[i] + "<br>");
  }
  if (time == 3) {
    i++;
    textarea.append("[    " + count / 1000 + "] " + output[i] + "<br>");
    i++;
    textarea.append("[    " + count / 1000 + "] " + output[i] + "<br>");
    i++;
    textarea.append("[    " + count / 1000 + "] " + output[i] + "<br>");
  }
  window.scrollTo(0, document.body.scrollHeight);  
  i++;
  time = Math.floor(Math.random() * 4) + 12;
  count += time;
  setTimeout(
    function() {
      if (i < output.length - 2)
        feedbacker();
      else {
        textarea.append("<br>Initialising...<br>");
        setTimeout(function() {$(".load").fadeOut(1000);}, 500); $("html, body").delay(800).animate({
    scrollTop: 0
}, 1000);
      }
    },time);
}