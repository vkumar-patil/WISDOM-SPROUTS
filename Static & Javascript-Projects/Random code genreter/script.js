async function getqout() {
  await fetch("https://api.quotable.io/random")
    .then((response) => response.json())
    .then((data) => console.log(data));
}
getqout();
