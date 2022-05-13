import nodemailer from "nodemailer";
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "2b1191dd1a8204",
    pass: "17cb34e3b95413",
  },
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: "Equipe Feedget <oi.@feedget.com>",
      to: "Rafael Rufino <rafaelrufino.52@gmail.com>",
      subject: subject,
      html: body,
    });
  }
}
