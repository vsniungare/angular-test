import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { CasesComponent } from './components/cases/cases.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cases', component: CasesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
