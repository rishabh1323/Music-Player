// Getting all the required elements as variables
var playButton = document.getElementById("play-button");
var pauseButton = document.getElementById("pause-button");
var progressBar = document.getElementById("progress-bar");
var songPlayer = document.getElementById("song-player");
var timePlayed = document.getElementById("time-played");
var volumeSlider = document.getElementById("volume-slider");
var volumeUp = document.getElementById("volume-up");
var volumeDown = document.getElementById("volume-down");
var volumeMute = document.getElementById("volume-mute");

// All the event listeners to identify play/pause, mute/unmute & vomue control
playButton.addEventListener("click", playMusic);
pauseButton.addEventListener("click", pauseMusic);
volumeSlider.addEventListener("change", changeVolume);
volumeUp.addEventListener("click", muteVolume);
volumeDown.addEventListener("click", muteVolume);
volumeMute.addEventListener("click", unmuteVolume);

// All the used function definitions
// Function to play music on hitting play button
function playMusic(){
	playButton.style.display = "none";
	pauseButton.style.display = "inline-block";
	songPlayer.play();
}
// Function to pause music on hitting pause button
function pauseMusic(){
	playButton.style.display = "inline-block";
	pauseButton.style.display = "none";
	songPlayer.pause();
}
// Function to update the progress bar for the playing music
function updateProgress(){
	if(songPlayer.currentTime > 0){
		progressBar.value = (songPlayer.currentTime / songPlayer.duration) * 100;
		if(Math.floor(songPlayer.currentTime) % 60 < 10){
			timePlayed.innerHTML = Math.floor(songPlayer.currentTime / 60) + ":0" + Math.floor(songPlayer.currentTime) % 60;
		}
		else{
			timePlayed.innerHTML = Math.floor(songPlayer.currentTime / 60) + ":" + Math.floor(songPlayer.currentTime) % 60;	
		}
	}
}
// Function to change the music volume using the slider
function changeVolume(e){
	songPlayer.volume = e.currentTarget.value / 100;
	if(songPlayer.volume == 0){
		muteVolume();
	}
	else if(songPlayer.volume < 0.5){
		volumeUp.style.display = "none";
		volumeDown.style.display = "inline-block";
		volumeMute.style.display = "none";	
	}
	else{
		volumeUp.style.display = "inline-block";
		volumeDown.style.display = "none";
		volumeMute.style.display = "none";
	}
}
// Function to mute the volume on hitting the mute button
function muteVolume(){
	volumeUp.style.display = "none";
	volumeDown.style.display = "none";
	volumeMute.style.display = "inline-block";
	songPlayer.volume = 0;
	volumeSlider.value = 0;
}
// Function to un-mute the volume on hitting the un-mute button
function unmuteVolume(){
	volumeUp.style.display = "inline-block";
	volumeDown.style.display = "none";
	volumeMute.style.display = "none";
	songPlayer.volume = 0.5;
	volumeSlider.value = 50;
}

// Queue and My Playlist switching function on click
var queue = document.getElementById("queue");
var myPlaylist = document.getElementById("my-playlist");
var goToQueueButton = document.getElementById("go-to-queue");
var goToMyPlaylistButton = document.getElementById("go-to-my-playlist");

goToQueueButton.addEventListener("click", goToQueue);
goToMyPlaylistButton.addEventListener("click", goToMyPlaylist);

function goToQueue(){
	myPlaylist.style.display = "none";
	queue.style.display = "inline-block";
}
function goToMyPlaylist() {
	queue.style.display = "none";
	myPlaylist.style.display = "inline-block";
}





