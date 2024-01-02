import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.css']
})
export class PublicComponent implements OnInit {
  items: MenuItem[];
  isLoged:boolean=true;

  constructor() {
    var linkUsuarios:MenuItem={
      label: 'Usuarios',
      routerLink:'/login',
    };
    if (this.isLoged===true) {
      linkUsuarios={
        label: 'Usuarios',
        items:[
          {
            label:'Link1',
            routerLink:'',
          },
          {
            label:'Link2',
            routerLink:'',
          },
          {
            label:'Cerrar sesión',
            routerLink:'',
            command:()=> this.cerrarSesion(),
          },
        ]
      };
    }else{

    }

    this.items = [
      linkUsuarios,
      {
        label:'Charlas técnicas',
        items:[
          {
            label:'Tipos',
          },
          {
            label:'Participa',
            items:[
              {
                label:'TechRiders'
              },
              {
                label:'Empresas'
              },
              {
                label:'Centros Formadores'
              },
            ]
          },
          {
            label:'Calendario 23-24'
          },
        ]
      },
      {
        label:'Tutoriales',
        items:[
          {
            label:'Post'
          },
          {
            label:'Vídeos'
          },
        ]
      },
      {
        label:'Quienes somos',
        items:[
          {
            label:'Orígenes'
          },
          {
            label:'Staff'
          },
          {
            label:'Young Riders'
          },
          {
            label:'Premios 2023'
          },
          {
            label:'Charlas 2022-2023'
          },
        ]
      },
      {
        label:'Contacto',
      },
    ];
  }

  ngOnInit(): void {

  }

  cerrarSesion():void{
    console.log("Código para cerrar sesión");
  }
}


