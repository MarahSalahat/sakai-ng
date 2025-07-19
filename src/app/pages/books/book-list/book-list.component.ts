import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Book } from '../book.model';
import { BookService } from '../book.service';
import { BookFormComponent } from '../book-form/book-form.component';
import { BookCardComponent } from '../book-card/book-card.component';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [CommonModule, BookFormComponent, BookCardComponent, ButtonModule],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.scss'
})
export class BookListComponent {
  books: Book[] = [];
  dialogVisible = false;
  selectedBook: Book | null = null;

  constructor(private bookService: BookService){}

  ngOnInit(){
    this.bookService.getBooks().subscribe(data => this.books = data);
  }

  openNewBookForm(){
    this.selectedBook = null;
    this.dialogVisible = true;
  }

  editBook(book: Book){
    this.selectedBook = book;
    this.dialogVisible = true;
  }

  saveBook(book: Book){
    if (book.id) {
      this.bookService.updateBook(book);
    } else {
      this.bookService.addBook(book);
    }
    this.dialogVisible = false;
  }

}
