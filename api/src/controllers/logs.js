const joi = require('joi');
const axios = require('axios');
const logsRepository = require('../repositories/logs');

const getLogs = async (req, res) => {
  const response = await logsRepository.getLogs();
  return res.status(200).json(response);
}

module.exports = {
  getLogs,
};