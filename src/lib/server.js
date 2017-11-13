import Koa from 'koa';
import Router from 'koa-router';
import medium from 'medium-sdk';
import Promise from 'bluebird';

const app = new Koa();
const router = new Router();

router.get('/', async (ctx) => {
  const client = new medium.MediumClient({
    clientId: 'c6fb77ae1fe7',
    clientSecret: 'Y20b53c7ca25f1588ff07a8161ca55a18e9e79f90',
  });

  Promise.promisify(client.exchangeAuthorizationCode);
  Promise.promisify(client.getUser);

  const redirectURL = 'https://md-markdown.herokuapp.com/callback/medium';

  const url = client.getAuthorizationUrl('secretState', redirectURL, [
    medium.Scope.BASIC_PROFILE,
    medium.Scope.PUBLISH_POST,
    'uploadImage',
  ]);

  ctx.redirect(url);
});

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(3000);
