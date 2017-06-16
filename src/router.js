define(['backbone'],function(Backbone) {
  var Router = Backbone.Router.extend({
    // Define routes
    routes : {
      "" : "defaultRoute",
      "settings":"settings"
    },
    // Initialize router
    init : function() {
      Backbone.history.start();
    },
    settings:function(){
      require(['view/settingsView'],function(settingsView){
      	var settingsView=new settingsView();
      	settingsView.render();
      });    	
    },
    defaultRoute : function() {
      console.log('xuchenjie');
      require(['view/testView'],function(testView){
      	var testView=new testView();
      	testView.render();
      });
    }
  });
  return new Router;
});
