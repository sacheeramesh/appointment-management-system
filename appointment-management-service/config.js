// Read configuration from the environment

// Datbase configruation
const dbHost = `${process.env.dbHost}`;
const dbPassword = `${process.env.dbPassword}`;
const dbName = `${process.env.dbName}`;
const dbPort = `${process.env.dbPort}`;

// Twilio configruation
const twilioAccountSid = `${process.env.twilioAccountSid}`;
const twilioAuthToken = `${process.env.twilioAuthToken}`;
const twilioFromPhoneNumber = `${process.env.twilioFromPhoneNumber}`;

// User Manager configruation
const userManagerServiceUrl = `${process.env.userManagerServiceUrl}`;
const userManagerAPIkey = `${process.env.userManagerAPIkey}`;
module.exports = {
  dbHost,
  dbUser,
  dbPassword,
  dbName,
  dbPort,
  twilioAccountSid,
  twilioAuthToken,
  twilioFromPhoneNumber,
  userManagerServiceUrl,
  userManagerAPIkey,
};
