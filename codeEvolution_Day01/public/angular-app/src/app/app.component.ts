import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h2 [class]="textSuccess">welcome {{name}}</h2>
  <h3 class="text-success">{{getGreetings()}}</h3>
  <input type="text" [id]="myId" value="NoValue"/>
  <input type="text" [disabled]="isDisabled" value="Kuddus"/>
  <h4 [class.text-danger]="hasError">Conditionally applied class</h4>
  <h1 [ngClass]="messageClasses">Multiple class applied based on condition</h1>
  <h2 [style.color]="hasError ? 'red' : 'orange'">another h2 element</h2>
  <input #myInput type="text"/>
  <button (click)=logMessage(myInput.value)>Log</button>`,
  styles: [`
    .text-success {
      color:green;
    }
    .text-danger {
      color: red;
    }
    .text-special {
      font-style: italic;
    }
  `]
})
export class AppComponent {
  title = 'angular-app';
  public name='Tohfatul';
  public myId = 'testId';
  public isDisabled=false;
  public hasError=false;
  public isSpecial=true;

  public messageClasses = {
    'text-success': !this.hasError,
    'text-danger': this.hasError,
    'text-special': this.isSpecial
  }
  public textSuccess = 'text-success';

  getGreetings(){
    return 'Welcome ' + this.name;
  }
  logMessage(incomingText:string){
    console.log(incomingText);
  }
}
