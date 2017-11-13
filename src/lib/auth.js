import medium from 'medium-sdk';
import Promise from 'bluebird';

export default async function () {
  const client = new medium.MediumClient({
    clientId: 'c6fb77ae1fe7',
    clientSecret: 'Y20b53c7ca25f1588ff07a8161ca55a18e9e79f9',
  });

  Promise.promisify(client.exchangeAuthorizationCode);
  Promise.promisify(client.getUser);

  const redirectURL = 'https://md-markdown.herokuapp.com/callback/medium';

  console.log(url);

  const url = client.getAuthorizationUrl('secretState', redirectURL, [
    medium.Scope.BASIC_PROFILE,
    medium.Scope.PUBLISH_POST,
    medium.Scope.IMAGE_UPLOAD,
  ]);

  // (Send the user to the authorization URL to obtain an authorization code.)

  const token = await client.exchangeAuthorizationCode('YOUR_AUTHORIZATION_CODE', redirectURL);
  const user = await client.getUser();

  console.log(token);
  console.log(user);
}
