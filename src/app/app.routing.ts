import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminComponent } from "./components/admin/admin.component";
import { CentrosAdminComponent } from "./components/admin/centros-admin/centros-admin.component";
import { TechridersAdminComponent } from "./components/admin/techriders-admin/techriders-admin.component";
import { LoginComponent } from "./components/login/login.component";
import { HomeComponent } from "./components/public/home/home.component";
import { PublicComponent } from "./components/public/public.component";
import { CentroSigninComponent } from "./components/signin/centro-signin/centro-signin.component";
import { EmpresaSigninComponent } from "./components/signin/empresa-signin/empresa-signin.component";
import { TechriderSigninComponent } from "./components/signin/techrider-signin/techrider-signin.component";

const rutas: Routes = [
    {
        path: "", component: PublicComponent,
        children: [
            {path:"",component:HomeComponent}
        ]
    },
    {
        path: "admin", component: AdminComponent,
        children: [
            {path:"",component:CentrosAdminComponent},
            {path:"techriders",component:TechridersAdminComponent},
        ]
    },
    {
        path: "login", component: LoginComponent,
    },
    {
        path: "centro-signin", component: CentroSigninComponent,
    },
    {
        path: "techrider-signin", component: TechriderSigninComponent,
    },
    {
        path: "empresa-signin", component: EmpresaSigninComponent,
    },
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(rutas);