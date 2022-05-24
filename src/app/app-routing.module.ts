import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelpMeComponent } from './modules/help-me/help-me.component';
import { HomeComponent } from './modules/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  { path: 'Home', component: HomeComponent },
  { path: 'helpMeNow', component: HelpMeComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
