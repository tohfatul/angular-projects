import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-app';
  public name = 'Tohfatul';
  public message='';
  greeting:string='';

  userName='';
  
  onGreetingClicked(eventData:Event){
    console.log(eventData);
    this.greeting='welcome to code evolution';
  }

}
