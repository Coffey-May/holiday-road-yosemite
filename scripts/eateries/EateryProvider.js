let eateries = []

// DECLARE AND EXPORT A FUNCTION NAMED USEPARKS THAT RETURNS OUR NEW PARKS ARRAY
export const useEateries= () => {
    return eateries
}

// DECLARE AND EXPORT A FUNCTION CALLED GETPARKS THAT FETCHES OUR API DATA, MAKES IT ITERABLE.
// THEN POPULATES IT AS THE CONTENT OUR OUR ORIGINAL ARRAY CALLED PARKS
export const getEateries = () => {
  return fetch('http://holidayroad.nss.team/eateries')
  .then(response => response.json()
  )
  .then(
      parsedEateries => {
          
          eateries = parsedEateries.slice()
      }
  )
}



