import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-department-detail',
  templateUrl: './department-detail.component.html',
  styleUrls: ['./department-detail.component.css']
})
export class DepartmentDetailComponent implements OnInit{

  departmentId!:string | null;
  previousId!:number | null;
  nextId!:number | null;
  constructor(private _route:ActivatedRoute, private router: Router){}
  ngOnInit(): void {
    // this.departmentId = this._route.snapshot.paramMap.get('id') ;
    this._route.paramMap.subscribe((params:ParamMap)=> this.departmentId = params.get('id'));
  }


  goPrevious(){
    this.previousId = this.departmentId ? parseInt(this.departmentId)-1 : null;
     this.router.navigate(['/departments', this.previousId]);
    // this.router.navigate([this.previousId], {relativeTo:this._route});
    
  }

  goNext(){
    this.nextId = this.departmentId ? parseInt(this.departmentId)+1 : null;
     this.router.navigate(['/departments', this.nextId]);
    // this.router.navigate([this.nextId], {relativeTo:this._route}); //relative navigation
  }

  gotoDepartments(){
    let selectedId = this.departmentId? this.departmentId : null;
    // this.router.navigate(['/departments', {id: selectedId}]);
    this.router.navigate(['../', {id: selectedId}], {relativeTo:this._route});

  }

  onOverviewClick(){
    this.router.navigate(['overview'], {relativeTo:this._route});
  }

  onContactClick(){
    this.router.navigate(['contact'], {relativeTo:this._route});
  }
}
