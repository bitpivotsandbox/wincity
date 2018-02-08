module.exports = {
  'Demo test mcmillion.io': function (browser) {
    browser
      .url('http://mcmillion.io')
      .waitForElementVisible('body', 1000)
      .assert.containsText('.tagline', 'Full Stack Developer')
      .end();
  },
};
