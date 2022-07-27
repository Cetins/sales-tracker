use sale_tracker;
db.dropDatabase();

db.shop.insertMany([
    {
        name: "My Shop Ltd",
        email: "myshop@mail.com"
    }
])

db.products.insertMany([
    {
        title: "test product1",
        manufacturer: "company ltd",
        price: 10,
        sale_price: 10,
        stock: 23
    },
    {
        title: "test product2",
        manufacturer: "company ltd",
        price: 10,
        sale_price: 10,
        stock: 9
    },
    {
        title: "test product3",
        manufacturer: "company ltd",
        price: 12,
        sale_price: 10,
        stock: 8
    },
    {
        title: "test product4",
        manufacturer: "company ltd",
        price: 15,
        sale_price: 10,
        stock: 3
    },
    {
        title: "test product5",
        manufacturer: "company ltd",
        price: 15,
        sale_price: 10,
        stock: 3
    }
])

db.services.insertMany([
    {
        title: "test service1",
        duration: 20,
        price: 15
    },
    {
        title: "test service2",
        duration: 20,
        price: 20
    },
    {
        title: "test service3",
        duration: 30,
        price: 25
    },
    {
        title: "test service4",
        duration: 45,
        price: 35
    },
    {
        title: "test service5",
        duration: 90,
        price: 70
    },
])

db.staff.insertMany([
    {
        name: "staff 1",
        sales: 0,
        service_commission: 0,
        product_commission: 10,
    },
    {
        name: "staff 2",
        sales: 0,
        service_commission: 10,
        product_commission: 50,
    }
])

db.sales.insertMany([
    {
        category: "service",
        title: "test service3",
        price: 30,
        staff: "staff 2",
        staffId: 1234,
        date: "01/01/2022"
    },
    {
        category: "product",
        title: "test product5",
        manufacturer: "company ltd",
        price: 5,
        sale_price: 10,
        staff: "staff 1",
        staffId: 5678,
        date: "01/01/2022"
    }
])