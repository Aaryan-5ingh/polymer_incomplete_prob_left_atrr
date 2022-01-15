import {PolymerElement,html} from "@polymer/polymer/polymer-element.js";
import '../B-element.js';

class hostA extends PolymerElement{
	static get template(){return(
		html`<style>:host{color:red;} element-b{color:brown;}/*element-b[notifyBondage1="false"]{color:green;}*/element-b[attr-prop1="color pink with orange border"]{color:darkpink; border:5px solid orange; padding:2px;marigin:5px;box-sizing:border-box;</style><p>this is a paragraph in element a.</p><section><element-b></element-b></section><hr /><element-b attr-prop1="P-pose Nami San"></element-b><br /><element-b notifyBondage1></element-b><hr /><hr /><br />
<element-b attr-prop1="color pink with orange border"></element-b>`

	);}

}
customElements.define('element-a',hostA);