export const getGeolocation = () => {
  return navigator.geolocation.getCurrentPosition(success, error);
};

const success = pos => {
  return{
    lat: pos.coords.latitude,
    lon: pos.coords.longitude
  }
};

const error = err => {
  console.log(`ERROR(${err.code}): ${err.message}`);
};
