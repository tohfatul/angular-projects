import { Component, OnInit } from '@angular/core';
import { User } from 'models/User';
import { EnrollmentService } from './enrollment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  topics=['Angular', 'React', 'Vue'];

  userModel:User = new User('Rob', 'rob@test.com', 5556665566, 'default', 'morning', true);

  topicHasError=true;

  constructor(private _enrollmentService: EnrollmentService){}

  ngOnInit(): void {
    
  }

  validateTopic(val:string){

    if(val==='default'){
      this.topicHasError=true;

    }else{
      this.topicHasError=false;
    }
  }

  onSubmit(){
    this._enrollmentService.enroll(this.userModel)
    .subscribe(
      data=> console.log('success!', data),
      error=> console.log('error', error)
      
    )
  }
}
