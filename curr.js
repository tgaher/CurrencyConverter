.pragma library

var tex=""

function readapi(a,b, done)
{
    a= decipher(a);
    b= decipher(b);
    var urlink ="https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20csv%20where%20url%3D%22http%3A%2F%2Ffinance.yahoo.com%2Fd%2Fquotes.csv%3Fe%3D.csv%26f%3Dc4l1%26s%3D"+a+b+"%3DX%22%3B&format=json&diagnostics=true&callback=";

    var doc = new XMLHttpRequest();
    doc.onreadystatechange=function()
    {
        if(doc.readyState === XMLHttpRequest.DONE)
        {
            tex = doc.responseText;
            var conversion = JSON.parse(tex);
            console.log(conversion.query.results.row.col1);

            if(done) done(parseInt(conversion.query.results.row.col1));
        }

    }

    doc.open("get" , urlink);
    doc.setRequestHeader("Content-Encoding", "UTF-8");
    doc.send();

}

function decipher(a)
{
    if(a.toUpperCase() === "EURO"||a.toUpperCase() === "EUR")
    {
        return ("EUR");
    }
    if(a.toUpperCase() === "DOLLAR"||a.toUpperCase() === "USD")
    {
        return ("USD");
    }
    if(a.toUpperCase() === "RUPEE"||a.toUpperCase() === "INR")
    {
        return ("INR");
    }

}
