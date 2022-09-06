const baseURL = 'http://localhost:9000/api/shop/'

const ShopService = {
    getShop() {
        return fetch(baseURL)
            .then(res => res.json());
    },

    updateShop(shop) {
        return fetch(baseURL + shop._id, {
            method: 'PUT',
            body: JSON.stringify(shop),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json());
    },

    addShop(shop) {
        return fetch(baseURL, {
          method: 'POST',
          body: JSON.stringify(shop),
          headers: {
            'Content-Type': 'application/json'
          }
        })
          .then(res => res.json());
    },

    deleteShop(id) {
        return fetch(baseURL + id, {
          method: 'DELETE'
        });
    }
}

export default ShopService;