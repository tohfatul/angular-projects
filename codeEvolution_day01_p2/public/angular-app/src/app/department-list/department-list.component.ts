import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit{


  departments=[
    {"id": 1, "name": "Angular"},
    {"id": 2, "name": "Node"},
    {"id": 3, "name": "MongoDB"},
    {"id": 4, "name": "Ruby"},
    {"id": 5, "name": "Bootstrap"}
  ]

  constructor(private _router:Router, private _route: ActivatedRoute){}

  ngOnInit(): void {
    
  }

  onItemClick(itemId:number){
     this._router.navigate(['/departments', itemId]);
    // this._router.navigate([itemId], {relativeTo:this._route}); //relative route
  }
}
