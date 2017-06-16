define(function(require) {
  var Backbone=require('backbone');
  return Backbone.View.extend({
    // Define routes

    // Initialize router
    initialize : function() {
      console.log('init view');
    },
    render:function(){
    	console.log('init render');
    }
  });
});
