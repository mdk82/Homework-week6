$(document).ready(function() {
	displaykeyword();
});

// Initial Variables //
// ========================================== //

var words = ["awesome", "fresh"];


// click button to store user keyword in variable words //

	$('#submit-word').on('click', function() {
		event.preventDefault();

			var keyword = $('#forminput').val().trim();

			words.push(keyword);

				// test
			console.log(words);

			$('#forminput').val("");

			displaykeyword();

	});

// displaying the new button for the keyword added //

function displaykeyword () {
	$('#giphywords').empty()

	for (var i = 0; i < words.length; i++) {
		var wordButtons = $('<button>').addClass('displayword').text(words[i]);
		$('#giphywords').append(wordButtons);
	};
};

// ajax call for giphy buttons clicked //

$('body').on('click', ".displayword", function() {
	console.log('working');

	var giphyword = $(this).text();
	var queryURL = "http://api.giphy.com/v1/gifs/search?q="+ giphyword +"&api_key=67apvwJQpLPL6drdD5CayEnmV543oKNF";

			// test
		console.log(queryURL);

		$.ajax({url:queryURL,method:"GET"}).done(function(response) {

			// test
		console.log(response);

		var giphy = response.data;

			// test
		console.log(giphy);

		$('#giphydisplay').empty();

		for (var i = 0; i < giphy.length; i++) {

				// test
			console.log("Amount of giphy's: " + giphy.length);


				// display giphys //

			$('#giphydisplay').append("<img src='" + giphy[i].images.downsized.url +"'>");
		}

});


		
})
