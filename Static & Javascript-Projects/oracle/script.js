const submit = document.getElementById("submit");
submit.adEventlistenr(click, () => {
  const partInput = document.querySelector(".partInput").value;
  const QuntityInput = document.querySelector(".QuntityInput").value;
  const items = document.getElementById("items");
  let li = document.createElement("li");
  li.textContent = `${partInput},${QuntityInput}`;
  items.appendChild(li);
  console.log(li);
});
