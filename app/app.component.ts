import {Component} from 'angular2/core';
import {NavigationComponent} from './components/navigation.component'
import {PageComponent} from './components/page.component'
@Component({
    selector: 'my-app',
    template: `<div>
      <navigation></navigation>
      <page></page>
      </div>`,
    directives:[NavigationComponent,PageComponent]
})

export class AppComponent {

	constructor(){
		this.name = "World"
	}
 }
