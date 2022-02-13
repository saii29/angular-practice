import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {throwError} from "rxjs";


@Component({
  // selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books: any;

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit(): void {
    this.books = this.getAllBooks();
    console.log('checking books: ' + this.books);

  }

  getAllBooks(): any {

    this.httpClient.get<any>("https://anapioficeandfire.com/api/houses/").subscribe((data: any) => {
      // console.log('data: ' + JSON.stringify(data));
      const booksString: string = JSON.stringify(data);
      console.log('data: ' + booksString);
      this.books = JSON.parse(booksString);
      console.log('data: ' + this.books);

      data.forEach((e: any) => {
        console.log('name: ' + e.name);

        this.books.push({
          'name': e.name,
          'region': e.region
        })
      })

    });

  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }
}
