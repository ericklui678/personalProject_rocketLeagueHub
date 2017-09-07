import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpService } from './http.service';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';

import { AppRoutingModule } from './app-routing.module';
import { NavsearchComponent } from './navsearch/navsearch.component'

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    NavsearchComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
