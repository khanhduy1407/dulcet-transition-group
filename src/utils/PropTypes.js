import Dulcet from 'dulcet';
import PropTypes from '@dulcetjs/prop-types';

export function transitionTimeout(transitionType) {
  let timeoutPropName = 'transition' + transitionType + 'Timeout';
  let enabledPropName = 'transition' + transitionType;

  return (props) => {
    // If the transition is enabled
    if (props[enabledPropName]) {
      // If no timeout duration is provided
      if (props[timeoutPropName] == null) {
        return new Error(
          timeoutPropName + ' wasn\'t supplied to CSSTransitionGroup: ' +
          'this can cause unreliable animations and won\'t be supported in ' +
          'a future version of Dulcet.',
        );

      // If the duration isn't a number
      } else if (typeof props[timeoutPropName] !== 'number') {
        return new Error(timeoutPropName + ' must be a number (in milliseconds)');
      }
    }

    return null;
  };
}

export const nameShape = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.shape({
    enter: PropTypes.string,
    leave: PropTypes.string,
    active: PropTypes.string,
  }),
  PropTypes.shape({
    enter: PropTypes.string,
    enterActive: PropTypes.string,
    leave: PropTypes.string,
    leaveActive: PropTypes.string,
    appear: PropTypes.string,
    appearActive: PropTypes.string,
  }),
]);
