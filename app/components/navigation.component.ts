import {Component} from 'angular2/core';

@Component({
  selector:"navigation",
  template:`
            <nav class="navbar navbar-default">
            <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="#">{{appName}}</a>
          </div>
            <ul class="nav navbar-nav">
                <li *ngFor="#link of links"><a href="{{link.path}}">{{link.title}}</a></li>
            </ul>
            </nav>`
})

export class NavigationComponent {


  title: string = "Awesome Angular";

  appName = "angular2-workshop";

  links = [{'title':'Home','path':'/'},{'title':'About','path':'/about'}];

  constructor(){

  }



}
