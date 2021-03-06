'use strict';

angular.module('copay',[
  'ngRoute',
  'mm.foundation',
  'monospaced.qrcode',
  'copay.header',
  'copay.home',
  'copay.transactions',
  'copay.send',
  'copay.backup',
  'copay.network',
  'copay.signin',
  'copay.peer',
  'copay.storage'
]);

angular.module('copay.header', []);
angular.module('copay.home', []);
angular.module('copay.transactions', []);
angular.module('copay.send', []);
angular.module('copay.backup', []);
angular.module('copay.network', []);
angular.module('copay.signin', []);
angular.module('copay.peer', []);
angular.module('copay.storage', []);

