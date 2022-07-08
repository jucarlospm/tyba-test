const dynamoose = require('dynamoose');
const tableName = process.env.LOGS_TABLE || 'logs';
const { v4: uuidv4 } = require('uuid');

const logsSchema = new dynamoose.Schema(
  {
    id: {
      type: String,
      hashKey: true,
      default: uuidv4
    },
    endpoint: {
      type: String,
    },
    body: {
      type: Object,
    },
  },
  {
    saveUnknown: false,
    timestamps: true,
  }
);
const permissions = dynamoose.model(tableName, logsSchema);

module.exports = permissions;