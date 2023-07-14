$(document).ready(onReady);


/* <button id ="fire">🔥</button> */
/* <button id ="snow">❄️</button> */
/* <input id="aff"
placeholder="Affirmation"
type="text">
<input id="author"
placeholder="Author"
type="text">
<button class="submit-button">Submit</button> */

function onReady() {
  console.log('Hey jQuery!');

  $("#fire").on("click", addFire);
  $("#snow").on("click", addSnow);

  $(".submitButton").on("click", handleSubmit)
  $("#Affirmations").on('click', '.deleteButton', deleteAffirmation)

}



function addFire() {
  $("#fire").append(`<button id ="fire">🔥</button>`);
}

function addSnow() {
  $("#snow").append(`<button id ="snow">❄️</button>`);
}


//Part II
function handleSubmit(event) {
  event.preventDefault();
  const aff = $("#aff").val();
  const author = $("#author").val();
  //$("#submi")
  $("#Affirmations").append(`<tr><td>${aff}</td> <td>${author}</td><td><button class="deleteButton">❌</button></td></tr>`);
}

function deleteAffirmation() {
  //remove the list item from the parent
  $(this).parent().parent().remove()

}