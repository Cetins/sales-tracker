const baseURL = 'http://localhost:9000/api/sales/'

const SalesService = {
  getSales() {
    return fetch(baseURL)
    .then(res => res.json());
  },

  updateSales(sale) {
    return fetch(baseURL + sale._id, {
        method: 'PUT',
        body: JSON.stringify(sale),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => res.json());
  },

  addSale(sale) {
    return fetch(baseURL, {
      method: 'POST',
      body: JSON.stringify(sale),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json());
  },

  deleteSale(id) {
    return fetch(baseURL + id, {
      method: 'DELETE'
    });
  }
}

export default SalesService;