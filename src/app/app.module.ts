import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { appRoutingProviders, routing } from './app.routing';

import { AppComponent } from './app.component';
import { MenuComponent } from './shared/menu/menu.component';

import { AdminComponent } from './components/admin/admin.component';
import { CentrosAdminComponent } from './components/admin/centros-admin/centros-admin.component';
import { TechridersAdminComponent } from './components/admin/techriders-admin/techriders-admin.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/public/home/home.component';
import { PublicComponent } from './components/public/public.component';
import { ProfesorSigninComponent } from './components/signin/profesor-signin/profesor-signin.component';
import { TechriderSigninComponent } from './components/signin/techrider-signin/techrider-signin.component';
import { EmpresaSigninComponent } from './components/signin/empresa-signin/empresa-signin.component';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';
import { SidebarModule } from 'primeng/sidebar';
import { TooltipModule } from 'primeng/tooltip';
import { SesionService } from './services/sesion.service';

@NgModule({
  declarations: [
    AppComponent,
    PublicComponent,
    AdminComponent,
    LoginComponent,
    HomeComponent,
    MenuComponent,
    CentrosAdminComponent,
    TechridersAdminComponent,
    ProfesorSigninComponent,
    TechriderSigninComponent,
    EmpresaSigninComponent,
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MenubarModule,
    InputTextModule,
    TooltipModule,
    ButtonModule,
    CardModule,
    SidebarModule,
  ],
  providers: [appRoutingProviders,SesionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
