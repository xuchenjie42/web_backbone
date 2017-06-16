define(function(require) {
  var BaseView = require('view/baseView');
  var $ = require('jquery');
  var _ = require('underscore');
  var testModel = require('model/baseMode');
  var Backbone = require('backbone');
  
  var TestService=require('service/testService');
  
  var testView = BaseView.extend({
  el:$('#content'),
  model:new testModel(),
  templete:require('text!../../templete/view/test.html'),
  initialize : function() {
    console.log('123123');
    BaseView.prototype.initialize.apply(this,arguments);
  },
  render:function(){
   // this.model.fetch().then(function(response,a){
   	// $(this.el).html(_.template(this.templete, this.model.attributes));
   // }.bind(this));
   var testService=new TestService({name:123});
   testService.initialize();
    $(this.el).html(_.template(this.templete, this.model.attributes));
    BaseView.prototype.render.apply(this, arguments);
  }
});
return testView;
});
