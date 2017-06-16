require.config({
	    // baseUrl:"/",
	    paths: {
        // Core modules
        "jquery": "/lib/jquery-3.1.0",
        "underscore":"/lib/underscore",
        "backbone": "/lib/backbone",
        "text": "/lib/text",
       
        "app":"app"
      },
      waitSeconds: 0
	
});

require(['app'], function (App) {
	 App.init();
});