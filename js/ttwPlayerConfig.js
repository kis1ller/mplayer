$(document).ready(function(){
    var description = 'Опис';

    $('#ttwPlayer').ttwMusicPlayer(myPlaylist, {
        autoPlay:false, 
        description:description,
        width: "1554px",
        height: "312px",
        tracksToShow:5,
        jPlayer:{
            swfPath:'plugin/jquery-jplayer' //You need to override the default swf path any time the directory structure changes
        }
    });
});