use sale_tracker;
db.dropDatabase();

db.shop.insertMany([
    {
        name: "myshop",
        email: "myshop@mail.com"
    }
])

db.products.insertMany([
    {
        title: "test product1",
        manufacturer: "company ltd",
        price: 5,
        sale_price: 10,
        stock: 3
    },
    {
        title: "test product2",
        manufacturer: "company ltd",
        price: 5,
        sale_price: 10,
        stock: 3
    },
    {
        title: "test product3",
        manufacturer: "company ltd",
        price: 5,
        sale_price: 10,
        stock: 3
    },
    {
        title: "test product4",
        manufacturer: "company ltd",
        price: 5,
        sale_price: 10,
        stock: 3
    },
    {
        title: "test product5",
        manufacturer: "company ltd",
        price: 5,
        sale_price: 10,
        stock: 3
    }
])

db.services.insertMany([
    {
        title: "test service1",
        duration: 45,
        price: 15
    },
    {
        title: "test service2",
        duration: 45,
        price: 15
    },
    {
        title: "test service3",
        duration: 45,
        price: 15
    },
    {
        title: "test service4",
        duration: 45,
        price: 15
    },
    {
        title: "test service5",
        duration: 45,
        price: 15
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
        title: "test service",
        price: 15,
        staff: "test staff",
        date: "01/01/2022"
    },
    {
        category: "product",
        title: "test product5",
        manufacturer: "company ltd",
        price: 5,
        sale_price: 10,
        date: "01/01/2022"
    }
])