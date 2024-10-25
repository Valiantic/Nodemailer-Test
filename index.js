const nodemailer = require('nodemailer');

// Setup your SMTP transport service
const transporter = nodemailer.createTransport({
    service: 'Gmail',  // You can use other services like 'SendGrid', 'Outlook', etc.
    auth: {
      user: 'johndoe@gmail.com', // Your email
      pass: 'app_password'   // Your email password or App-specific password for Gmail
      // NOTE: The app password can be obtained by enabling 2-step verification on your Gmail account
      // and then generating an app-specific password for the app you want to
    }
  });

transporter.sendMail({
    from: 'johndoe@gmail.com',
    to: 'johndoe@gmail.com',
    subject: 'NodeMailer Test',
    text: 'This is a test email from NodeMailer for the creation of an AI Powered Ecommerce Website',
  }, (err, info) => {
    if (err) {
      console.log('Error sending test email: ', err);
    } else {
      console.log('Test email sent: ', info.response);
    }
  });
  