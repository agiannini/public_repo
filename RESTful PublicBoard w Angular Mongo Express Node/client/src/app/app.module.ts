import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { HeadlineComponent } from './headline/headline.component';
import { FormsModule } from '@angular/forms';
// Allows app to reload the page
import { HashLocationStrategy, LocationStrategy } from '@angular/common';


const routes: Routes = [
  { path: '', redirectTo: '/myblog', pathMatch: 'full' },
  { path: 'myblog', component: HeadlineComponent },
  { path: 'myblog/article/:id', component: ArticleComponent }

]


@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    HeadlineComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(     // Handles routing according to specifications
  routes
)
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
