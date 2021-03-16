import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { RegistroComponent } from "./registro/registro.component";

const appRoutes = [
  { path: "", component: AppComponent, pathMatch: "full" },
  { path: "login", component: LoginComponent, pathMatch: "full" },
  { path: "registro", component: RegistroComponent, pathMatch: "full" }
];
export const routing = RouterModule.forRoot(appRoutes);
const routes: Routes = [];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }