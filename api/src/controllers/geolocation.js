const joi = require('joi');
const axios = require('axios');

const searchRestaurants = async (req, res) => {
  const schemaGeo = joi.object({
    city: joi.string().required(),
    token: joi.string(),
  });

  const validationResult = schemaGeo.validate(req.body);
  if (validationResult.error) {
    return res.status(400).json(validationResult.error.details);
  }

  const { city } = req.body;
  await axios.get(`${process.env.MAPS_PLACE_ENDPOINT}?query=restaurants%20in%20${city}&key=${process.env.MAPS_API_KEY}`)
  .then(response => {
    return res.status(200).json(response.data.results);
  })
  .catch(e => {
    return res.status(500).json({ error: `We have a problem to get places`});
  });  
}

module.exports = {
  searchRestaurants,
};