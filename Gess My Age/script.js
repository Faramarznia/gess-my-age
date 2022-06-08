let now = 2022
const myAge = now - 2002;
console.log(myAge);

document.querySelector(".checkbutton").addEventListener("click", function () {
  const guessMyAge = Number(document.querySelector(".check").value);
  if (guessMyAge < myAge) {
    document.querySelector(".message").textContent =
      " دیگه والا انقدرم بچه نیستم ";
  } else if (guessMyAge == myAge) {
    document.querySelector(".message").textContent =
      "باریکلا چقدر شما باهوشی واقعا آفرین";
  } else if (guessMyAge > myAge) {
    document.querySelector(".message").textContent =
      "خیلی دیگه پیرم کردی , این زندگی دیگه فایده نداره";
  }
});
