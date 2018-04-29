import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Book} from './book.models';

@Injectable()
export class GoogleBooksService
{
  private API_PATH = 'https://www.googleapis.com/books/v1/volumes';

  constructor(private http: HttpClient) {}

  searchBooks(queryTitle: string): Observable<Book[]>
  {
    return this.http
      .get<{ items: Book[] }>(`${this.API_PATH}?q=${queryTitle}`)
      .map(msg => msg.items);
  }

  retrieveBook(volumeId: string): Observable<Book>
  {
    return this.http.get<Book>(`${this.API_PATH}/${volumeId}`).catch((err, caught) => {
      console.log('retrieve book error: ', err);
      return caught;
    });
  }
}
