Fliplet().then(function() {
  var appId = Fliplet.Env.get('appId');

  $(window).on('resize', Fliplet.Widget.autosize);

  $('#callback').val(appId ?
    Fliplet.Env.get('apiUrl') + 'v1/session/providers/oauth2/callback?appId=' + appId + '&auth_token=' + Fliplet.User.getAuthToken() :
    'App ID invalid'
  );

  $('form').submit(function(event) {
    event.preventDefault();

    Fliplet.Widget.save({
      client: {
        id: $('[name="client_id"]').val(),
        secret: $('[name="client_secret"]').val()
      },
      auth: {
        tokenHost: $('[name="token_host"]').val()
      }
    }).then(function() {
      Fliplet.Widget.complete();
    });
  });

  // Fired from Fliplet Studio when the external save button is clicked
  Fliplet.Widget.onSaveRequest(function() {
    $('form').submit();
  });

  Fliplet.Widget.autosize();
});
