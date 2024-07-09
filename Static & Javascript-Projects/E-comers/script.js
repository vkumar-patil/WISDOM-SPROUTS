const productids = [1, 2, 3, 4, 5];
const main = document.getElementById("main");
const BBtn = document.getElementById("BBtn");
const modelId = document.getElementById("modelId");
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

  newdiv.addEventListener("click", (e) => {
    if (e.target.classList.contains("Btn")) {
      const modelContain = document.createElement("div");

      modelContain.innerHTML = `<img src="${data.image}">
                   <h6>${data.title}</h6>
                   <p>Description:-${data.description}</p>
                   <p><span>&#8377 ${data.price}</span><span> <span>&bigstar;</span>${data.rating.rate}</span></p> 
                   

`;

main.appendChild(modelContain);
      console.log(modelId);
    }
  });
});
