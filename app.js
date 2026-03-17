const API_KEY = "xxxxxxxx";
const BASE_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}/pair`;

const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");



for (let select of dropdowns) {
    for (let currCode in countryList) {
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;

        if (select.name === "from" && currCode === "USD")
            newOption.selected = "selected";
        else if (select.name === "to" && currCode === "INR")
            newOption.selected = "selected";
        select.append(newOption);
    }
    select.addEventListener("change", (evt) => {
        /*Whenever the user changes the selected option in this dropdown, run this function.
        When the user changes the dropdown*/
        console.log(evt);
        updateFlag(evt.target);
    });
    /*The browser automatically sends an event object (evt),
     That object contains information about what element was changed.
     evt.target refers to the actual element that triggered the event,
in this case — the specific <select> dropdown that the user just changed.*/
}




const updateFlag = (element) => {
    console.log(element);
    let currCode = element.value;
    console.log(currCode);
    
    let countryCode = countryList[currCode];
    console.log(countryCode);
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;
};



const updateExchangeRate = async () => {
    let amount = document.querySelector(".amount input");
    let amtVal = amount.value;

    if (amtVal === "" || amtVal < 1) {
        amtVal = 1;
        amount.value = "1";
    }

    try {
        const URL = `${BASE_URL}/${fromCurr.value}/${toCurr.value}`;
        console.log(fromCurr.value);
        console.log(toCurr.value);
        
        let response = await fetch(URL);
        console.log(response);

        let data = await response.json();
        console.log(data);
        

        if (data.result !== "success") {
            msg.innerText = "Error fetching exchange rate.";
            return;
        }

        let finalAmount = (amtVal * data.conversion_rate).toFixed(2);
        msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
    } catch (error) {
        console.error(error);
        msg.innerText = "Something went wrong. Please try again later.";
    }
}



btn.addEventListener("click", (evt) => {
    console.log(evt);
    console.log(evt.target);
    console.dir(evt);
    console.dir(evt.target);
    evt.preventDefault();  /*prevents reload*/
    updateExchangeRate();
});

window.addEventListener("load", () => {
    updateExchangeRate();  /*When the webpage has fully loaded, run this function*/
});

/*The window object represents your entire browser window — it’s the top-level object for everything on the page.

The "load" event happens when the entire web page has finished loading, including:

all HTML content,all CSS styles,all images,and all scripts.
*/
