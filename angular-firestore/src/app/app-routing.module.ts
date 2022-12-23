import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageWidloComponent } from './pages/page-widlo/page-widlo.component';

const routes: Routes = [
  {
    path: 'widlo',
    component: PageWidloComponent
  },
  {
    path: '',
    redirectTo: 'widlo',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
