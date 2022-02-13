import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {BasicsComponent} from "./basics.component";
import {BooksComponent} from "../books/books.component";
import {RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule
  ],
  declarations: [BasicsComponent, BooksComponent],
  exports: [
    BooksComponent
  ],

})
export class BasicsModule {
}
