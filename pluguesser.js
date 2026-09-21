const product_table = {
    "Asparagus (kg)": [4080],

    "Bananas (kg)": [4011],
    "Plantains [Ripe] (kg)": [4235],

    "Broccoli (ea)": [4060],
    "Broccoli [Crowns] (kg)": [3082],
    
    "Corn [Bicolor] (ea)": [407],
    
    "Eddoes (kg)": [431],
    
    "Grapes [Green Seedless] (kg)": [4022],
    "Grapes [Red Seedless] (kg)": [4023, 4635],
    
    "Watermelon [Red Seedless] (ea)": [4032],
    // mini seedless
}
const product_names = Object.keys(product_table);

let current_product;
const product_heading = document.getElementById("product");

// generates a random integer between 0 and `x`, exclusive
function randn(x) {
    return Math.floor(x * Math.random());
}

function set_random_product() {
    current_product = product_names[randn(product_names.length)];
    
    product_heading.innerHTML = current_product;
}

set_random_product();

document.getElementById("guess-form").addEventListener("submit", e => {
    e.preventDefault();

    const data = new FormData(e.target);

    let guess;
    for (const pair of data) {
        if (pair[0] === "guess") guess = +pair[1];
    }

    let correct = false;
    for (let plu of product_table[current_product]) {
        if (guess === plu) correct = true;
    }

    if (correct) {
        alert("Hurrah!!!!!");
    } else {
        alert("You Lose! BOOOOOOO!!!!");
    }
    document.getElementById("guess").value = null;
    window.location.reload();
});