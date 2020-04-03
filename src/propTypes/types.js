import ReactRouterPropTypes from 'react-router-prop-types';
import PropTypes from 'prop-types';
import BurgerIngredient from '../components/Burger/BurgerIngredient/BurgerIngredient';

export const routerTypes = (
  {
  // You can chain any of the above with `isRequired` to make sure a warning
  // is shown if the prop isn't provided.
    history: ReactRouterPropTypes.history.isRequired,
    location: ReactRouterPropTypes.location.isRequired,
    match: ReactRouterPropTypes.match.isRequired,
    route: ReactRouterPropTypes.route.isRequired // for react-router-config
  });

export const ingredientTypes = ({

  ingredients: PropTypes.instanceOf(BurgerIngredient).isRequired
});
