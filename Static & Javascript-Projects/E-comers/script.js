const productids = [1, 2, 3, 4, 5];
const main = document.getElementById("main");
const Btn = document.querySelector(".Btn");

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
                        <button>See More</button>
                         `;
  newdiv.querySelector("button").classList.add("Btn");
  newdiv.querySelector("img").classList.add("fst");
  main.appendChild(newdiv);
  Btn.addEventListener("click", (e) => {
    if (e) {
      const modelContain = document.createElement("div");
      modelContain.innerHTML = `              <div id="myModal" class="modal">
<div class="modal-content">
  <span >&times;</span>
  <img src="${data.image}" alt="Product Image" >
  <h6 >${data.title}</h6>
  <p >${data.description}</p>
  <p><span > ${data.price}</span><span> <span>&bigstar;</span><span >${data.rating.rate}</span></span></p>
</div>
</div>
`;
      modelContain.querySelector("div").classList.add("modal");
      modelContain.querySelector("span").classList.add("close");
      modelContain.querySelector("img").classList.add("secound");
      const modal = document.querySelector(".modal");
      //main.style.display = "none";
      modal.appendChild(modelContain);
      console.log(modelIId);
    }
  });
});
