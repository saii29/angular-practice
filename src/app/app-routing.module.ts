import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { basics } from './basics/basics.route';

// const routes: Routes = [basics];

@NgModule({
  imports: [RouterModule.forRoot(basics)],
  exports: [RouterModule]
})
export class AppRoutingModule { }