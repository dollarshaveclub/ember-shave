import Ember from 'ember';
import layout from '../templates/components/em-shave';

const MAX_HEIGHT = 50;

export default Ember.Component.extend({
  layout,
  classNames: ['em-shave'],
  spaces: true,

  didRender() {
    const maxHeight = this.get('maxHeight') || MAX_HEIGHT;
    this.$().shave(maxHeight, {
      character: this.get('character'),
      spaces: this.get('spaces'),
    });
  },

});
