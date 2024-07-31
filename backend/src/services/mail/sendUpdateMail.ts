import transporter from "./transporter";
import { BadRequest } from '../../errors'

const sendUpdateMail = async (recipientMail: string, accessPassword: string) => {
  const response = await transporter.sendMail({
    from: '"NoReply Student Affairs" <noreply@gmail.com>',
    to: recipientMail,
    subject: "Password reset",
    text: `Hello there again 👋😊\nYou requested a password reset\nRegistered mail: ${recipientMail}\nNew password: ${accessPassword}`,
    html: `
      <body style="text-align: center; display: flex; flex-direction: column; justify-content: center; align-items: center; min-height: 100vh">
        <h1>Email verification</h1>
        <h3>Hello there again 👋😊,<br/>You requested a password reset,</h3>
        <br style="margin-bottom: 5px"/>
        <p style="color: #3081ed; font-size: 32px">Your new password: ${accessPassword}</p>
        <p style="margin-bottom:10px">Your email: ${recipientMail}</p>
        <p>If you did not request this, please ignore this email</p>
      </body>
    `,
  }).then((info: any) => {
    return { state: true, message: 'Message sent successfully' };
  }).catch((err: Error) => {
    throw new BadRequest(err.message);
  });
  return response;
}


export default sendUpdateMail;

