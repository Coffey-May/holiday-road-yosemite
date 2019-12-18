// DECLARE AN EMPTY ARRAY STORED IN A VARIABLE NAMED PARKS.
import settings from "../Settings.js"
let parks = []

// DECLARE AND EXPORT A FUNCTION NAMED USEPARKS THAT RETURNS OUR NEW PARKS ARRAY
export const useParks = () => {
    return parks
}

// DECLARE AND EXPORT A FUNCTION CALLED GETPARKS THAT FETCHES OUR API DATA, MAKES IT ITERABLE.
// THEN POPULATES IT AS THE CONTENT OUR OUR ORIGINAL ARRAY CALLED PARKS


export const getParks = (selectedState) => {
    return fetch(`https://developer.nps.gov/api/v1/parks?stateCode=${selectedState}&fields=addresses&sort=states&fields=images&api_key=${settings.npsKey}`)
        .then(response => response.json()
        )
        .then(
            parsedParks => {

                console.table(parsedParks)
                parks = parsedParks.data.slice()
                    .sort(function (a, b) {
                        var nameA = a.states.toUpperCase(); // ignore upper and lowercase
                        var nameB = b.states.toUpperCase(); // ignore upper and lowercase
                        if (nameA < nameB) {
                            return -1;
                        }
                        if (nameA > nameB) {
                            return 1;
                        }

                        // names must be equal
                        return 0;
                    });;
            }
        )
}
