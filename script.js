const search = (searchValue, productElements) => {
    const searchBox = searchValue.trim().toUpperCase();

    productElements.forEach(productElement => {
        const productNameElement = productElement.querySelector("h2");
        const productName = productNameElement.textContent.toUpperCase();
        const isVisible = productName.includes(searchBox);
    
        productElement.style.display = isVisible ? "" : "none";
    });

}

// Call the search function whenever the search input changes
const searchInput = document.getElementById("search-item");
const productElements = document.querySelectorAll(".product");

searchInput.addEventListener("input", () => {
    const searchBoxValue = searchInput.value;
    search(searchBoxValue, productElements);
})