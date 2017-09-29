var express = require('express');
var app = express();

var bodyParser = require('body-parser');

var path = require('path');

const myPath = __dirname + '/views/';


app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, 'public'))); // To get css & images working
app.get('/', function(req, res)
{
    res.sendFile(myPath + 'index.html', function (err)
    {

    });
});


app.get('/about', function (req, res)
{
    res.sendFile(myPath + 'about.html', function (err)
    {

    });
});

app.get('/contact', function(req, res)
{
    res.sendFile(myPath + 'contact.html', function (err)
    {

    });
});

app.get('/studIni', function(req, res)
{
    res.sendFile(myPath + 'student_initiatives.html', function (err)
    {

    });
});

app.get('/more', function(req, res)
{
    res.sendFile(myPath + 'more.html', function (err)
    {

    })
})

app.get ('/signup', function(req,res)
{
    res.sendFile(myPath + 'signup.html', function (err)
    {

    })
})



.listen(process.env.PORT || 8888)