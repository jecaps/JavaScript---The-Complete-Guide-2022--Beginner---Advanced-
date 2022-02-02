class Product {
  // title = "DEFAULT";
  // imageUrl;
  // description;
  // price;

  constructor(title, image, desc, price) {
    this.title = title;
    this.imageUrl = image;
    this.description = desc;
    this.price = price;
  }
}

const productList = {
  products: [
    new Product(
      "A Pillow",
      "https://images.pexels.com/photos/776120/pexels-photo-776120.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      "A soft pillow!",
      19.99
    ),
    new Product(
      "A Carpet",
      "https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      "A carpet which you might like -  or not.",
      89.99
    ),
  ],
  render() {
    const rederHook = document.getElementById("app");
    const prodList = document.createElement("ul");
    prodList.className = "product-list";
    for (const prod of this.products) {
      const prodEl = document.createElement("li");
      prodEl.className = "product-item";
      prodEl.innerHTML = `
        <div>
          <img src="${prod.imageUrl}" alt="${prod.title}">
          <div class='product-item__content'>
            <h2>${prod.title}</h2>
            <h3>\$${prod.price}</h3>
            <p>${prod.description}</p>
            <button>Add to Cart</button>
          </div>
        </div>
      `;
      prodList.append(prodEl);
    }
    rederHook.append(prodList);
  },
};

productList.render();
