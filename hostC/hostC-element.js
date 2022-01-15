import {PolymerElement,html} from '@polymer/polymer/polymer-element.js';
import '../childrenC/child1C/child1C-element.js';

class hostC extends PolymerElement{static get template(){return (html`<style></style><h1>This is hostC </h1> <div><h2>The host presents child 1 of c</h2><br /><child1-c></child1-c></div><hr/>`);}}

customElement.define('element-c',hostC);