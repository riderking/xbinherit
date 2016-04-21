# xbinherit
  This is a smallest and easy debug javascirpt inherits implementation.
  
# exapmle
  var ClsA = xbClass.extend({
	className:"ClsA",
	propA: 11,
    methodA: function (args) {
		this.propA=args;
    }
});

var ClsB=ClsA.extend({
	className:"ClsB",
	ctor: function () {
		this.ClsA$ctor();
    },
    methodA: function (args) {
		this.ClsA$methodA(args);
    }
});


var ClsC=ClsB.extend({
 		className:"ClsC",
	ctor: function ( ) {
		this.ClsB$ctor();
    },
    methodA: function (args) {
		this.ClsB$methodA(args);
    }
});


var a = new ClsA("xx");
a.methodA("aa");

var b = new ClsB("11","22");
b.methodA("cc");

var c = new ClsC("11","22");
c.methodA("cc");
