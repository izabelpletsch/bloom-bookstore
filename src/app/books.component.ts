import { Component, OnInit } from '@angular/core';
import { Book } from '../books';
import { BOOKS } from '../mock-books';

@Component({
  selector: 'app-book',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})

export class BooksComponent implements OnInit {

  books = BOOKS;

  selectedBook?: Book;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(book: Book): void {
    this.selectedBook = book;
  }
}
