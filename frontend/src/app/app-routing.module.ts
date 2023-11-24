import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {IntroductionComponent} from "./pages/introduction/introduction.component";
import {ResumeComponent} from "./pages/resume/resume.component";
import {ContactComponent} from "./pages/contact/contact.component";
import {CertificatesComponent} from "./pages/certificates/certificates.component";
import {ProjectsComponent} from "./pages/projects/projects.component";

const routes: Routes = [
  { path: '', redirectTo: '/introduction', pathMatch: 'full' },
  { path: 'introduction', component: IntroductionComponent },
  { path: 'resume', component: ResumeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'certificates', component: CertificatesComponent },
  { path: 'projects', component: ProjectsComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
