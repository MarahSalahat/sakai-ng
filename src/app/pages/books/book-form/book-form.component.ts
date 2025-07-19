import { Component, Input, Output, EventEmitter, OnChanges  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { FormsModule, ReactiveFormsModule, FormBuilder,FormGroup } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { Book } from '../book.model';

@Component({
  selector: 'app-book-form',
  standalone: true,
  imports: [CommonModule, DialogModule, FormsModule, ReactiveFormsModule, InputTextModule, ButtonModule],
  templateUrl: './book-form.component.html',
  styleUrl: './book-form.component.scss'
})
export class BookFormComponent {
  @Input() visible = false;
  @Input() book: Book | null = null;
  @Output() save = new EventEmitter<Book>();
  @Output() close = new EventEmitter<void>();

  form: FormGroup;

  constructor(private fb: FormBuilder){
    this.form = this.fb.group({
      title: [''],
      author: [''],
      year: [new Date().getFullYear()],
      descreption: ['']
    })
  }
  
  ngOnChanges() {
    this.form.reset(this.book || {});
  }

  onSubmit() {
    if (this.form.valid) {
      const bookData = { ...this.book, ...this.form.value}
      this.save.emit(bookData);
      this.form.reset();
    }
  }
}
