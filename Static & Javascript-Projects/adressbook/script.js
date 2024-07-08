const contacts = {
  allcontact: [],

  addcontact: (n, e, p, add) => {
    const newcontact = {
      name1: n,
      phone: p,
      email: e,
      address: add,
    };
    console.log(newcontact);
    contacts.allcontact.push(newcontact);
    console.log(contacts.allcontact);
    displayContact(contacts.allcontact);
  },
};
function displayContact(array1) {
  result = document.getElementById("result");
  array1.forEach((element) => {
    console.log(element);
    newCard = document.createElement("div");
    newCard.className = "card";
    newCard.innerHTML = `<div class="card-body col-3">
                       <h5 class="card-title">${element.name1}</h5>
                       <p class="card-text">${element.email}</p>
                       <span>${element.phone}</span>
                       <span>${element.address}</span><br>
                       <button class='btn btn-primary'>delete</button>
                       <button class='btn btn-primary'>edit</button>
                       </div>

                       
                       `;
    result.appendChild(newCard);
  });
}

contacts.addcontact("vijay", 1234, "vijay@gmail", "pune");
document.getElementById("submitBTN").addEventListener("click", () => {
  nameInput = document.getElementById("nameInput");
  emailInput = document.getElementById("emailInput");
  phoneInput = document.getElementById("phoneInput");
  addressInput = document.getElementById("addressInput");
  name1 = nameInput.value;
  email = emailInput.value;
  phone = phoneInput.value;
  address = addressInput.value;
  contacts.addcontact(name1, email, phone, address);
});
