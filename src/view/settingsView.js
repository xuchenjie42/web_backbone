define(function(require) {
  var BaseView = require('view/baseView');
  var $ = require('jquery');
  var _ = require('underscore');
  var testModel = require('model/baseMode');
  var Backbone = require('backbone');
  var settingsView = BaseView.extend({
  el:$('#content'),
  model:new testModel(),
  templete:require('text!../../templete/view/test.html'),
  initialize : function() {
    BaseView.prototype.initialize.apply(this,arguments);
  },
  render:function(){
    $(this.el).html(_.template(this.templete, {name:'SettingsView',data:''}));
    BaseView.prototype.render.apply(this, arguments);
  }
});
return settingsView;
});
