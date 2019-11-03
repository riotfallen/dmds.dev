const QUOTE_BASE_URL = "https://api.quotable.io/";
const IMAGE_SEARCH_URL = "https://api.unsplash.com/search/photos?page=1&orientation=landscape&query=";
const CLIENT_PARAM = "&client_id=8235894caef4359db8453665d4809d822ed07bf6c0a03ef4f3b87628aba0836f";


const preloader = `<div id="preloader" class="lds-heart"><div></div></div>`;


const fetchAPI = url => {
    return fetch(url).then(res => {
        if (res.status !== 200) {
            console.log("Error: " + res.status);
            return Promise.reject(new Error(res.statusText))
        } else {
            return Promise.resolve(res)
        }
    }).then(res => res.json()).catch(err => {
        console.log(err)
    })
};

const getBackgroundImage = author => {
    fetchAPI(IMAGE_SEARCH_URL + author + CLIENT_PARAM).then(data => {
        if(data.results.length > 0) {
            const stylee = 'url("'+ data.results[0].urls.regular + '")';
            console.log(stylee);
            document.body.style.backgroundImage = stylee;
        }
    })
};

const getRandomQuote = () => {
    let innerContent = document.getElementById("innerContent");
    innerContent.innerHTML = preloader;
    fetchAPI(QUOTE_BASE_URL + "random").then(data => {
        innerContent.innerHTML = `<p id="quote" class="quote">${data.content}</p>
                  <h2 id="author" class="author">${data.author}</h2>`;

        getBackgroundImage(data.author);
    })
};

export { getRandomQuote }