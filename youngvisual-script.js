// slide down navbar on scroll

let navHeader = document.querySelector('header');

window.addEventListener('scroll', () => {
    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
        navHeader.style.top = "0";
      } else {
        navHeader.style.top = "-80px";
      }
})


// marketing quotes footer (fetch request)

const marketingQuotes = fetch('marketing-quotes.json');
marketingQuotes.then(response => {
  if(!response.ok){
    throw new Error(`HTTP error - ${response.status}`);
  }
  return response.json();
})
.then(data => {
    const sameItem = Math.floor(Math.random() * data["authors"].length);
    document.getElementById("A").innerHTML = data["quotes"][sameItem];
    document.getElementById("B").innerHTML = data["authors"][sameItem]; 
})
.catch(error => {
  console.error(`Fetch request failed, cannot load footer quotes. ${error} `)
});

