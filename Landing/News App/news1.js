const getCat = (categoryName) => {
  category.innerHTML = categoryName;

  let url = "https://inshorts.deta.dev/news?category="+categoryName;
  let response = fetch(url);
  response
    .then((value) => {
      return value.json();
    })
    .then((news) => {
      ihtml = "";
      // image = document.getElementById("image");
      for (items in news) {
        let data = news.data;
        for (i in data) {
          // console.log(data[i].author)
          ihtml += `
        <section class="card">
        <img src="${data[i].imageUrl}" alt="" id="image">
        <img src="gradient.png" alt="" id="grad">
        <h2 id="title">
        ${data[i].title}
        </h2>
        <p id="content">${data[i].content}</p>
        <a id="read" href="${data[i].readMoreUrl}">Read More</a>
        <div class="info">
  
          <p id="author">Author : ${data[i].author}</p>
          <p id="url">URL : "${data[i].url}</p>
          <p id="date">Date : ${data[i].date}</p>
          <p id="time">Time : ${data[i].time}</p>
        </div>
        </section>
            `;
        }
      }
      category.innerHTML = news.category;
      container.innerHTML = ihtml;
    });
  console.log(1);
};
submitBtn.addEventListener("click",(e)=>{
    e.preventDefault()
    getCat(searchInput.value)
})
getCat("business")
