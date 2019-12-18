const attractionComponent = (attraction) => {


    return `
    <section class="attraction-card">
    <header class="attractionFullName">${attraction.name}</header>
<br>
<div class ="attractionInformation">
   </div>
   <div class="attractionDialogButton">
            <button class="attractionDialogButton" id="attraction--${attraction.id}">Additional Details</button>
            <dialog class="dialog--button" id="details--${attraction.id}">
                <div>More Details</div>
                <ul>
                <li>${attraction.description}</li>
                <li>${attraction.state}</li>
                <li>${attraction.city}</li>
                <li>${attraction.ameneties.restrooms}</li>
                </ul>
                        <div>Description:</div>
                        <div>Events:</div>
                <button class="button--close">Close Details</button>
            </dialog>
   
   </section>
`
}

export default attractionComponent