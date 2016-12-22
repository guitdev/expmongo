// main.js
var update = document.getElementById('update');
var quote_text = document.getElementById('quote');
var quote_timestamp = document.getElementById('timestamp');
var date = new Date();
var dateISO = date.toISOString();
// var day = date.getDate();
// var monthIndex = date.getMonth();
// var year = date.getFullYear();

$(document).ready(function(){
    $("i.edit").click(function(){
        $("#name").attr("value") = $(this).next().text;
        $("#quote").attr("value") = $(this).next().next().text;
        console.log("quote: " + $(this).attr("id") + " " + $(this).next().text);
    });

    $("i.hide").click(function(){        
        $(this).hide();
    });
});

update.addEventListener('click', function () {
  // Send PUT Request here
  fetch('quotes', {
  method: 'put',
  headers: {'Content-Type': 'application/json'},
  body: JSON.stringify({
    'name': 'Darth Vader',
    'quote': 'I find your lack of faith disturbing.',
    'timestamp': dateISO
  	})
  })
  .then(res => {
  	if (res.ok) return res.json()
  })
  .then(data => {
  	console.log(data)
  	window.location.reload(true)
  })
})


quote_text.addEventListener('change', function () {
	// console.log(dateISO);
	quote_timestamp.value = dateISO;
})