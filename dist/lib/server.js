'use strict';

var _koa = require('koa');

var _koa2 = _interopRequireDefault(_koa);

var _koaRouter = require('koa-router');

var _koaRouter2 = _interopRequireDefault(_koaRouter);

var _mediumSdk = require('medium-sdk');

var _mediumSdk2 = _interopRequireDefault(_mediumSdk);

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new _bluebird2.default(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return _bluebird2.default.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

const app = new _koa2.default();
const router = new _koaRouter2.default();

router.get('/', (() => {
  var _ref = _asyncToGenerator(function* (ctx) {
    const client = new _mediumSdk2.default.MediumClient({
      clientId: 'c6fb77ae1fe7',
      clientSecret: 'Y20b53c7ca25f1588ff07a8161ca55a18e9e79f90'
    });

    _bluebird2.default.promisify(client.exchangeAuthorizationCode);
    _bluebird2.default.promisify(client.getUser);

    const redirectURL = 'https://md-markdown.herokuapp.com/callback/medium';

    const url = client.getAuthorizationUrl('secretState', redirectURL, [_mediumSdk2.default.Scope.BASIC_PROFILE, _mediumSdk2.default.Scope.PUBLISH_POST, 'uploadImage']);

    ctx.redirect(url);
  });

  return function (_x) {
    return _ref.apply(this, arguments);
  };
})());

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000);