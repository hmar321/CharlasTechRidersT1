import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  items: MenuItem[];
  constructor() { 
    this.items=[
      {
        label:"Centros",
        routerLink:'/admin',
      },
      {
        label:"TechRiders",
        routerLink:'techriders',
      },
      {
        label:"Cerrar sesión",
        command:()=>this.cerrarSesion(),
      },
    ];
  }

  ngOnInit() {
  }

  cerrarSesion():void{

  }
}
