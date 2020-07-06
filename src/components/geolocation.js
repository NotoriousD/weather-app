export const getGeolocation = () => {
  navigator.geolocation.getCurrentPosition(success, error);
};

const success = pos => {
  console.log(pos);
};

const error = err => {
  console.log(`ERROR(${err.code}): ${err.message}`);
};
