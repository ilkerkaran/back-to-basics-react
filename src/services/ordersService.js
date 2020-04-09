export const postOrder = async (axios, order) => axios.post('/orders.json', order);

export const getOrders = async (axios) => axios.get('/orders.json');
