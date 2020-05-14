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
import { MyAssetsComponent } from './my-assets/my-assets.component';
import { CreatecrComponent } from './change-request/createcr/createcr.component';
import { UatComponent } from './change-request/uat/uat.component';
import { WorkflowComponent } from './workflow/workflow.component';
import { AuthGuard } from './auth.guard';
import { TextEditorComponent } from './text-editor/text-editor.component';
import { SubmitUatComponent } from './submit-uat/submit-uat.component';
import { SharedfolderAccessComponent } from './sharedfolder-access/sharedfolder-access.component';
import { AdminComponent } from './admin/admin.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'create', component: InitiateNoteComponent },
  { path: 'home', component: HomeComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'assetreq', component: AssetReqComponent },
  { path: 'new-request', component: HeaderComponent },
  { path: 'hardsof', component: HardsoftComponent },
  { path: 'cancel', component: CancelComponent },
  { path: 'my-assets', component: MyAssetsComponent },
  //{ path: 'my-assets', component: MyAssetsComponent, canActivate: [AuthGuard] },
  { path: 'create-cr', component: CreatecrComponent },
  { path: "uat", component:UatComponent },
  { path: "workflow", component: WorkflowComponent },
  { path: 'text-editor', component: TextEditorComponent },
  { path: 'uat-submit', component: SubmitUatComponent },
  { path: 'admin', component: AdminComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule {}
