import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CreateNoteComponent } from './create-note/create-note.component';
import { HomeComponent } from './home/home.component';
import { InitiateNoteComponent } from './initiate-note/initiate-note.component';
import { AssetReqComponent } from './asset/asset-req/asset-req.component';
import { ProfileComponent } from './profile/profile.component';
import { HeaderComponent } from './header/header.component';
import { HardsoftComponent } from './request/hardsoft/hardsoft.component';
import { CancelComponent } from './request/cancel/cancel.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'create', component: InitiateNoteComponent },
  { path: 'home', component: HomeComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'assetreq', component: AssetReqComponent },
  { path: 'new-request', component: HeaderComponent },
  { path: 'hardsof', component: HardsoftComponent},
  { path: 'cancel', component: CancelComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule {}
