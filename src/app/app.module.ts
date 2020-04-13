import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { NgxAudioPlayerModule } from 'ngx-audio-player';
import { MatSliderModule } from '@angular/material/slider';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,  
    NgxAudioPlayerModule,
BrowserAnimationsModule,
MatSliderModule,
MatToolbarModule,
MatIconModule,
MatRadioModule,
MatCheckboxModule,
 MatSlideToggleModule,
 MatCardModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
