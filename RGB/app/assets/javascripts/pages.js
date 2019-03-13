$(function() {
  $(".dial").knob({
    'change': function() {
      var rgb = 'rgb(' + $('#red').val() + ',' + $('#green').val() + ',' + $('#blue').val() + ')';
      $('#color').css('background-color', rgb);
      $('#elcolorzito').html(rgb);
    }
  });

});
