import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Book } from './book.model';

@Injectable({ providedIn: 'root' })
export class BookService {
  private books$ = new BehaviorSubject<Book[]>([
    { id: 1, title: 'AAnd Then There Were None', author: 'Agatha Christie', year: 21940, description: 'Ten people, each with something to hide and something to fear, are invited to an isolated mansion on Indian Island by a host who, surprisingly, fails to appear. On the island they are cut off from everything but each other and the inescapable shadows of their own past lives. One by one, the guests share the darkest secrets of their wicked pasts. And one by one, they die…' },
    { id: 2, title: 'Milk and Honey', author: 'Rupi Kaur', year: 2014, description: 'milk and honey takes readers through a journey of the most bitter moments in life and finds sweetness in them because there is sweetness everywhere if you are just willing to look.' }
  ]);

  getBooks(): Observable<Book[]> {
    return this.books$.asObservable();
  }

  addBook(book: Book) {
    const current = this.books$.value;
    this.books$.next([...current, { ...book, id: current.length + 1 }]);
  }

  updateBook(updated: Book) {
    const updatedList = this.books$.value.map(b => b.id === updated.id ? updated : b);
    this.books$.next(updatedList);
  }
}
