import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home-component/home-component';
import { CreateComponent } from './components/create-component/create-component';
import { DeleteComponent } from './components/delete-component/delete-component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "create", component: CreateComponent },
  { path: "delete/:id", component: DeleteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
