import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    template: '<h1>Hello {{name}}</h1>'
})

export class AppComponent {

	constructor(){
		this.name = "World"
	}
 }
