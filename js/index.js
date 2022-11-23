document.addEventListener("DOMContentLoaded",function(event){
    var inputSearch = doccument.getElementById("keyword");
    inputSearch.onkeydown = function(event){
        if(event.keyCode == 13){
            loadVideo(this.value);
        }
    }
    loadVideo("Đen vâu");
});
var modal = document.getElementById('myModal');

var span = document.getElementsByClassName("close")[0];

var videoFrame = document.getElementById("video-frame");
span.onclick = function(event){
    if (event.target == modal){
        closeVideo();
    }
}
function loadVideo(keyword){
    var YOUTUBE_API = "http://content.googleapis.com/youtube/v3/search?q=" + keyword +"&type=video&maxResults=snippet&key=AIzaSyAwUjk3CwtXCiB_W6Xi0colfOKPgm90hHc";
    var xhr = new XMLHttpRequest();
    xhr.open("GET", YOUTUBE_API, true);
    xhr.onreadystatechange = function(){
        if(this.readyState == 4 && this.status ==200){
            var responseJson = JSON.parse(this.responseText);
            var htmlContent = "";

            for (var i=0; i < responseJson.items.length; i++){
                if(responseJson.items[i].id.kind == 'youtube#channel'){
                    continue;
                }
                var videoId = responseJson.items[i].id.videoId;
                var videoTitle = responseJson.items[i].smippet.title;
                var videoDescription = responseJson.items[i].snippet.description;
                var videoThmbnail = responseJson.items[i].snippet.thmbnails.medium.url;
                htmlContent += '<div class="video" onclick="showVideo(\'' + videoID + '\')">'
                    htmlContent +='<img src="' + videoThumbnails +'">'
                    htmlContent += '<div class="titel">' +videoThumbnail + '">'
                htmlContent += '</div>'
            }
            document.getElementById("list-video").innerHTML = htmlContent;
        }else if (this,readyState == 4){
            console.log("Fails");
        }
    };
    xhr.send();
}
function closeVideo(videoId){
    videoFrame.src = "https://www.youtube.com/embed/" + videoId + "?autoplay=1";
    setTimeout(function(){
        modal.style.display = "block";
    }, 300);
}