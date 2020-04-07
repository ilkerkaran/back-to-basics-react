import ReactRouterPropTypes from 'react-router-prop-types';
import PropTypes from 'prop-types';

export const inputTypes = ['text', 'select', 'number', 'textArea'];
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
    bacon: PropTypes.number,
    cheese: PropTypes.number,
    salad: PropTypes.number,
    meat: PropTypes.number
  }).isRequired
};

export const contactDataTypes = {
  contactData: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    address: PropTypes.string,
    postal: PropTypes.string
  }).isRequired
};

export const orderDataTypes = {
  ...ingredientTypes.isRequired,
  ...contactDataTypes.isRequired,
  orderDate: PropTypes.instanceOf(Date).isRequired,
  totalPrice: PropTypes.number.isRequired
};

export const selectOptionTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
};


const inputConfig = PropTypes.shape({
  inputType: PropTypes.oneOf(inputTypes),
  inputName: PropTypes.string.isRequired,
  isRequired: PropTypes.bool,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  value: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.shape(selectOptionTypes)),
  register: PropTypes.func

}).isRequired;

export const inputConfigTypes = {
  inputConfig
};

export const inputConfigsTypes = {
  inputConfigs: PropTypes.arrayOf(inputConfig)
};
