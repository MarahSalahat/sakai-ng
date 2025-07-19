import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { Book } from '../book.model';

@Component({
  selector: 'app-book-card',
  imports: [CommonModule, CardModule, ButtonModule],
  templateUrl: './book-card.component.html',
  styleUrl: './book-card.component.scss'
})
export class BookCardComponent {
  @Input() book!: Book;
  @Output() edit = new EventEmitter<Book>();
  
onEditClick() {
    console.log('Edit clicked:', this.book);
    this.edit.emit(this.book);
  }
}
