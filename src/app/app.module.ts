import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  studentComponent } from "./components/student.component";
import {  studentCService} from "./services/student.service";
import {  FormsModule, ReactiveFormsModule} from "@angular/forms";
import {  HttpClientModule} from "@angular/common/http";
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,studentComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule, ReactiveFormsModule
  ],
  providers: [studentCService],
  bootstrap: [studentComponent]
})
export class AppModule { }
