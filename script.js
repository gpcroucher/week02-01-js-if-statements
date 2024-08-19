// let age = 17;
// let movieRating = "PG";

const ageInput = document.getElementById("ageInput");
const ratingInput = document.getElementById("ratingInput");
const output = document.getElementById("output");
const checkButton = document.getElementById("checkButton");

// checkButton.onclick = `checkAgeRating(${ageInput.value}, ${ratingInput.value})`;
// checkButton.addEventListener(
//   "click",
//   checkAgeRating(ageInput.value, ratingInput.value)
// );

function checkAgeRating(age, movieRating) {
  let message = "";
  console.log("Checking age and rating...");
  if (age >= 18) {
    message = "You can watch any movie because you are 18 or older.";
    console.log("You can watch any movie because you are 18 or older.");
  } else if (age >= 15 && movieRating != "18") {
    message =
      "You can watch the movie because it is suitable for 15-year-olds.";
    console.log(message);
  } else if (age >= 12 && movieRating != "18" && movieRating != "15") {
    message =
      "You can watch the movie because it is suitable for 12-year-olds.";
    console.log(message);
  } else if (movieRating === "U" || movieRating === "PG") {
    message = "You can watch the movie! It is suitable for anyone.";
    console.log(message);
  } else {
    message = "You cannot watch the movie, you are too young.";
    console.log(message);
  }

  output.innerText = message;
}
