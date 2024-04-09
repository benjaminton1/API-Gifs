fetch('https://api.giphy.com/v1/gifs/random?api_key=Pu222QTYbhhMbgnGoplW0o1YPIH7Nzrx&tag=dog&rating=g')
.then(function(response) {
    return response.json();
})
.then(function(jsonData) {
    console.log(jsonData);
    var gifUrl = jsonData.data.images.original.url;
    console.log(gifUrl);
    var gifImg = document.createElement("img");
    gifImg.setAttribute("src", gifUrl);
    document.body.appendChild(gifImg)

    var gifTitle = jsonData.data.title;
    var caption = document.createElement("h3");
    caption.innerHTML = gifTitle;
    document.body.appendChild(caption);


})