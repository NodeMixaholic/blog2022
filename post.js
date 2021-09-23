function getJSON(path) {
    return fetch(path).then(response => response.json());
}
getJSON('settings.json').then(listingsJSON => {
    let parsed = JSON.parse(listingsJSON);
    const blogName = parsed.pageTitle
    document.getElementById("title").innerText = blogName
    document.getElementById("header1-title").innerText = blogName
})

let decodedURL = decodeURI(location.href);
let paramString = decodedURL.split('?')[1];
let args = new URLSearchParams(paramString);

let urlOfMarkdown = args.get("listingURL")
let converter = new showdown.Converter();
fetch(urlOfMarkdown)
  .then(res => res.blob()) // Gets the response and returns it as a blob
  .then(blob => {
    document.getElementById("body").innerHTML = converter.makeHTML(blob.text)
})
