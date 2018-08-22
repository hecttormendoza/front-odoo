odoo.define('academy.hamster', function(require) {
  'use strict';

  var Animal = require('academy.animal');
  var DanceMixin = {
    dance: function () {
      console.log('Dancing');
    },
  };
  var Hamster = Animal.extend(DanceMixin, {
    slepp: function () {
      console.log('Sleep');
    },
  });
  var hamster = new Hamster();
  hamster.dance();
  hamster.slepp();
});
