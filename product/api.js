import axios from 'axios';
import Papa from 'papaparse';

export default {
  list: async () => {
    try {
      const response = await axios.get(process.env.SHEET, {
        responseType: 'blob',
      });
      return new Promise((resolve, reject) => {
        Papa.parse(response.data, {
          header: true,
          complete: results => {
            return resolve(
              results.data.map(product => ({
              ...product,
              price: parseInt(product.price)
            }))
            );
          },
          error: error => reject(error.message)
        })
      })
    } catch (error) {
      console.error(error);
    }
    
  },
};
