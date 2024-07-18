const productids = [1, 2, 3, 4, 5];
// cart modal id
const Cart = document.getElementById("Cart");
const modall = document.getElementById("modelIdd");
const ProductTitle = document.getElementById("ProductTitle");
const ProductPrice = document.getElementById("ProductPrice");
const Span = document.querySelector(".Close");

//product modal id
const main = document.getElementById("main");
const modal = document.getElementById("modelId");
const productImage = document.getElementById("productImage");
const productTitle = document.getElementById("productTitle");
const productDescription = document.getElementById("productDescription");
const productPrice = document.getElementById("productPrice");
const productRating = document.getElementById("productRating");
const span = document.querySelector(".close");

productids.forEach(async (productID) => {
  const response = await fetch(
    `https://fakestoreapi.com/products/${productID}`
  );
  const data = await response.json();
  console.log(data);
  const newdiv = document.createElement("div");
  newdiv.classList = "maindiv";
  newdiv.id = `product-${productID}`;
  newdiv.innerHTML = `<img src="${data.image}">
                         <h6>${data.title}</h6>
                        <button class="Bttn">See More</button>
                         `;

  newdiv.querySelector("img").classList.add("fst");
  main.appendChild(newdiv);
  newdiv.querySelector(".Bttn").addEventListener("click", () => {
    productImage.src = data.image;
    productTitle.textContent = data.title;
    productDescription.textContent = data.description;
    productPrice.textContent = data.price;
    productRating.textContent = data.rating.rate;
    modal.style.display = "block";

    span.addEventListener("click", () => {
      modal.style.display = "none";

      Cart.addEventListener("click", () => {
        const cartlist = document.createElement("ul");
        cartlist.innerHTML = `<li>${data.title},${data.price}</li>`;
        ProductTitle.appendChild(cartlist);
        modall.style.display = "block";
        Span.addEventListener("click", () => {
          modall.style.display = "none";
        });
        window.onclick = function (e) {
          if (e.target == modall) {
            modall.style.display = "none";
          }
        };
      });
    });
  });
});
