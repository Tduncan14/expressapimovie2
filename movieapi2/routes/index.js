var express = require('express');
var router = express.Router();

const movies = require('../data/movie');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/most_popular',(req,res,next) =>{
// Get the page variable from the query string
  let page = req.query.page

  if(page === undefined){
    page = 0;
  }
   if(req.query.api_key != 123456789){
     res.json("invalid Api key");
   }
  else{
   const results = movies.filter((movie) =>{
     return movie.most_popular;     
   })

   res.json(results);

  }
})



module.exports = router;
