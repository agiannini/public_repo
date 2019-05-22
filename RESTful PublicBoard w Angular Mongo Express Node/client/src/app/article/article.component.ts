import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '.././blog.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  constructor(private route: ActivatedRoute, private blogService: BlogService){}
  article = {};
  articleID: any;
  commenting: boolean = false;
  ngOnInit() {
    this.getArticle();
  }

  getArticle(): void {
    this.articleID = this.route.snapshot.paramMap.get('id');
    this.blogService.getArticle(this.articleID)
      .subscribe((article) => {
        this.article = article;
      });
  }


}
