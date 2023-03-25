import axios from 'axios'

export const getPlacesData = async (type, sw, ne) => { 

    try {
        //request
        const { data: { data } } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
         //passing thru options as params to api, destructuring data above then returning
            params: {
              bl_latitude: sw.lat,
              tr_latitude: ne.lat,
              bl_longitude: sw.lng,
              tr_longitude: ne.lng,
            },
            headers: {
              'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
              'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
            },
        });
        return data;
    } catch (error) {
        console.log(error)
        // console.log(sw + " : " + ne)
    }
};
