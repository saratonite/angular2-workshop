import {Component} from 'angular2/core';

@Component({
  selector:"navigation",
  template:`<ul>
    <li>{{title}}</li>
    <li *ngFor="#link of links"><a href="{{link.path}}">{{link.title}}</a></li>
  </ul>`
})

export class NavigationComponent {


  title: string = "Awesome Angular";

  links = [{'title':'Home','path':'/'},{'title':'About','path':'/about'}];

  constructor(){

  }



}
