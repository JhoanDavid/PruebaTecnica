import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateBookComponent } from './create-book/create-book.component'
import { ConsultBookComponent } from './consult-book/consult-book.component'

const routes: Routes = [
  { path: 'createbook', component: CreateBookComponent },
  { path: 'consultbook', component: ConsultBookComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
