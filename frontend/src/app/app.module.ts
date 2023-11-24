import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroductionComponent } from './pages/introduction/introduction.component';
import { CertificatesComponent } from './pages/certificates/certificates.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { ResumeComponent } from './pages/resume/resume.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    IntroductionComponent,
    CertificatesComponent,
    ContactComponent,
    HeaderComponent,
    ResumeComponent,
    ProjectsComponent
  ],
  imports: [
    HttpClientModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
