var app = require(express);

app.get('/routes/test', function (req, res){
  console.log('Hello From Routes');
});
