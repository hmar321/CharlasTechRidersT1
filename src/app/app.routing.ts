import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { LoginComponent } from "./components/login/login.component";
import { AdminComponent } from "./components/admin/admin.component";
import { PublicComponent } from "./components/public/public.component";
import { HomeComponent } from "./components/public/home/home.component";
import { CentrosAdminComponent } from "./components/admin/centros-admin/centros-admin.component";
import { TechridersAdminComponent } from "./components/admin/techriders-admin/techriders-admin.component";
import { ProfesorSigninComponent } from "./components/signin/profesor-signin/profesor-signin.component";
import { TechriderSigninComponent } from "./components/signin/techrider-signin/techrider-signin.component";
import { EmpresaSigninComponent } from "./components/signin/empresa-signin/empresa-signin.component";

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
        path: "signin/profesor", component: ProfesorSigninComponent,
    },
    {
        path: "signin/techrider", component: TechriderSigninComponent,
    },
    {
        path: "signin/empresa", component: EmpresaSigninComponent,
    },
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(rutas);