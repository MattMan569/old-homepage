import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'examples', loadChildren: () => import('./examples/examples.module').then(m => m.ExamplesModule) },
  { path: 'resume', loadChildren: () => import('./resume/resume.module').then(m => m.ResumeModule) },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
