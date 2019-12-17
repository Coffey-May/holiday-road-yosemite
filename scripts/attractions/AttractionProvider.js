let attractions = []

// DECLARE AND EXPORT A FUNCTION NAMED USEPARKS THAT RETURNS OUR NEW PARKS ARRAY
export const useAttractions= () => {
    return attractions
}

// DECLARE AND EXPORT A FUNCTION CALLED GETPARKS THAT FETCHES OUR API DATA, MAKES IT ITERABLE.
// THEN POPULATES IT AS THE CONTENT OUR OUR ORIGINAL ARRAY CALLED PARKS
export const getAttractions = () => {
  return fetch('http://holidayroad.nss.team/bizarreries')
  .then(response => response.json()
  )
  .then(
      parsedAttraction => {
          
          attractions = parsedAttraction.slice()
      }
  )
}



