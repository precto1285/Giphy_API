var APIKey = "qnf0y97yxb1cdmsTB6pO7UgudG1f9gv3";

    // Here we are building the URL we need to query the database
    var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=qnf0y97yxb1cdmsTB6pO7UgudG1f9gv3&tag=guitars&rating=G" + APIKey;

    // We then created an AJAX call
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
        console.log(queryURL);
        console.log(response);
    });