import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  @Input() items!: MenuItem[];
  @Input() imagen!: string;
  @Input() linkImagen!: string;

  constructor() {
  }

  ngOnInit(): void {
  }
}
