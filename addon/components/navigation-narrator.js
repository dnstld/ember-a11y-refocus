import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { schedule } from '@ember/runloop';

export default class NavigationNarratorComponent extends Component {
  @service router;

  constructor() {
    super(...arguments);

    this.router.on('didTransition', () => {
      schedule('afterRender', this, function () {
        document.body.querySelector('#ember-a11y-refocus-nav-message').focus();
      });
    });
  }
}
