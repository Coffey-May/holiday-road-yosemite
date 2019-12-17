const EateryComponent = (eatery) => {
    // let eateryName = eatery.businessName.split(" ").join("_")

    return `
    <section class="eatery-card">
    <header class="eateryFullName">${eatery.fullname}</header>
<br>
<div class ="eateryInformation">
  <ul>
  <li>${eatery.description}</li>
  <li>${eatery.state}</li>
  <li>${eatery.city}</li>
  <li>${eatery.amenities}</li>
  </ul>
   </div>
   </section>
`
}

export default EateryComponent