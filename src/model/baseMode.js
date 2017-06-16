define(['backbone'], function(Backbone) {
  var testMode = Backbone.Model.extend({
    // Define routes
    defaults : {
      name : 'loading...............',
      data:''
    },
    url:'http://43.82.154.60:20160/sony/system',

    fetch:function(){
      return Backbone.Model.prototype.fetch.call(this,{
       async:true,
       type:'POST',
       data:JSON.stringify({
	      id:17,
	      method:"getSettingsTree",
	      params:[{usage: ""}],
	      version:"1.1"     		
       })      	
      });
    },
    parse : function(response,a) {
      this.set('name','');
      this.set('data',response.result[0].settings);
    }
  });
  return testMode;
});
