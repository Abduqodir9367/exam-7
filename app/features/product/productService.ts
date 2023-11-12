import axios from 'axios';

// Get students
const getProducts = async () => {
  const res = await axios.get(
    'https://654ea70d358230d8f0ccbf59.mockapi.io/api/v1/Dishes'
  );
  return res.data;
};



const productService = {
  getProducts,
};

export default productService;