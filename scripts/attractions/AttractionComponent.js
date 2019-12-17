const attractionComponent = (attraction) => {

    return `
    <section class="attractions">
    <div class="attractions__name">${attractions.name}</div>
    <div>class="attraction__state ${attractions.state}</div>
        <div>class="attraction__city ${attractions.city}</div>

</section>
    

            
 
    `
}
    export default attractionComponent