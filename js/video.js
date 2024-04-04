var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video = document.querySelector("#player1");
	video.autoplay= false;
	video.loop = false;
	console.log("Auto play is set to " +video.autoplay)
	console.log("loop is set to "  +video.loop)

});

document.getElementById("play").addEventListener("click", function(){
	document.getElementById("player1").play();
	updateVolumeInfo(); 
	console.log("play video");

});

document.getElementById("pause").addEventListener("click", function(){
	document.getElementById("player1").pause();
	console.log("pause video");
});

document.getElementById("slower").addEventListener("click",function(){
	video.playbackRate -= 0.1;
	console.log("Slow down video")
	console.log("Speed is: " +video.playbackRate);
});

document.getElementById("faster").addEventListener("click", function(){
	video.playbackRate += 0.1;
	console.log("Speed up video")
	console.log("Speed is: " +video.playbackRate)
});

document.getElementById("skip").addEventListener("click", function(){ 
	video.currentTime += 10;
	console.log("Skip ahead")
	if (video.currentTime >= video.duration) {
		video.currentTime = 0; 
	}
	console.log("Video current time is " + video.currentTime)

}); 

document.getElementById("mute").addEventListener("click", function(){
	if (video.muted) {
		video.muted = false;
		this.innerText = "Mute";
		console.log("Unmute");
	}
	else { 

		video.muted = true;
		this.innerText = "Unmute";
		console.log("Mute");
	}
}); 


const volumeSlider = document.getElementById("slider"); 
volumeSlider.addEventListener("input", function(){
	video.volume = this.value/100;
	updateVolumeInfo();
	console.log("The current value is "+ video.volume)

}); 

function updateVolumeInfo() {
	document.getElementById("volume").innerText = Math.round(video.volume * 100) + "%"; 
}


document.getElementById("vintage").addEventListener("click", function(){
	video.classList.add("oldSchool");

}); 

document.getElementById("orig").addEventListener("click", function() { 
	video.classList.remove("oldSchool");
}); 



