define(function(require) {
  var BaseView = require('view/baseView');
  var $ = require('jquery');
  var _ = require('underscore');
  var testModel = require('model/baseMode');
  var Backbone = require('backbone');
  
  var TestService=require('service/testService');
  
  var ItemView=Backbone.View.extend({
  	el:'<div>itemView test add</div>'
  });
  
  var testView = BaseView.extend({
  id:'testView',
  el:$('#content'),
  model:new testModel(),
  templete:require('text!../../templete/view/test.html'),
  events:{
  	'click #button':'changeView' 
  },
  initialize : function() {
    console.log('123123');
    BaseView.prototype.initialize.apply(this,arguments);
  },
  changeView:function(){
  	var SettingsView=require('view/settingsView');
  	new SettingsView().render();
  },
  render:function(){
   // this.model.fetch().then(function(response,a){
   	// $(this.el).html(_.template(this.templete, this.model.attributes));
   // }.bind(this));
   var item=new ItemView();
   var testService=new TestService({name:123});
    $(this.el).html(_.template(this.templete, this.model.attributes));
    $(this.el).append(item.$el);
    return BaseView.prototype.render.apply(this, arguments);
  }
});
return testView;
});
