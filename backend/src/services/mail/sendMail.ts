import { BadRequest } from '../../errors'
import transporter from './transporter'

const sendMail = async (recipientMail: string, accessPassword: string) => {
  const response = await transporter.sendMail({
    from: '"NoReply Student Affairs" <noreply@gmail.com>',
    to: recipientMail,
    subject: "Email verification",
    text: `Hello there 👋😊\nYour registration process is complete\nRegistered mail: ${recipientMail}\nAccess password: ${accessPassword}`,
    html: `
      <body style="text-align: center; display: flex; flex-direction: column; align-items: center; height: 100vh; gap: 5px">
        <h1>Email verification</h1>
        <h3>Hello there 👋😊,<br/>You registration process is complete,</h3>
        <br style="margin-bottom: 5px"/>
        <p style="color: #3081ed; font-size: 32px">Your access password: ${accessPassword}</p>
        <p style="margin-bottom:10px">Your email: ${recipientMail}</p>
        <p>If you did not request this, please ignore this email</p>
      </body>
    `,
  }).then((info: any) => {
    console.log('Message sent successfully');
  }).catch((err: Error) => {
    throw new BadRequest(err.message);
  });

  return response;
};

export default sendMail;

