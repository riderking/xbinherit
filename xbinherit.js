var xbClass = function () {}
xbClass.prototype.ctor=function(){}
xbClass.prototype.className="xbClass";
xbClass.extend = function (props,baseClass) {
	if(!baseClass){
		baseClass=xbClass;
	}
	if(!props["ctor"]){
		props["ctor"] = function(){
			baseClass.prototype["ctor"].apply(this,arguments);
		}
	}
	props["ctor"].prototype=props;
    	for (var k in baseClass.prototype) {
		if(!props["ctor"].prototype[k])
			props["ctor"].prototype[k]=baseClass.prototype[k];
		else if(typeof(baseClass.prototype[k])=="function")
			props["ctor"].prototype[baseClass.prototype.className+"$"+k] = baseClass.prototype[k];
    	}
	props["ctor"].extend=function(newprops){
		return xbClass.extend(newprops,props["ctor"]);
	};
	return props["ctor"];
}
if(module && module.exports)module.exports=xbClass;
