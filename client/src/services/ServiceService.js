const baseURL = 'http://localhost:9000/api/services/'

const ServiceService = {
    getServices() {
        return fetch(baseURL)
            .then(res => res.json());
    },

    updateServices(service) {
        return fetch(baseURL + service._id, {
            method: 'PUT',
            body: JSON.stringify(service),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json());
    },

    addService(service) {
        return fetch(baseURL, {
          method: 'POST',
          body: JSON.stringify(service),
          headers: {
            'Content-Type': 'application/json'
          }
        })
          .then(res => res.json());
    },

    deleteService(id) {
        return fetch(baseURL + id, {
          method: 'DELETE'
        });
    }
}

export default ServiceService;