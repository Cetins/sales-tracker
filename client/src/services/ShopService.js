const baseURL = 'http://localhost:9000/api/products/'

const ShopService = {
    getProducts() {
        return fetch(baseURL)
            .then(res => res.json());
    },

    updateProducts(product) {
        return fetch(baseURL + product._id, {
            method: 'PUT',
            body: JSON.stringify(product),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json());
    }
}

export default ShopService;