






const api_key = "13c608d7174d6a54f24e07729c78e64a";  // Make sure to replace with your actual API key
const inputdata = document.getElementById("inputField");
const showWeather = document.getElementById("showWeather");

const sarchData = async () => {
  showWeather.innerHTML = `<div class="spinner-border text-primary" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>`;

  // Correctly wrap the API_URL in quotes
  const api_url =  `https://api.openweathermap.org/data/2.5/weather?q=${inputdata.value}&appid=${api_key}&units=metric`;



  try {
    const fetchData = await fetch(api_url);
    const response = await fetchData.json();

    console.log(response);

    return showData(response);
  } catch (error) {
    console.error("Error fetching data:", error);
    showWeather.innerHTML = `<h1>Something went wrong.</h1>`;
  }
};

const showData = (data) => {
  if (data.cod == "404") {
    showWeather.innerHTML = `<h1>${data.message}</h1>`;  // Wrap in backticks to use template literals
    return;
  }
  else  {
    showWeather.innerHTML = `
      <img width="80" src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
      <h1>${data.main.temp} C</h1>
      <h3>${data.weather[0].main}</h3>
    <p> ${data.name} </p>
    `; 
 
  }
};








