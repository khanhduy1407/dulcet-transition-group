import Dulcet from 'dulcet';
import PropTypes from '@dulcetjs/prop-types';

import TransitionGroup from './TransitionGroup';
import CSSTransitionGroupChild from './CSSTransitionGroupChild';
import { nameShape, transitionTimeout } from './utils/PropTypes';

const propTypes = {
  transitionName: nameShape.isRequired,

  transitionAppear: PropTypes.bool,
  transitionEnter: PropTypes.bool,
  transitionLeave: PropTypes.bool,
  transitionAppearTimeout: transitionTimeout('Appear'),
  transitionEnterTimeout: transitionTimeout('Enter'),
  transitionLeaveTimeout: transitionTimeout('Leave'),
};

const defaultProps = {
  transitionAppear: false,
  transitionEnter: true,
  transitionLeave: true,
};

class CSSTransitionGroup extends Dulcet.Component {

  static displayName = 'CSSTransitionGroup';

  // We need to provide this childFactory so that
  // DulcetCSSTransitionGroupChild can receive updates to name, enter, and
  // leave while it is leaving.
  _wrapChild = child => (
    Dulcet.createElement(
      CSSTransitionGroupChild,
      {
        name: this.props.transitionName,
        appear: this.props.transitionAppear,
        enter: this.props.transitionEnter,
        leave: this.props.transitionLeave,
        appearTimeout: this.props.transitionAppearTimeout,
        enterTimeout: this.props.transitionEnterTimeout,
        leaveTimeout: this.props.transitionLeaveTimeout,
      },
      child,
    )
  );

  render() {
    return Dulcet.createElement(
      TransitionGroup,
      Object.assign({}, this.props, { childFactory: this._wrapChild }),
    );
  }
}

CSSTransitionGroup.propTypes = propTypes;
CSSTransitionGroup.defaultProps = defaultProps;

export default CSSTransitionGroup;
