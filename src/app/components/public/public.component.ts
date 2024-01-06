import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { SesionService } from 'src/app/services/sesion.service';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.css']
})
export class PublicComponent implements OnInit {
  items: MenuItem[];
  isLoged: boolean = false;

  constructor(
    private _sesionService: SesionService
  ) {
    var linkUsuarios: MenuItem = {
      label: 'Usuarios',
      items:[
        {
          label: 'Login',
          routerLink:'login'
        },
        {
          label: 'Registrarse',
          items:[
            {
              label:'Profesor',
              routerLink:'signin/profesor',
            },
            {
              label:'TechRider',
              routerLink:'signin/techrider',
            },
            {
              label:'Empresa',
              routerLink:'signin/empresa',
            },
          ]
        }
      ],
    };
    var token = localStorage.getItem("token");
    if (token != null) {
      linkUsuarios = {
        label: 'Usuarios',
        items: [
          {
            label: 'Link1',
            routerLink: '',
          },
          {
            label: 'Link2',
            routerLink: '',
          },
          {
            label: 'Cerrar sesión',
            routerLink: '',
            command: () => this.cerrarSesion(),
          },
        ]
      };
    }

    this.items = [
      linkUsuarios,
      {
        label: 'Charlas técnicas',
        items: [
          {
            label: 'Tipos',
          },
          {
            label: 'Participa',
            items: [
              {
                label: 'TechRiders'
              },
              {
                label: 'Empresas'
              },
              {
                label: 'Centros Formadores'
              },
            ]
          },
          {
            label: 'Calendario 23-24'
          },
        ]
      },
      {
        label: 'Tutoriales',
        items: [
          {
            label: 'Post'
          },
          {
            label: 'Vídeos'
          },
        ]
      },
      {
        label: 'Quienes somos',
        items: [
          {
            label: 'Orígenes'
          },
          {
            label: 'Staff'
          },
          {
            label: 'Young Riders'
          },
          {
            label: 'Premios 2023'
          },
          {
            label: 'Charlas 2022-2023'
          },
        ]
      },
      {
        label: 'Contacto',
      },
    ];
  }

  ngOnInit(): void {

  }

  cerrarSesion(): void {
    this._sesionService.cerrarSesion();
    this.items[0] = {
      label: 'Usuarios',
      routerLink: '/login',
    };
  }
}


