							// 1. init
							// The JS file control the player's behaviors, and also draw the progress bar. You can modify the code in the JS file to adjust the drawing.
							var progress = document.getElementById("videoProgress");
					    	// 2. This code loads the IFrame Player API code asynchronously.
					    	var tag = document.createElement('script');
					      	tag.src = "https://www.youtube.com/iframe_api";
					      	var firstScriptTag = document.getElementsByTagName('script')[0];
					      	firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

					      	// 3. This function creates an <iframe> (and YouTube player)
					      	//    after the API code downloads.
					      	var player;
					      	function onYouTubeIframeAPIReady() {
					      		player = new YT.Player('player', {
					        	height: '450',
					          	width: '800',
					          	videoId: '7e9Kg8cv08Y',
					          	events: {
					            	'onReady': onPlayerReady,
					            	'onStateChange': onPlayerStateChange
					          	}
					        	});
					      	}
					      
					      	// 4. The API will call this function when the video player is ready.
					    	var videoDuration, durationQuater = 0;
					    	function onPlayerReady(event) {
					    		event.target.playVideo();
					    		videoDuration = player.getDuration();
					     	}					      
						      // 5. The API calls this function when the player's state changes.
						      //    The function indicates that when playing a video (state=1),
						      //    the player should play for six seconds and then stop.
						      // var done = false;
						    function onPlayerStateChange(event){
						    	if (player.getPlayerState() == 2) { // when video is pausing record the duration rate in duration quater
						    		durationQuater = player.getCurrentTime() / videoDuration;
						    	}
						    	drawTheProgress();
						    }
					      // function rtnDuration() {
					      //   var videoDur = player.getDuration();
					      //   alert("Duration is :" + videoDur);
					      // }
					      	function drawTheProgress(){
					      		var a = durationQuater;
					      		if(a > 0.9)
					      			progress.value = 100;
					      		else if(a > 0.75)
					      			progress.value = 75;
					      		else if(a > 0.5)
					      			progress.value = 50;
					      		else if(a > 0.25)
					      			progress.value = 25;
					      		else
					      			progress.value = 0;
					      	}					      
