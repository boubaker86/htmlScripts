var admobid = {};
var showads = false;
var timing = 20;

// TODO: replace the following ad units with your own
  admobid = { // for iOS
    banner: 'ca-app-pub-3940256099942544/6300978111',
    interstitial: 'ca-app-pub-3940256099942544/1033173712',
  };

function initApp() {
  if (!admob ) { alert( 'admob plugin not ready' ); return; }
  
  
  function firstShowAd() {
	  if (showads){
		if(admob) admob.interstitial.config( {id:admobid.interstitial, autoShow:true} );
		admob.interstitial.prepare();
		if(admob) admob.interstitial.show();
	  }
  }


  // Second interstitial show every 90 seconds

	setTimeout(function(){showads = true;}, 90000);
    setInterval(function(){ firstShowAd();}, timing * 1000);

}


if(( /(ipad|iphone|ipod|android|windows phone)/i.test(navigator.userAgent) )) {
    document.addEventListener('deviceready', initApp, false);
} else {
    initApp();
}
