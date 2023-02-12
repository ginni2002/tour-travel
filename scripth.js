const accordionTitles = document.querySelectorAll(".akordian-title");
accordionTitles.forEach((accordionTitle) => {
  accordionTitle.addEventListener("click", () => {
    const height = accordionTitle.nextElementSibling.scrollHeight;
    console.log(height);
    accordionTitle.classList.toggle("active-header");
    if (accordionTitle.classList.contains("active-header")) {
      accordionTitle.nextElementSibling.style.maxHeight = `${height}px`;
    } else {
      accordionTitle.nextElementSibling.style.maxHeight = "0px";
    }
  });
});
const accordionTitlesFlights = document.querySelectorAll(
  ".akordian-title-flights"
);

accordionTitlesFlights.forEach((accordionTitlesFlight) => {
  accordionTitlesFlight.addEventListener("click", () => {
    accordionTitlesFlight.classList.toggle("active-header-flights");
  });
});

const accordionTitlesStays = document.querySelectorAll(".akordian-title-stays");

accordionTitlesStays.forEach((accordionTitlesStay) => {
  accordionTitlesStay.addEventListener("click", () => {
    accordionTitlesStay.classList.toggle("active-header-stays");
  });
});

const accordionTitlesHotels = document.querySelectorAll(
  ".akordian-title-hotels"
);

accordionTitlesHotels.forEach((accordionTitlesHotel) => {
  accordionTitlesHotel.addEventListener("click", () => {
    accordionTitlesHotel.classList.toggle("active-header-hotels");
  });
});

const accordionTitlesTrains = document.querySelectorAll(
  ".akordian-title-trains"
);

accordionTitlesTrains.forEach((accordionTitlesTrain) => {
  accordionTitlesTrain.addEventListener("click", () => {
    accordionTitlesTrain.classList.toggle("active-header-trains");
  });
});

const accordionTitlesHolidays = document.querySelectorAll(
  ".akordian-title-holidays"
);

accordionTitlesHolidays.forEach((accordionTitlesHoliday) => {
  accordionTitlesHoliday.addEventListener("click", () => {
    accordionTitlesHoliday.classList.toggle("active-header-holidays");
  });
});

const accordionTitlesCabs = document.querySelectorAll(".akordian-title-cabs");

accordionTitlesCabs.forEach((accordionTitlesCab) => {
  accordionTitlesCab.addEventListener("click", () => {
    accordionTitlesCab.classList.toggle("active-header-cabs");
  });
});

const accordionTitlesBuses = document.querySelectorAll(".akordian-title-buses");

accordionTitlesBuses.forEach((accordionTitlesBus) => {
  accordionTitlesBus.addEventListener("click", () => {
    accordionTitlesBus.classList.toggle("active-header-buses");
  });
});

const accordionTitlesForexs = document.querySelectorAll(
  ".akordian-title-forexs"
);

accordionTitlesForexs.forEach((accordionTitlesForex) => {
  accordionTitlesForex.addEventListener("click", () => {
    accordionTitlesForex.classList.toggle("active-header-forexs");
  });
});

// Converter Code
// include api for currency change
const api = "https://api.exchangerate-api.com/v4/latest/USD";

// for selecting different controls
var search = document.querySelector(".searchBox");
var convert = document.querySelector(".convert");
var fromCurrecy = document.querySelector(".from");
var toCurrecy = document.querySelector(".to");
var finalValue = document.querySelector(".finalValue");
var finalAmount = document.getElementById("finalAmount");
var resultFrom;
var resultTo;
var searchValue;

// Event when currency is changed
fromCurrecy.addEventListener("change", (event) => {
  resultFrom = `${event.target.value}`;
});

// Event when currency is changed
toCurrecy.addEventListener("change", (event) => {
  resultTo = `${event.target.value}`;
});

search.addEventListener("input", updateValue);

// function for updating value
function updateValue(e) {
  searchValue = e.target.value;
}

// when user clicks, it calls function getresults
convert.addEventListener("click", getResults);

// function getresults
function getResults() {
  fetch(`${api}`)
    .then((currency) => {
      return currency.json();
    })
    .then(displayResults);
}

// display results after convertion
function displayResults(currency) {
  let fromRate = currency.rates[resultFrom];
  let toRate = currency.rates[resultTo];
  finalValue.innerHTML = ((toRate / fromRate) * searchValue).toFixed(2);
  finalAmount.style.display = "block";
}

// when user click on reset button
function clearVal() {
  window.location.reload();
  document.getElementsByClassName("finalValue").innerHTML = "";
}
