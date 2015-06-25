
function readapi(a,b)
{
    a= decipher(a);
    b= decipher(b);
    var url="https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20csv%20where%20url%3D%22http%3A%2F%2Ffinance.yahoo.com%2Fd%2Fquotes.csv%3Fe%3D.csv%26f%3Dc4l1%26s%3D"+a+b+"%3DX%22%3B&format=json&diagnostics=true&callback=";

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
    if(a.toUpperCase() === "RUPPEE"||a.toUpperCase() === "INR")
    {
        return ("INR");
    }

}
