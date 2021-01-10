let x, y, rotation;
let run = setInterval(function(){
  x = Math.random() * 800;
  y = Math.random() * 800;
  rotation = Math.random() * 360;
  $('#kuchen').css('transform', 'translateX('+ x +'px) translateY('+ y +'px) rotate('+ rotation +'deg)'); 
}, 1200);

$('#kuchen').click(function(){
  clearInterval(run); 
  anfang = 'translateX(0) translateY(0) rotate(0deg)';
  $('#kuchen').css('transform', anfang);
  $('#text').text('You caught it :)');
  $('.smile').css('display', 'block');
  $('.auge-klein').css('animation', 'rolling-eyes 2s linear infinite');
}); 