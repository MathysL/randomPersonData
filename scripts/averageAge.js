// Using globals now
// fix this with a curried function. https://javascript.info/currying-partials
const calculateAverageAgeForCountry = country => {
    const peopleFromCountry = randomPersonData.filter(
        person => person.region === country
    );

    const amountOfPeople = peopleFromCountry.length;
    if (amountOfPeople === 0) {
        // done nobody to count
        return 0;
    }

    const totalAge = peopleFromCountry.reduce(
        (sum, current) => sum + current.age,
        0
    );

    return Math.round(totalAge / amountOfPeople);
};

const displayAverageAgeForCountry = () => {
    emptyResultList();

    const country = event.target.value;
    const average_age = calculateAverageAgeForCountry(country);
    const li = document.createElement("li");
    li.innerHTML = `The average age for ${country} is ${average_age}`;
    addToResultList(li);
};

const getCountryButtonHTML = country => {
    const button = document.createElement("input");
    button.type = "button";
    // countries
    button.value = country;
    button.addEventListener("click", displayAverageAgeForCountry);
    return button;
};

const displayAverageAgeButtons = () =>
    getCountries(randomPersonData)
        .map(getCountryButtonHTML)
        .forEach(addToButtonList);

document
    .querySelector(".averageAge")
    .addEventListener("click", displayAverageAgeButtons);