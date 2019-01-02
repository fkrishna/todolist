import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { AppComponent } from '../app.component';

@NgModule({
  imports: [ RouterModule.forRoot([
    { path: 'all', component: AppComponent},
    { path: 'active', component: AppComponent},
    { path: 'completed', component: AppComponent},
    { path: '**', redirectTo: '/all' },
  ])],
  exports: [ RouterModule ]  
})
export class AppRoutingModule { }
