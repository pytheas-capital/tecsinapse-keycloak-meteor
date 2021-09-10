Npm.depends({
  'tecsinapse-keycloak-js': '2.0.9',
  'node-fetch': '2.1.2'
});

Package.describe({
  name: 'pytheas:keycloak-meteor',
  version: '0.0.18',
  summary: 'Keycloak login integrated with Accounts',
  git: 'https://github.com/pytheas-capital/tecsinapse-keycloak-meteor.git',
  documentation: 'README.md'
});

Package.onUse((api) => {
  api.versionsFrom('1.4');
  api.use('ecmascript');
  api.use('service-configuration@1.1.0');
  api.use('accounts-base@2.0.0');
  api.mainModule('client.js', 'client');
  api.mainModule('server.js', 'server');
});
