import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource("rants", {path: '/'}, function() {
    this.resource("rant", {path: "/rant"}, function() {
    });
  });
});

export default Router;
