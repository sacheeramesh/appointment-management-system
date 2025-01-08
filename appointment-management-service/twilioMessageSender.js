
const configs = require('./config');

const { twilioAccountSid, twilioAuthToken, twilioFromPhoneNumber } = configs;

const client = require('twilio')(twilioAccountSid, twilioAuthToken);

const sendMessage = (userName, service, appointmentDate, phoneNumber) => {
    client.messages
        .create({
            to: phoneNumber,
            from: twilioFromPhoneNumber,
            body: `Hi ${userName}, \nYour appointment for ${service} has been created. \n Date: ${new Date(appointmentDate).toLocaleString()}`,
        }).then(message => console.log(message.sid));
}

module.exports = sendMessage;
