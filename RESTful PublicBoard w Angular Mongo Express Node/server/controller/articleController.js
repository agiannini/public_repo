var myArticle = require('../models/articles');

// This class services the Database with mongoose functions
// It is called on by the API
class ArticleService {
  // Retrieves all of the contacts and returns them
  static displayAll() {
    return myArticle.find({})
      .then((articles) => {
        return articles;
      });
  }

  //  Finds a single contact from the given ID
  static readDB(id) {
    return myArticle.findById(id)
      .then((articles) => {
        return articles;
      });
  }

  // Creates a new contact with the given data
  static makeNewArticle(articleData) {
    var newArticle = new myArticle(articleData);
    return newArticle.save()
  };

  // Updates the contact with the give ID and body
  // Uses the same method detailed in class
  static updateArticle(id, body) {
    return myArticle.findById(id)
      .then((article) => {
        article.set(body);
        article.save();
        return article;
      });
  };

  // Deletes the contact with the given ID
  static deleteArticle(id) {
    return myArticle.findByIdAndRemove(id)
      .then((article) => {
        return article;
      });
  };
}

module.exports.ArticleService = ArticleService;
