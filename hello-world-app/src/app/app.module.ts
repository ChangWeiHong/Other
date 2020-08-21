import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
// import { MatToolbarModule,
//   MatIconModule,
//   MatCardModule,
//   MatButtonModule,
//   MatProgressSpinnerModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    // MatToolbarModule,
    // MatIconModule,
    // MatButtonModule,
    // MatCardModule,
    // MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
