define(function(require) {
  var Base=require('commcomponent/extend');
  return Base.extend({
    execute : function() {
      console.log('service execute');
    }
  });
});
