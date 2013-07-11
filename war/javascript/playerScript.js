							// 1. init
							// The JS file control the player's behaviors, and also draw the progress bar. You can modify the code in the JS file to adjust the drawing.
                            var progress;
                            progress = document.getElementById("videoProgress");
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
					    	var videoDuration, durationQuarter = 0;
					    	var currentDurationRate = 0.1;
					    	function onPlayerReady(event) {
					    		event.target.playVideo();
					    		videoDuration = player.getDuration();
					     	}					      
						      // 5. The API calls this function when the player's state changes.
						      //    The function indicates that when playing a video (state=1),
						      //    the player should play for six seconds and then stop.
						      // var done = false;
						    function onPlayerStateChange(event){
						    	if (player.getPlayerState() == 2 || player.getPlayerState() == 0) { // when video is paused or ended record 
						    		if( durationQuarter < currentDurationRate){						//the duration rate in durationQuarter
						    			durationQuarter = currentDurationRate; 						//player.getCurrentTime() / videoDuration;
							    	}
							    }
							    // the following prototyping code change the picture of the left control depending on the duration rate.
							    // The future will query the server to get the user's learning progress table and show the picture.
							    if(durationQuarter > 0.9){
							   		progress.value = 100;
							   		document.JH_math1_1_1.src = "./image/main/progSet/prog4.png";
							   	}
						      	else if(durationQuarter > 0.75){
						      		progress.value = 75;
						      		document.JH_math1_1_1.src = "./image/main/progSet/prog3.png";
								}
						      	else if(durationQuarter > 0.5){
						      		progress.value = 50;
						      		document.JH_math1_1_1.src ="./image/main/progSet/prog2.png";
						      	}
						      	else if(durationQuarter > 0.25){
							  		progress.value = 25;
							  		document.JH_math1_1_1.src ="./image/main/progSet/prog1.png";
						      	}
						      	else{
						      		progress.value = 0;
						      		document.JH_math1_1_1.src ="./image/main/progSet/prog0.png";
						   		}
						   		currentDurationRate = player.getCurrentTime() / videoDuration;

						    }
