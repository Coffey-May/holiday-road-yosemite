let itineraries = []

export const saveItinerary = itinerary => {
    return fetch('http://localhost:3000/itineraries', {
       method: "POST",
       headers: {
           "Content-Type": "application/json"
       }, 
       body: JSON.stringify(itinerary)
    })
    .then(getItinerary)
}


export const getItinerary = () => {
    return fetch('http://localhost:3000/itineraries')
      .then(response => response.json())
      .then(itineraryArray => {
          itineraries =itineraryArray.slice()
      }) 
    }


    export const useItineraries = () => {
        return itineraries
    }