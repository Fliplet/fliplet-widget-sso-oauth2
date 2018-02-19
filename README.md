# Fliplet SSO OAuth2 App Component

```js
Fliplet.Widget.get('com.fliplet.sso.oauth2')
  .authorize({ foo: 'bar' })
  .then(function onAuthorized() {
    // all good
  })
  .catch(function onError(err) {
    // woop woop
  })
```