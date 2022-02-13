import {Routes} from "@angular/router";
import {BasicsComponent} from "./basics.component";
import {BooksComponent} from "../books/books.component";

export const basics: Routes = [
  {
    path: 'books',
    component: BooksComponent
  },
  {
    path: '',
    component: BasicsComponent,
    pathMatch: 'full'

  }
]
