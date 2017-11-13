'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mediumSdk = require('medium-sdk');

var _mediumSdk2 = _interopRequireDefault(_mediumSdk);

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new _bluebird2.default(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return _bluebird2.default.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.default = _asyncToGenerator(function* () {
  const client = new _mediumSdk2.default.MediumClient({
    clientId: 'c6fb77ae1fe7',
    clientSecret: 'Y20b53c7ca25f1588ff07a8161ca55a18e9e79f9'
  });

  _bluebird2.default.promisify(client.exchangeAuthorizationCode);
  _bluebird2.default.promisify(client.getUser);

  const redirectURL = 'https://md-markdown.herokuapp.com/callback/medium';

  console.log(url);

  const url = client.getAuthorizationUrl('secretState', redirectURL, [_mediumSdk2.default.Scope.BASIC_PROFILE, _mediumSdk2.default.Scope.PUBLISH_POST, _mediumSdk2.default.Scope.IMAGE_UPLOAD]);

  // (Send the user to the authorization URL to obtain an authorization code.)

  const token = yield client.exchangeAuthorizationCode('YOUR_AUTHORIZATION_CODE', redirectURL);
  const user = yield client.getUser();

  console.log(token);
  console.log(user);
});