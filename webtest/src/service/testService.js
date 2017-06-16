define(function(require) {
  var BaseService=require('service/baseService');
  var testService=BaseService.extend({

    constructor :function(options){
    	BaseService.apply(this, arguments);
    }
  });
  return testService;
});
