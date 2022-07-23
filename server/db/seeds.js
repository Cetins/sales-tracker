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
        title: "test product",
        manufacturer: "company ltd",
        price: 5,
        sale_price: 10,
        stock: 3
    }
])

db.services.insertMany([
    {
        title: "test service",
        duration: 45,
        price: 15
    }
])

db.staff.insertMany([
    {
        name: "staff member",
        sales: 0,
        commission_percentage: 0
    }
])

db.sales.insertMany([
    {
        category: "service",
        title: "test service",
        price: 15,
        staff: "test staff"
    }
])