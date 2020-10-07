const inputValue = document.getElementById("inputValue");
const Button = document.getElementById("Button");
//api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

Button.addEventListener("click", function () {
  // const proxy = "https://cors-anywhere.herokuapp.com/";
  const apibase = "https://api.openweathermap.org/data/2.5/weather";
  const apiKey = "b3f3423fb2e349655c5cc014272b856d";
  const url = `${apibase}?q=${inputValue.value}&units=metric&appid=${apiKey}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => display(data));
});
function display(data) {
  document.getElementById("temp").innerText = data.main.temp;
  document.getElementById("city").innerText = data.name;
  document.querySelector(".lead").innerText = data.weather[0].main;
  document
    .getElementById("icon")
    .setAttribute(
      "src",
      `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    );
  document.getElementById("inputValue").value = "";
  console.log(
    `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
  );
  console.log(data);
}
