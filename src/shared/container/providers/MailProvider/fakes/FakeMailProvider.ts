import IMailProvider from '../models/IMailProvider';

interface IMesssage {
  to: string;
  body: string;
}

export default class FakeMailProvider implements IMailProvider {
  private messages: IMesssage[] = [];

  public async sendMail(to: string, body: string): Promise<void> {
    this.messages.push({
      to,
      body,
    });
  }
}