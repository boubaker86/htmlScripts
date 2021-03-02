var admobid = {};
var showads = false;
var isTest = true;
var adloaded = false;
var adsType="";
var firstTime = 30000;
var secondTime = 30000;

// TODO: replace the following ad units with your own
admobid = { // for iOS
  banner: 'ca-app-pub-3940256099942544/6300978111',
  interstitial: 'ca-app-pub-3940256099942544/1033173712',
};

function showBanner() {
    admob.banner.config({
      id: admobid.banner,
      autoShow: true,
      bannerAtTop: true,
      isTesting: true
     })
  admob.banner.prepare();
}


function prepareInter() {
    if (admob) {
      admob.interstitial.config({ id: admobid.interstitial, autoShow: false });
      admob.interstitial.prepare();
    }
  }

function showInter() {
    if (admob) admob.interstitial.show();
  }
    
function initApp() {
  //if (!admob) { alert('admob plugin not ready'); return; }
     // Create banner
     
     loadEvents();
  }





  function ShowAdTiming() {
    if (showads) {
      //if (admob) admob.interstitial.config({ id: admobid.interstitial, autoShow: true });
      //admob.interstitial.prepare();
      if (admob) admob.interstitial.show();
      showads = false;
    }
  }
function loadEvents(){
  document.addEventListener('admob.banner.events.LOAD_FAIL', function(event) {
    console.log(event);
  })
  
  document.addEventListener('admob.interstitial.events.LOAD_FAIL', function(event) {
    adloaded = false;
    setTimeout(function () { prepareInter(); }, 5000);
    console.log(event);
  })

  document.addEventListener('admob.interstitial.events.LOAD', function(event) {
    console.log(event);
    //if (!adloaded) setTimeout(function () { prepareInter(); }, 5000);
    adloaded = true;
  })
  
  document.addEventListener('admob.interstitial.events.CLOSE', function(event) {
    console.log(event);
    //admob.interstitial.prepare();
    showads = true;
    prepareInter();
  })
}
  
  // Second interstitial show every 90 seconds
  function startTimedAds(){
      adsType = "time";
      prepareInter();
      setTimeout(function () { showads = true; }, firstTime);
      setInterval(function () { ShowAdTiming(); }, secondTime);
      
  }





if ((/(ipad|iphone|ipod|android|windows phone)/i.test(navigator.userAgent))) {
  document.addEventListener('deviceready', initApp, false);
} else {
  initApp();
}
