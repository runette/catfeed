import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CfaMainComponent } from './cfa-main/cfa-main.component';
import { CfaSettingsComponent } from './cfa-settings/cfa-settings.component';

const routes: Routes = [
  { path: 'main', component: CfaMainComponent },
  { path: 'settings', component: CfaSettingsComponent },
  { path: '', redirectTo: '/main', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
