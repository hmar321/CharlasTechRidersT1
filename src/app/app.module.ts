import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { appRoutingProviders, routing } from './app.routing';

import { AppComponent } from './app.component';
import { MenuComponent } from './shared/menu/menu.component';

import { PublicComponent } from './components/public/public.component';
import { AdminComponent } from './components/admin/admin.component';
import { LoginComponent } from './components/login/login.component';
import { SigninComponent } from './components/signin/signin.component';
import { HomeComponent } from './components/public/home/home.component';
import { CentrosAdminComponent } from './components/admin/centros-admin/centros-admin.component';
import { TechridersAdminComponent } from './components/admin/techriders-admin/techriders-admin.component';

import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { TooltipModule } from 'primeng/tooltip';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { SidebarModule } from 'primeng/sidebar';

@NgModule({
  declarations: [
    AppComponent,
    PublicComponent,
    AdminComponent,
    LoginComponent,
    SigninComponent,
    HomeComponent,
    MenuComponent,
    CentrosAdminComponent,
    TechridersAdminComponent,
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
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
