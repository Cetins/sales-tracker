const baseURL = 'http://localhost:9000/api/products/'

const ProductService = {
    getProducts() {
      return fetch(baseURL)
      .then(res => res.json());
    },

    updateProduct(product) {
      return fetch(baseURL + product._id, {
        method: 'PUT',
        body: JSON.stringify(product),
        headers: {'Content-Type': 'application/json'}
      })
      .then(res => res.json());
    },

    addProduct(product) {
      return fetch(baseURL, {
        method: 'POST',
        body: JSON.stringify(product),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(res => res.json());
    },

    deleteProduct(id) {
      return fetch(baseURL + id, {
        method: 'DELETE'
      });
    }
}

export default ProductService;