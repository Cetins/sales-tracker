use sale_tracker;
// db.dropDatabase();

db.shop.insertMany([
    {
        name: "Brush Barbers",
        email: "brushbarbers@mail.com"
    }
])

db.products.insertMany([
    {
        title: "Sea Salt Spray",
        manufacturer: "company ltd",
        price: 18,
        cost: 9,
        stock: 23
    },
    {
        title: "Hair Pomade",
        manufacturer: "company ltd",
        price: 12,
        cost: 4.8,
        stock: 9
    },
    {
        title: "Clay",
        manufacturer: "company ltd",
        price: 12,
        cost: 5,
        stock: 8
    },
    {
        title: "Wax",
        manufacturer: "company ltd",
        price: 15,
        cost: 10,
        stock: 3
    },
    {
        title: "Beard Oil",
        manufacturer: "company ltd",
        price: 15,
        cost: 7,
        stock: 3
    }
])

db.services.insertMany([
    {
        title: "Cut & Style",
        duration: 30,
        price: 35
    },
    {
        title: "Beard Trim",
        duration: 20,
        price: 20
    },
    {
        title: "Kid's Haircut",
        duration: 20,
        price: 25
    },
    {
        title: "Hot Towel Shave",
        duration: 45,
        price: 32
    },
    {
        title: "Vip Pampering Package",
        duration: 90,
        price: 70
    },
])

db.staff.insertMany([
    {
        name: "Husso",
        sales: 0,
        service_commission: 0,
        product_commission: 0,
    },
    {
        name: "Tracey",
        sales: 0,
        service_commission: 50,
        product_commission: 5,
    }
])

db.sales.insertMany([
    // {
    //     category: "service",
    //     title: "test service",
    //     service_id: 121212,
    //     price: 30,
    //     staff: "test staff",
    //     staffId: 1234,
    //     date: "01/01/2022"
    // },
    // {
    //     category: "product",
    //     title: "test product",
    //     product_id: 01234567,
    //     price: 5,
    //     staff: "test staff",
    //     staffId: 1234,
    //     date: "01/01/2022"
    // }
])