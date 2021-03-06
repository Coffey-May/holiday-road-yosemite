const attractionComponent = (attraction) => {


    return `
    <section class="attraction-card">
    <header class="attractionFullName">${attraction.name}</header>
    <br>
    <div class="attractionImg">
    <img src="https://www.planetware.com/photos-large/USWY/usa-wyoming-yellowstone-national-park.jpg" alt="">
    </div>
    <div class ="attractionInformation">
   </div>
   <div class="attractionDialogButton">
   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
    <br>
            <button class="attractionDialogButton" id="attraction--${attraction.id}">Additional Details</button>
            <dialog class="dialog--button" id="details--${attraction.id}">
                
                        <ul>
                        
                        <li>Description:  ${attraction.description}</li>
                        <li>State: ${attraction.state}</li>
                        <li>City: ${attraction.city}</li>
                        <li>Ameneties_Restroom: ${attraction.ameneties.restrooms}</li>
                        <li>Attraction: ${attraction.name}</li>
                    </ul>
                <button class="button--close">Close Details</button>
            </dialog>
   
   </section>
`
}

export default attractionComponent