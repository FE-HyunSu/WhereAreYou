import axios from 'axios';
const mapKey = process.env.NEXT_PUBLIC_MAP_KEY;

export const getGeoCode = async (lat: Number, lon: Number) => {
  return await axios.get(
    `/api/req/address?service=address&request=getAddress&point=${lon},${lat}&type=both&zipcode=true&simple=false&key=${mapKey}`
  );
};
