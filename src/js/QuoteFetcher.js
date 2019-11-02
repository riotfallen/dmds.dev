const BASE_URL = "https://api.quotable.io/";

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

const getRandomQuote = () => {
    let innerContent = document.getElementById("innerContent");
    innerContent.innerHTML = preloader;
    fetchAPI(BASE_URL + "random").then(data => {
        innerContent.innerHTML = `<p id="quote" class="quote">${data.content}</p>
                  <h2 id="author" class="author">${data.author}</h2>`;
    })
};

export { getRandomQuote }