const logsModel = require('../models/logs');

const getLogs = async () => {
  return await logsModel.scan().exec();
};

const postLogs = async (request) => {
  if (!request) {
    throw new Error('Missing request object while creating in DB');
  }
  return await logsModel.create(request);
};

module.exports = {
  getLogs,
  postLogs
};