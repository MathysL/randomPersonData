const getCapricornWomen = personData =>
    personData
        .filter(isWoman)
        .filter(isOver30)
        .map(addStarSign)
        .filter(isCapricorn)
        .sort(sortByName);

const generateCapricornWomanHTML = ({
    name,
    surname,
    photo,
    age,
    birthday,
}) => {
    // Add age and birthday to make manual checking easier.
    const nameSpan = document.createElement("span");
    nameSpan.innerHTML = `${name} ${surname}`;

    const photoSpan = document.createElement("span");
    photoSpan.innerHTML = photo;

    const ageSpan = document.createElement("span");
    ageSpan.innerHTML = age;

    const birthdaySpan = document.createElement("span");
    birthdaySpan.innerHTML = birthday.dmy;

    const li = document.createElement("li");
    li.appendChild(nameSpan);
    li.appendChild(photoSpan);
    li.appendChild(ageSpan);
    li.appendChild(birthdaySpan);

    return li;
};

const displayCapricornWomen = () => {
    getCapricornWomen(randomPersonData)
        .map(generateCapricornWomanHTML)
        .forEach(addToResultList);
};

document
    .querySelector(".capricornWomen")
    .addEventListener("click", displayCapricornWomen);