define(function() {
  var ViewManage = function() {
  	this.views=[];
  };
  ViewManage.prototype={
  	addView:function(view){
  		this.views.push(view);
  	},
  	popView:function(){
  		this.views.pop();
  		var length=this.views.length;
  		if(length> 0){
  			this.views[length-1].render();
  		}
  	},
  	getTopView:function(){
  		var views=this.views;
  		if(view.length > 0){
  			return views[view.length-1];
  		} else {
  			return null;
  		}
  	}
  	
  };
  return ViewManage;

});
