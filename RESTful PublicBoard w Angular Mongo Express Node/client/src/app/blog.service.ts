import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http:HttpClient) { }

  getArticles(){
    return this.http.get("/api/");
  }
  getArticle(id){
    return this.http.get("/api/"+id);
  }

  addArticle(data){
    return this.http.post("/api/", data);
  }
  deleteArticle(id){
    return this.http.delete("/api/delete/"+id);
  }
  addComment(data, id){
    return this.http.put("/api/"+id, data);
  }
}
