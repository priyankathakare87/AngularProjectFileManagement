import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule, MatCardModule, MatButtonModule, MatToolbarModule, MatExpansionModule, MatMenuModule, MatDatepickerModule, MatNativeDateModule } from '@angular/material';
import { MainNavComponent } from './main-nav/main-nav.component';
import { MatTabsModule } from '@angular/material/tabs';
import { LayoutModule } from '@angular/cdk/layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { CreateNoteComponent } from './create-note/create-note.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { InitiateNoteComponent } from './initiate-note/initiate-note.component';
import { HeaderNewComponent } from './header-new/header-new.component';
import { AssetReqComponent } from './asset/asset-req/asset-req.component';
import { AssetService } from './services/asset.service';
import { LoginService } from './services/login.service';
import { FooterComponent } from './footer/footer.component';
import { ProfileComponent } from './profile/profile.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginNewComponent } from './login-new/login-new.component';
import { NotificationComponent } from './notification/notification.component';
import { HardsoftComponent } from './request/hardsoft/hardsoft.component';
import { CancelComponent } from './request/cancel/cancel.component';
import { AgGridModule } from 'ag-grid-angular';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MyAssetsComponent } from './my-assets/my-assets.component';
import { CreatecrComponent } from './change-request/createcr/createcr.component';
import { UatComponent } from './change-request/uat/uat.component';
import { WorkflowComponent } from './workflow/workflow.component';
import { MatTableModule } from '@angular/material';
import { MatDialogModule } from '@angular/material';
import { WorkFlowDialogComponent } from './workflow/workflow-dialog.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { AuthGuard } from './auth.guard';
import { SharedfolderAccessComponent } from './sharedfolder-access/sharedfolder-access.component';
import { SharedfolderComponent } from './sharedfolder/sharedfolder.component';
import { WebmailAccessComponent } from './webmail-access/webmail-access.component';
import { UsbAccessComponent } from './usb-access/usb-access.component';
import { FlexLayoutModule } from '@angular/flex-layout';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainNavComponent,
    CreateNoteComponent,
    LoginComponent,
    HomeComponent,
    InitiateNoteComponent,
    HeaderNewComponent,
    AssetReqComponent,
    FooterComponent,
    ProfileComponent,
    LoginNewComponent,
    NotificationComponent,
    HardsoftComponent,
    CancelComponent,
    MyAssetsComponent,
    CreatecrComponent,
    UatComponent,
    WorkflowComponent,
    WorkFlowDialogComponent,
    SharedfolderAccessComponent,
    SharedfolderComponent,
    WebmailAccessComponent,
    UsbAccessComponent,
    ],
  imports: [
    NgbModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatTabsModule,
    MatExpansionModule,
    LayoutModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatMenuModule,
    FormsModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    AgGridModule.withComponents([]),
    MatSelectModule,
    MatRadioModule,
    MatTableModule,
    MatDialogModule,
    MatCheckboxModule,
    FlexLayoutModule
  ],
  providers: [
    AssetService, AuthGuard, LoginService,
    ],
  bootstrap: [AppComponent],
  entryComponents: [WorkFlowDialogComponent]

})

export class AppModule { }
