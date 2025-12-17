
    // Get next event

fetch('https://wall.floridajs.org/nextEvent')
.then(function(response) {
    return response.json();
})
.then(function(data) {
    console.log(data);
    var title = data.title;
    var date = data.date + "T18:30-05:00";
    var desc = data.description;
    var location = data.location;
    var url = data.url;
    var eventDate = new Date(date);
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    var eventDateText = eventDate.toLocaleDateString('en-US', options)
    console.log(""+eventDateText);

    document.getElementById("eventTitle").innerHTML = title;
    document.getElementById("eventDate").innerHTML = eventDateText;
    document.getElementById("#eventDescription").innerHTML = "Location: <BR>"+location;
    document.getElementById("eventUrl").attributes("href",url);
});

// Youtube Video.
var YoutubeCards = document.getElementById("YoutubeCards");
fetch('https://wall.floridajs.org/GetYoutubeFeed')
.then(function(response) {
    return response.json();
})
.then(function(videos) {
    
    videos.map(video => {
        var VideoCard =  document.createElement("article"); 
        VideoCard.classList.add("card");
        var headerCard =  document.createElement("header"); 
        headerCard.classList.add("card-header");
        headerCard.innerHTML = "<iframe class=\"video\" src=\"https://www.youtube.com/embed/" + video.videoID + "?enablejsapi=1\" width=400 height=200 frameborder=\"0\" allowfullscreen></iframe><a href=\"" + video.videoUrlLink + "\" target=\"_blank\"><h2>" + video.title + "</h2></a>";
        VideoCard.appendChild(headerCard);
        YoutubeCards.appendChild(VideoCard);
    });
    
                                        
    //<iframe allow="autoplay; picture-in-picture" allowfullscreen="" frameborder="0" src="https://www.youtube.com/embed/sWSN0Bmjp7w?autoplay=1&amp;mute=1" title="YoutubeVideo" width="100%"></iframe>
                                    



});

