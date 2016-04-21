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

var ClsB=ClsA.extend({<br/>
	className:"ClsB",<br/>
	ctor: function () {<br/>
		this.ClsA$ctor();<br/>
    },<br/>
    methodA: function (args) {<br/>
		this.ClsA$methodA(args);<br/>
    }<br/>
});<br/>

<br/>
var ClsC=ClsB.extend({<br/>
 	className:"ClsC",<br/>
	ctor: function ( ) {<br/>
		this.ClsB$ctor();<br/>
<br/>
    methodA: function (args) {<br/>
		this.ClsB$methodA(args);<br/>
    }<br/>
});<br/>
<br/>

var a = new ClsA("xx");<br/>
a.methodA("aa");

var b = new ClsB("11","22");<br/>
b.methodA("cc");

var c = new ClsC("11","22");<br/>
c.methodA("cc");
