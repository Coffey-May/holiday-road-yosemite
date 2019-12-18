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
   </section>
`
}

export default attractionComponent