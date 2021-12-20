// JavaScript helpers: The callback we pass into array.sort officially should return 1, 0 or -1
// Firefox does this conversion itself.
// Chrome needs this helper!
function sort_helper(result) {
    // We can make this shorter with a ternary.
    if (result) {
        return 1;
    } else {
        return -1;
    }
}
//cL set or run getCountries in callBackHelpers
// set zodiacs all
function getStarSign(month, day) {
    // Normally adding {} to if statements is better but here's an exception.
    if (month === 1 && day <= 20)
        return CAPRICORN;
    if (month === 1 && day >= 21)
        return AQUARIUS;
    if (month === 2 && day <= 19)
        return AQUARIUS;
    if (month === 2 && day >= 20)
        return PISCES;
    if (month === 3 && day <= 20)
        return PISCES;
    if (month === 3 && day >= 21)
        return ARIES;
    if (month === 4 && day <= 20)
        return ARIES;
    if (month === 4 && day >= 21)
        return TAURUS;
    if (month === 5 && day <= 20)
        return TAURUS;
    if (month === 5 && day >= 21)
        return GEMINI;
    if (month === 6 && day <= 21)
        return GEMINI;
    if (month === 6 && day >= 22)
        return CANCER;
    if (month === 7 && day <= 22)
        return CANCER;
    if (month === 7 && day >= 23)
        return LEO;
    if (month === 8 && day <= 23)
        return LEO;
    if (month === 8 && day >= 24)
        return VIRGO;
    if (month === 9 && day <= 21)
        return VIRGO;
    if (month === 9 && day >= 22)
        return LIBRA;
    if (month === 10 && day <= 22)
        return LIBRA;
    if (month === 10 && day >= 23)
        return SCORPIO;
    if (month === 11 && day <= 21)
        return SCORPIO;
    if (month === 11 && day >= 22)
        return SAGGITARIUS;
    if (month === 12 && day <= 21)
        return SAGGITARIUS;
    if (month === 12 && day >= 22)
        return CAPRICORN;
}
// get zodiac capriWomen
const addStarSign = person => {
    const month = parseInt(person.birthday.dmy.split("/")[1]); // 1..12
    const day = parseInt(person.birthday.dmy.split("/")[0]); // 1..31
    person.sign = getStarSign(month, day);
    return person;
};
//filter funct
const isWoman = person => person.gender === "female";
const isOver30 = person => person.age > 30;
const isCapricorn = person => person.sign === CAPRICORN;
//const isMatch = person => isWoman & isCapricorn & isOver30;
//const isVigro = person => person.sign === VIGRO;
const sortByName = (person1, person2) =>
    sort_helper(person1.name > person2.name);
// A function we pass to array.reduce.
// We could use Set to make this nicer.
const keepUnique = (items, item) => {
    // We don't want the caller to have to pass in an empty array.
    if (!Array.isArray(items)) items = [];
    if (!items.includes(item)) items.push(item);
    return items;
};
const emptyResultList = () =>
    (document.querySelector(".results").innerText = "");

const addToResultList = li =>
    document.querySelector(".results").appendChild(li);

const emptyButtonList = () =>
    (document.querySelector(".sub_buttons").innerText = "");

const addToButtonList = button =>
    document.querySelector(".sub_buttons").appendChild(button);

// on nav button_click , empty the result List.
// ! These buttons have calback helprs and multiple event listeners.
document.querySelectorAll("nav input").forEach(input =>
    input.addEventListener("click", () => {
        emptyResultList();
        emptyButtonList();
    })
);