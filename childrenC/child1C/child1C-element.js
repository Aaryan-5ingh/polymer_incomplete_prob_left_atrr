import {PolymerElement,html} from '@polymer/polymer/polymer-element.js';
class child1C extends PolymerElement{static get template(){return(html`<style></style><h3>This is child 1 of element c host</h3>`);} contructor(){super();}}

customElements.define('child1-c',child1C);