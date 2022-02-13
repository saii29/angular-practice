import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BasicsComponent} from './basics/basics.component';
import {BasicsModule} from './basics/basics.module';

@NgModule({
  declarations: [
    AppComponent,
    // HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BasicsModule
  ],
  providers: [],

  // bootstrap: [AppComponent]
  bootstrap: [BasicsComponent]
})
export class AppModule {
}
