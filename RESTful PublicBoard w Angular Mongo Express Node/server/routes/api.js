const express = require('express');
const router = express.Router();
const articleController = require('../controller/articleController');
const ArticleService = articleController.ArticleService;

// This allows the app to use Cross Orgin Resource Sharing
router.use((req, res, next) => {
  res.set({
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': '*',
    'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers',
    'Content-type': 'application/json'
  });
  next();
});

//  Purpose:    to use the displayAll function in the contactService class
//  Notes:      returns stringified JSON object
router.get('/', (req, res, next) => {
  ArticleService.displayAll()
    .then((articles) => {
      res.status(200);
      res.send(JSON.stringify(articles));
    }).catch((err) => {
      res.status(404);
      res.redirect('/Error.html');
      res.end;
    });
});

//  Purpose:    to use the makeNewContact function in the contactService class
//  Notes:      returns stringified JSON object containing the new contact
//              object Literal is created in the function
router.post('/',  (req, res, next) => {
  const articleData = {
    title: req.body.title,
    author: req.body.author,
    article: req.body.article
  }
  ArticleService.makeNewArticle(articleData)
    .then((articleData) => {
      res.status(200);
      res.send(JSON.stringify(articleData));
    }).catch((err)=>{
      res.status(404);
      res.end();
    });
});

//  Purpose:    to use the readDB function in the contactService class
//  Notes:      returns stringified JSON object for the given ID
router.get('/:articleID', (req, res, next) => {
  ArticleService.readDB(req.params.articleID)
    .then((article) => {
      res.status(200);
      res.send(JSON.stringify(article));
    }).catch((err) => {
      res.status(404);
      res.end();
    });
});

//  Purpose:    to use the updateContact function in the contactService class
//  Notes:      returns updated stringified JSON object
router.put('/:articleID', (req, res, next) => {
  ArticleService.updateArticle(req.params.articleID, req.body)
    .then((updatedArticle) => {
      res.status(200);
      res.send(JSON.stringify(updatedArticle));
    }).catch((err) => {
      res.status(404);
      res.end();
    })
});

//  Purpose:    to update the comments section of the given ID
//  Notes:      returns updated stringified JSON object
router.put('/comments/:articleID', (req, res, next) => {
  ArticleService.updateArticle(req.params.articleID, req.body)
    .then((updatedArticle) => {
      res.status(200);
      res.send(JSON.stringify(updatedArticle));
    }).catch((err) => {
      res.status(404);
      res.end();
    })
});



//  Purpose:    to use the deleteContact function in the contactService class
//  Notes:      returns deleted stringified JSON object
router.delete('/delete/:id', (req, res, next) => {
  ArticleService.deleteArticle(req.params.id)
    .then((deletedArticle) => {
      res.status(200);
      res.send(JSON.stringify(deletedArticle));
    }).catch((err) => {
      res.end();
    });
});
module.exports = router;
