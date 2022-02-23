import bcrypt from "bcryptjs";

const data = {
    users: [ /*This is an Array of users*/
        {
            name: 'Alessandro',
            email: 'admin@example.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: true,
        },
        {
            name: 'Alessandra',
            email: 'user@example.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: false,
        },
    ],
    products:[ /*This is an Array of products*/
        {
        
            name:'HellBlade Kitchen',
            category:'Kitchen',
            image:'/images/p1.jpg',
            price:80,
            countInStock:10,
            brand:'HellBlade',
            rating:4.5,
            numReviews:10,
            description:'High quality kitchen knifes, 6 pcs.'
        },
        {
            
            name:'Speedos Runnning shoes',
            category:'Shoes',
            image:'/images/p2.jpg',
            price:55,
            countInStock:20,
            brand:'Speedos',
            rating:5.0,
            numReviews:23,
            description:'Nice and affordable premium quality running shoes.'
        },
        {
            
            name:'Xbox one controller',
            category:'Gaming',
            image:'/images/p3.jpg',
            price:60,
            countInStock:6,
            brand:'HellBlade',
            rating:4.0,
            numReviews:12,
            description:'Xbox one controller, white edition'
        },
        {
            
            name:'Scream&Shout - Microphone',
            category:'Music',
            image:'/images/p4.jpg',
            price:30,
            countInStock:0,
            brand:'HScream&Shout',
            rating:3.5,
            numReviews:41,
            description:'Good looking, entry-level microphone for singing and streaming!'
        },
        {
            
            name:'SeatDown! Sofa',
            category:'House',
            image:'/images/p5.jpg',
            price:150,
            countInStock:3,
            brand:'SeatDown!',
            rating:4.6,
            numReviews:3,
            description:'Comfortable couch, cream color, made out of leather'
        },
    ],
};

export default data;