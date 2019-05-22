import { Component, OnInit } from '@angular/core';
import {BlogService} from './blog.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Public Post Board';
  articleData = null;

  constructor(private service:BlogService){}

  // The contactsService uses an observable to retrieve the data
  ngOnInit() {
    this.service.getArticles().subscribe((data) => {
      this.articleData = data;
    });
  }


}
