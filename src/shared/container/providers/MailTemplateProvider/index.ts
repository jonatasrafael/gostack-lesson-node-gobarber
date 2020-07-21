import { container } from 'tsyringe';

import IMailTemplateProvider from './models/IMailTemplateProvider';

import HandlebatsMailTemplateProvider from './implementations/HandlebatsMailTemplateProvider';

const providers = {
  handlebars: HandlebatsMailTemplateProvider,
};

container.registerSingleton<IMailTemplateProvider>(
  'MailTemplateProvider',
  providers.handlebars,
);
