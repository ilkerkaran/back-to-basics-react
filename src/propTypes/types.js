import ReactRouterPropTypes from 'react-router-prop-types';
import PropTypes from 'prop-types';

export const routerTypes = (
  {
  // You can chain any of the above with `isRequired` to make sure a warning
  // is shown if the prop isn't provided.
    history: ReactRouterPropTypes.history,
    location: ReactRouterPropTypes.location,
    match: ReactRouterPropTypes.match,
    route: ReactRouterPropTypes.route // for react-router-config
  });


export const ingredientTypes = {

  ingredients: PropTypes.shape({
    bacon: PropTypes.number, cheese: PropTypes.number, salad: PropTypes.number, meat: PropTypes.number
  }).isRequired
};
