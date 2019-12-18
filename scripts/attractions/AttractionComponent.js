const attractionComponent = (attraction) => {


    return `
    <section class="attraction-card">
    <header class="attractionFullName">${attraction.name}</header>
<br>
<div class ="attractionInformation">
  <ul>
  <li>${attraction.description}</li>
  <li>${attraction.state}</li>
  <li>${attraction.city}</li>
  <li>${attraction.ameneties.restrooms}</li>
  </ul>
   </div>
   <div class="attractionButton">
    <button id="button--${attraction.name.split(" ").join("-")}">Attraction Button</button>
    <dialog class='dialog--attraction_button' id='details--${attraction.name.split(" ").join("-")}'>
      <h3>Known Associates</h3>
      <div class="dialog__name">${attraction.attraction__button.map((ass) =>{return ass.name}).join(", ")}</div>
      <h3>Alibi</h3>
      <div class="dialog__alibi">${criminals.known_associates.map((ass)=>{return ass.alibi}).join(", ")}</div>
      <button class='button--close' id='close-${criminals.known_associates}'>Close Dialog</button>
      </dialog>
      </div>

   </section>
`
}

export default attractionComponent