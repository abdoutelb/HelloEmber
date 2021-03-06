import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('about');
  this.route('parent');

  this.route('parent.child',{path : "parent/child"});
  this.route('todos', function() {
    this.route('details',{path : "/:id"});
  });
});

export default Router;
 