const dynamoose = require('dynamoose');
const tableName = process.env.AUTH_TABLE || 'auth';

const authSchema = new dynamoose.Schema(
  {
    token: {
      type: String,
      required: true,
    },
  },
  {
    saveUnknown: false,
    timestamps: true,
  }
);
const permissions = dynamoose.model(tableName, authSchema);

module.exports = permissions;