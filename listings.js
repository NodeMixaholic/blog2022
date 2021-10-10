function getJSON(path) {
    return fetch(path).then(response => response.json());
}
getJSON('settings.json').then(listingsJSON => {
    let parsed = listingsJSON;
    const blogName = parsed.pageTitle
    document.getElementById("title").innerText = blogName
    document.getElementById("header1-title").innerText = blogName
})

getJSON('listings.json').then(listingsJSON => {
    let parsed = listingsJSON;
    var listings = parsed.listings
    for (let i = 0; i <= listings.length; i++) {
        let currentURL = location.href
        let currentPage = currentURL.split('#').shift().split('?').shift().split('/').pop()
        let currentBaseURL = currentURL.split(currentPage).join("")
        document.getElementById("body").innerHTML += `<a href="blogpost.html?listingURL=${currentBaseURL}/${listings[i].relativeURL}">${listings[i].postName}</a><br>`
    }
    let u = new URLSearchParams(myParams).toString();
    console.log(u);
})
