const EateryComponent = (eatery) => {
    // let eateryName = eatery.businessName.split(" ").join("_")

    return `
    <section class="eatery-card">
    <header class="eateryFullName">${eatery.businessName}</header>
    <br>
    <img src="https://media.nbcdfw.com/2019/09/Dairy-Queen-generico.jpg?resize=850%2C478" alt="">
    <br>
    <div class ="eateryInformation">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
    <br>
    <button class="eateryDialogButton" id="eatery--${eatery.id}">Eatery Details</button>
    <dialog class="dialog--eatery" id="details--${eatery.id}">
    <ul>
    <li>DESCRIPTION:${eatery.description}</li>
    <li>STATE:${eatery.state}</li>
    <li>CITY:${eatery.city}</li>
    <li>PET-FRIENDLY:${eatery.ameneties.petFriendly}</li>
    <li>WIFI:${eatery.ameneties.wifi}</li>
    <li>RESTROOMS:${eatery.ameneties.restrooms}</li>
    </ul>
    <button class="button--close">Close Dialog</button>
   </dialog>
  
  
   </div>
   </section>
`
}

export default EateryComponent