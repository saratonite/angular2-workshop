import {Component} from 'angular2/core';
import {NavigationComponent} from './components/navigation.component'
@Component({
    selector: 'my-app',
    template: '<div><h1>Hello {{name}}</h1><navigation></navigation></div>',
    directives:[NavigationComponent]
})

export class AppComponent {

	constructor(){
		this.name = "World"
	}
 }
