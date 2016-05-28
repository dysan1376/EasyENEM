document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    StatusBar.overlaysWebView(false);
    //StatusBar.hide();
    //StatusBar.backgroundColorByName("red");
    console.log(StatusBar);
}