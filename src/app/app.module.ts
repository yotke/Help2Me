import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GoogleMapsModule } from '@angular/google-maps';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './imports/material/material.module';
import { HelpMeComponent } from './modules/help-me/help-me.component';
import { HomeComponent } from './modules/home/home.component';
import { SigninComponent } from './modules/singin/signin.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HelpMeComponent,
    SigninComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    BrowserModule,
    GoogleMapsModule,
    MaterialModule,
    MatInputModule,
    MatFormFieldModule,
   MatIconModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
