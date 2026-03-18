```
# Currency-Converter
A web-based currency converter that provides accurate, real-time exchange rates through API integration. Designed simply using HTML, CSS, and JavaScript.


**Features**

 -Convert between multiple international currencies

 -Real-time exchange rates using API

 -Dynamic country flags based on selected currency

 -Fast and responsive UI

 -Default value handling (prevents invalid input)

 -Auto update on page load


 **Tech stack**
 
 HTML – Structure of the web page

 CSS – Styling and layout

 JavaScript – Functionality and API handling

 ExchangeRate API – Fetch real-time currency data

 Flags API – Display country flags


**Project Structure**

Currency Converter/
│── index.html      # Main HTML file
│── style.css       # Styling file
│── app.js          # Main logic (API + DOM handling)
│── codes.js        # Currency and country mapping


**Working**

1. User enters an amount

2. Selects From and To currencies

3. Application fetches exchange rate from API

4. Displays the converted value instantly

5. Flags update automatically based on selection


**API Setup**

This project uses:

1. *ExchangeRate API*:
   
Replace API_KEY in app.js with your own API key:

const BASE_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}/pair`;

You can get your free API key from:
https://www.exchangerate-api.com/

2. *Flags API (for country flags)*:
   
uses Flags API to dynamically show flags:

https://flagsapi.com/{COUNTRY_CODE}/flat/64.png

Example:

https://flagsapi.com/US/flat/64.png

🔗 https://flagsapi.com/*
```
