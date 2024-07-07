async function SerchBtn() {
  SerchName = document.getElementById("SerchName").value;
  await fetch("http://www.omdbapi.com/movie?i=${name}tt3896198&apikey=3369afd")
    .then((response) => response.json())
    .then((data) => console.log(data))
    .then((data) => {
      showdata(data);
    });
}
SerchBtn();

function showdata(data) {
  result = document.getElementById("result");
  NewDiv = document.createElement("div");
  NewDiv.innerHTML = `
                      <h2>${data.Year}</h2>
                      <h4>${data.Country}</h4>

  `;
  result.aapendChild(NewDiv);
}
