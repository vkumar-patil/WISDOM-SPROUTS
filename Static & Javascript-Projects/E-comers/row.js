const getBike = new Promise((resolve, reject) => {
  let getBike = true;
  if (getBike) {
    resolve("i got");
  }
  reject("not get");
});
getBike
  .then((response) => {
    console.log(response);
  })
  .catch((err) => {
    console.log(err);
  });

fetch("https://fakestoreapi.com/products")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

async function getBike1() {
  let getBike1 = false;
  try {
    let getBike1 = await new Promise((resolve, reject) => {
      if (getBike1) {
        resolve("i got");
      }
      reject("not yet");
    });
    console.log(getBike1);
  } catch (err) {
    console.log(err);
  }
}

// [
//   {
//     id: 1,
//     title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
//     price: 109.95,
//     description:
//       "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
//     category: "men's clothing",
//     image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
//     rating: {
//       rate: 3.9,
//       count: 120,
//     },
//   },
//   {
//     id: 2,
//     title: "Mens Casual Premium Slim Fit T-Shirts ",
//     price: 22.3,
//     description:
//       "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
//     category: "men's clothing",
//     image:
//       "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
//     rating: {
//       rate: 4.1,
//       count: 259,
//     },
//   },
//   {
//     id: 3,
//     title: "Mens Cotton Jacket",
//     price: 55.99,
//     description:
//       "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
//     category: "men's clothing",
//     image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
//     rating: {
//       rate: 4.7,
//       count: 500,
//     },
//   },
// ];
const productIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const main = document.getElementById("main");
async function fechapi() {
  try {
    productIds.forEach(async (productId) => {
      response = await fetch(`https://fakestoreapi.com/products/${productId}`);
      const data = await response.json();

      const productDiv = document.createElement("div");
      productDiv.classList.add("card");
      productDiv.id = `product-${productId}`;
      productDiv.innerHTML = `
    <img src="${data.image}" alt="${data.title}">
    <div class="card-body">
      <h4 class="card-title">${data.title}</h4>
      <p class="card-text">${data.category}</p>
    </div>
  `;

      productDiv.querySelector("img").classList.add("fst");
      main.appendChild(productDiv);
    });
  } catch (error) {
    console.log(error);
  }
}
fechapi();
const response = await