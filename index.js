console.log("this is news api!");

// Initializing the news api parameters
let source = "bbc-news";
let apiKey = "e9eecf2e8fb34c49bd2c9dc290231bc0";

// grabbing the news container
let newsAccordion = document.getElementById("newsAccordion");

// creating an ajax get request
const xhr = new XMLHttpRequest();
xhr.open(
  "GET",
  `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`,
  true
);

// when response is ready
xhr.onload = function () {
  if (this.status === 200) {
    let json = JSON.parse(this.responseText);
    let articles = json.articles;
    console.log(articles);
    let newsHTML = "";
    articles.forEach(function(element, index){
        let news = `<div class="accordion-item">
            <h2 class="accordion-header" id="heading${index}">
                <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse${index}"
                aria-expanded="true"
                aria-controls="collapse${index}"
                >
                ${element["title"]}
                </button>
            </h2>
            <div
                id="collapse${index}"
                class="accordion-collapse collapse"
                aria-labelledby="heading${index}"
                data-bs-parent="#accordionExample"
            >
                <div class="accordion-body"> ${element["description"]} <a href="${element['url']}" target="_blank">
                Read more here</a></div>
            </div>
            </div>`;
        newsHTML += news;
    });
    newsAccordion.innerHTML = newsHTML;
  } else {
    console.log("error occured!");
  }
};

xhr.send();
