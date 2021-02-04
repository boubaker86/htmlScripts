var gameId = "4000287";
var videoAdPlacementId = "video";
var rewardedVideoAdPlacementId = "rewardedVideo";
var bannerAdPlacementId = "banner";
var isTest = true;
var isDebug = true;
var bannerPosition = "TOP_CENTER";



function initApp() {
	// Initialize UnityAds
	cordova.plugins.UnityAds3.UnityAdsInit(gameId, isTest, isDebug, function callback(error, result){
            
            if(error){
                console.log(error);
            }
            else{
                console.log(result);
            }

        });
	
	function showVideoAd()	{
		// Rewarded Video Ads
		cordova.plugins.UnityAds3.ShowVideoAd(videoAdPlacementId, function callback(error, result){
			if(error){
				console.log(error);
			}
			else{
				console.log(result);
			}
		});
	}
	
	function showRewardedAd()	{
		// Video Ads
		cordova.plugins.UnityAds3.ShowVideoAd(rewardedVideoAdPlacementId, function callback(error, result){
			if(error){
				console.log(error);
			}
			else{
				console.log(result);
			}
		});
		
	}
	
	function showBanner(){
		//Banner Ads
		cordova.plugins.UnityAds3.ShowBannerAd(bannerAdPlacementId, bannerPosition, function callback(error, result){
			if(error){
				console.log(error);
				setTimeout(function(){showBanner();},20000);
			}
			else{
				console.log(result);
			}
		});
	}
	showBanner();
	setTimeout(function(){showVideoAd();},5000);
    	// setInterval(function(){ showVideoAd();}, 20000);

}


  


if(( /(ipad|iphone|ipod|android|windows phone)/i.test(navigator.userAgent) )) {
    document.addEventListener('deviceready', initApp, false);
} else {
    initApp();
}

// Exit event for backbutton on android
document.addEventListener("backbutton", function(e){
	e.preventDefault();
	navigator.app.exitApp();
}
, false);
