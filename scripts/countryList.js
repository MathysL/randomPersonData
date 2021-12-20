const getCountries = personData =>
    personData
        .map(person => person.region)
        .reduce(keepUnique)
        .sort();
//display scripts follow
const generateCountryHTML = country => {
    const li = document.createElement("li");
    li.innerHTML = country;
    return li;
};

const displayCountries = () =>
    getCountries(randomPersonData)
        .map(generateCountryHTML)
        .forEach(addToResultList);

document
    .querySelector(".countries")
    .addEventListener("click", displayCountries);