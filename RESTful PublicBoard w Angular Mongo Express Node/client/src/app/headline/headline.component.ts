
import { Component, OnInit } from '@angular/core';
import { BlogService } from '.././blog.service';

@Component({
  selector: 'app-headline',
  templateUrl: './headline.component.html',
  styleUrls: ['./headline.component.css'],
  providers: [BlogService]

})
export class HeadlineComponent implements OnInit {
  num = 0;
  counter: boolean = true;
  articleData = null;
  adding: boolean = false;
  article: any= {};

  constructor(private service:BlogService){}

  // The contactsService uses an observable to retrieve the data
  ngOnInit() {
    this.service.getArticles().subscribe((data) => {
      this.articleData = data;
    });
  }
  newArticle(): void{
    this.service.addArticle(this.article)
    .subscribe((response) =>{
      window.location.href='/';
    })
  }
  deleteArticle(id): void{
    this.service.deleteArticle(id)
    .subscribe((response)=>{
      window.location.href='/';
    })
  }

  changeAdding(): void{
    console.log(this.adding);
    if (this.adding === true){
      this.adding = false;
    }
    else{
      this.adding = true;
    }
    console.log(this.adding);
  }



}
