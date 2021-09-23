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
function getTextThenSetBody() {
    fetch(urlOfMarkdown)
    .then(function(response) {
    response.text().then(function(text) {
        let blogMD = blob.text();
        setBody(blogMD)
    })
})
}

function setBody(md) {
    document.getElementById("body").innerHTML = converter.makeHtml(md)
}
