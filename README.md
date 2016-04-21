# xbinherit
  This is a smallest and easy debug javascirpt inherits implementation.
  
# exapmle
var ClsA = xbClass.extend({<br/>
&nbsp;&nbsp;className:"ClsA",<br/>
&nbsp;&nbsp;propA: 11,<br/>
&nbsp;&nbsp;methodA: function (args) {<br/>
&nbsp;&nbsp;&nbsp;&nbsp;this.propA=args;<br/>
&nbsp;&nbsp;}<br/>
});<br/>
<br/>
var ClsB=ClsA.extend({<br/>
&nbsp;&nbsp;className:"ClsB",<br/>
&nbsp;&nbsp;ctor: function () {<br/>
&nbsp;&nbsp;&nbsp;&nbsp;this.ClsA$ctor();<br/>
&nbsp;&nbsp;},<br/>
&nbsp;&nbsp;methodA: function (args) {<br/>
&nbsp;&nbsp;&nbsp;&nbsp;this.ClsA$methodA(args);<br/>
&nbsp;&nbsp;}<br/>
});<br/>

<br/>
var ClsC=ClsB.extend({<br/>
&nbsp;&nbsp;className:"ClsC",<br/>
&nbsp;&nbsp;ctor: function ( ) {<br/>
&nbsp;&nbsp;&nbsp;&nbsp;this.ClsB$ctor();<br/>
&nbsp;&nbsp;}<br/>
&nbsp;&nbsp;methodA: function (args) {<br/>
&nbsp;&nbsp;&nbsp;&nbsp;this.ClsB$methodA(args);<br/>
&nbsp;&nbsp;}<br/>
});<br/>
<br/>

var a = new ClsA("xx");<br/>
a.methodA("aa");

var b = new ClsB("11","22");<br/>
b.methodA("cc");

var c = new ClsC("11","22");<br/>
c.methodA("cc");
