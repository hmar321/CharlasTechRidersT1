import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { LoginComponent } from "./components/login/login.component";
import { AdminComponent } from "./components/admin/admin.component";
import { SigninComponent } from "./components/signin/signin.component";
import { PublicComponent } from "./components/public/public.component";
import { HomeComponent } from "./components/public/home/home.component";
import { CentrosAdminComponent } from "./components/admin/centros-admin/centros-admin.component";
import { TechridersAdminComponent } from "./components/admin/techriders-admin/techriders-admin.component";

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
        path: "signin", component: SigninComponent,
    },
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(rutas);