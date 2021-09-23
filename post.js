function getJSON(path) {
    return fetch(path).then(response => response.json());
}

getJSON('settings.json').then(listingsJSON => {
    let parsed = listingsJSON;
    const blogName = parsed.pageTitle
    document.getElementById("title").innerText = blogName
    document.getElementById("header1-title").innerText = blogName
})

let decodedURL = decodeURI(location.href);
let paramString = decodedURL.split('?')[1];
let args = new URLSearchParams(paramString);

let urlOfMarkdown = args.get("listingURL")
let converter = new showdown.Converter();
var blogMD
fetch(urlOfMarkdown)
  .then(function(response) {
    response.text().then(function(text) {
        blogMD = await blob.text();
        setBody()
    })
})


function setBody() {
    document.getElementById("body").innerHTML = converter.makeHtml(blogMD)
}
