const form = document.querySelector('section.top-banner form');
const input = document.querySelector('.top-banner input');
const msg = document.querySelector('span.msg');
const list = document.querySelector('.ajax-section .cities');

localStorage.setItem(
  'apiKey',
  EncryptStringAES('4d8fb5b93d4af21d66a2948710284366')
);

form.addEventListener('submit', (e) => {
  e.preventDefault();
  getWeatherDataFromApi();
});

// function getWeatherDataFromApi(){}
const getWeatherDataFromApi = async () => {
  // alert("http request gone");
  // input.value = "";
  let tokenKey = DecryptStringAES(localStorage.getItem('apiKey'));
  // console.log(apikey);
  let inputVal = input.value;
  let unitType = 'metric';
  let lang = 'tr';
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${tokenKey}&units=${unitType}`;
};