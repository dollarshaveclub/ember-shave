/* jshint node: true */
'use strict';
const fastbootTransform = require('fastboot-transform');

module.exports = {
  name: 'ember-shave',

  options: {
    nodeAssets: {
      shave: {
        vendor: {
          include: ['dist/shave.js'],
          processTree(input) {
            return fastbootTransform(input);
          },
        },
      },
    },
  },
};
