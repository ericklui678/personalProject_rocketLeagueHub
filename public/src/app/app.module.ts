import { BrowserModule } from '@angular/platform-browser';
import { CookieService } from 'ngx-cookie-service';
import { FormsModule } from '@angular/forms'
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpService } from './http.service';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { NavsearchComponent } from './navsearch/navsearch.component'

import { AppRoutingModule } from './app-routing.module';

import { UsernameService } from './username.service';
import { FollowingComponent } from './following/following.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    NavsearchComponent,
    FollowingComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [HttpService, CookieService, UsernameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
