$(document).ready(function(){
  $('#newquote').click(function(){
    getRandomQuote();
  });
  function getRandomQuote(){
    var color=['#F64747','#663399','#4183D7','#22313F','#9A12B3','#03A678']; /* array of hex color */
    var index=color[Math.floor(Math.random()*color.length)]; /* random color from color array */
    $.ajax({
      url: 'https://talaikis.com/api/quotes/random/',
      type: 'GET',
      dataType: 'json',
      success: function(data) {
  	    var quote=data.quote;
  	    var author=data.author;
  			$('.quote #data').html(quote);
  			$('.quote h4').html("-"+author);
    		$('body').css('background-color', index);
        $('.col').css('background-color', index);
  			$('.socialmedia a').css('background-color', index);
   			$('#newquote').css('color','white');
  			$('.color').css('color', index);
        $('#twitter').attr('href',"https://twitter.com/intent/tweet?text="+quote+"   "+author);
  		},
      error: function(err) {
        $('.quote #data').html("Oops something went wrong!, Please try again.");
      }
    });
  }
});
