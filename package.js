Package.describe({
  name: 'grabthecode:inappnotifications',
  version: '1.0.0',
  summary: 'InAppNotifications package handles post action message to notify the user of a success or error.',
  git: 'git@github.com:grabcode/meteor-inappnotifications.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.3.1');

  api.use(['underscore', 'templating', 'tracker', 'jquery'], 'client');

  api.export('InAppNotifs');

  api.addFiles([
    'notifications.html',
    'notifications.css',
    'notifications.js'
  ], 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('grabthecode:inappnotifications');
  api.addFiles('grabthecode:inappnotifications-tests.js');
});
