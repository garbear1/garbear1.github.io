// please follow this new format when adding products
const prod_list = [
    ["Asparagus (kg)",                          [4080]],

    ["Bananas (kg)",                            [4011]],
    ["Plantains [Ripe] (kg)",                   [4235]],

    ["Broccoli (ea)",                           [4060]],
    ["Broccoli [Crowns] (kg)",                  [3082]],
    
    ["Corn [Bicolor] (ea)",                     [407]],
    
    ["Eddoes (kg)",                             [431]],
    
    ["Grapes [Green Seedless] (kg)",            [4022]],
    ["Grapes [Red Seedless] (kg)",              [4023, 4635]],
    
    ["Watermelon [Red Seedless] (ea)",          [4032]],
    ["Watermelon [Mini Seedless] (ea)",         [3421]],
];
let current_prod;

// generates a random integer between 0 and `x`, exclusive
const rand = x => Math.floor(x * Math.random());

function set_random_prod() {
    current_prod = prod_list[rand(prod_list.length)];
}
function get_prod_name() {
    return current_prod[0];
}
function prod_has_plu(plu) {
    return current_prod[1].includes(plu);
}

const guess_in = document.getElementById("guess");
const prod_out = document.getElementById("product");
const status_out = document.getElementById("status");

set_random_prod();
prod_out.innerHTML = get_prod_name();

document.getElementById("guess-form").addEventListener("submit", e => {
    e.preventDefault();

    const data = new FormData(e.target);

    let guess;
    for (const pair of data) {
        if (pair[0] === "guess") guess = +pair[1];
    }

    if (prod_has_plu(guess)) {
        status_out.style = "color:green";
        status_out.innerHTML = "You win! :)";
    } else {
        status_out.style = "color:red";
        status_out.innerHTML = "<p>You lose! :(";
    }

    setTimeout(() => window.location.reload(), 2000);
});