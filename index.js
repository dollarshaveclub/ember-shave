/* jshint node: true */
const path = require('path');
'use strict';

module.exports = {
  name: 'ember-shave',

  afterInstall() {
    return this.addBowerPackageToProject("shave");
  },

  included(app) {
    this._super(app);

    if (process.env.EMBER_CLI_FASTBOOT) { return; }

    const shavePath = path.join(app.bowerDirectory, "shave/dist/shave.min.js");
    app.import(shavePath);
  }
};
