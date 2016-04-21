var express = require('express'),
      app = express();

app.set('view engine', 'pug');
// app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/dist'));

app.get('/', function(req, res){
  res.render('index', { title: 'Home' })
});
app.get('/about', function(req,res){
  res.render('about', { title: 'About' })
});

app.listen(3000, function(){
  console.log('Express server listening on port 3000');
});
