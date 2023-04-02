const marketingQuotes = fetch('marketing-quotes.json');
marketingQuotes.then(response => response.json())
.then(data => {
    const sameItem = Math.floor(Math.random() * data["authors"].length);
    console.log(sameItem);
    document.getElementById("A").innerHTML = data["quotes"][sameItem];
    document.getElementById("B").innerHTML = data["authors"][sameItem]; 
});
