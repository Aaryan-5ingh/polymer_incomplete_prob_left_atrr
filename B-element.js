import {PolymerElement,html} from '@polymer/polymer/polymer-element.js';
class hostB extends PolymerElement{
	static get template(){
		return( html`
			<style>*{background:lightgray;} :host::after{content:"HI I AM AFTER."; color:blue;}h1[title="hello"]{text-decoration:underline;}#mum::before{content:"a boolean prop: ";font-weight:899;}#mum{color:green;}/* :host[attr-prop1="color pink with orange border"]{color:pink; border:5px solid orange; padding:2px;marigin:5px;box-sizing:border-box;} NOT WORKING*/</style><h3>hello from element B</h3><h5>why is background color no working?It will work with * and not :host. Because A is the host and B is not.</h5>
		<!--<element-c attr1=[[attrProp1]]></element-c> in the A/A-element,js file, where the call to this element is made, make a call <element-b prop1="c-affecting-value"></element-b>.-->
		<h1>😝 😜 🤪😝 😜 🤪[[attrProp1]] <span id="mum">[[notifyBondage1]] </span>😝 😜 🤪😝 😜 🤪</h1>
	<h1>This is withoug notify bondage1 attribute. </h1>
	<h1 title="hello">hello world</h1>
			` );
	}
	static get properties(){return({ attrProp1:{type:String},notifyBondage1:{type:Boolean,value:false,notify:true,reflectToAttribute:true}});}
	constructor(){super();this.addEventListener('click',this.toggle.bind(this));}
	toggle(){alert("toggliing this.notifyBondage1, which is somehow accessable from inside the properties getter.");this.notifyBondage1=!this.notifyBondage1;}
}
customElements.define('element-b',hostB);