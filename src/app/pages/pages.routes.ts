import { Routes } from '@angular/router';
import { Documentation } from './documentation/documentation';
import { Crud } from './crud/crud';
import { Empty } from './empty/empty';
import { BookListComponent } from './books/book-list/book-list.component';

export default [
    { path: 'documentation', component: Documentation },
    { path: 'crud', component: Crud },
    { path: 'empty', component: Empty },
    {path: 'books', component: BookListComponent},
    { path: '**', redirectTo: '/notfound' }
] as Routes;
