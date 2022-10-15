const fonts = ['sans-serif','monospace','cursive','arial','verdana','tahoma','times new roman'];

document.getElementById("button").addEventListener("click", function(event) {
    event.preventDefault();
    const url = 'https://api.kanye.rest';
    fetch(url)
        .then(function(response){
            return response.json();
        }).then(function(json){
            let rand = parseInt((Math.random()*7));
            let newQuote = json.quote;
            document.getElementById('quote').textContent = newQuote;
            document.getElementById('quote').style.fontFamily = fonts[rand];
        });
});