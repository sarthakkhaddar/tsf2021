const mongoose = require('mongoose');
const User = require('./models/user');

//. DB - test //
//. COLLECTION - users //

mongoose.connect('mongodb+srv://sarthak:rishi@cluster0.ib0gr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to DB!'))
.catch(error => console.log(error.message));

// const u = new User({
//     name: 'Rishabh',
//     email: 'rishabh02@gmail.com',
//     credits: 4000
// })
// u.save()
//     .then(u =>{
//         console.log(u);
//     })
//     .catch(e =>{
//         console.log(e);
//     })


const seedUsers = [
    {
        name: 'Shaurya',
        email: 'shaurya170401@gmail.com',
        credits: 10000
    },
    {
        name: 'Aman',
        email: 'aman9@yahoo.com',
        credits: 7000
    },
    {
        name: 'Yash',
        email: 'yashkm@gmail.com',
        credits: 4500
    },
    {
        name: 'Arpan',
        email: 'arpan1@yahoo.com',
        credits: 8600
    },
    {
        name: 'Akhil',
        email: 'akhilp0@gmail.com',
        credits: 7500
    },
    {
        name: 'Shiva',
        email: 'shiva@yahoo.com',
        credits: 6900
    },
    {
        name: 'Manish',
        email: 'manish09@gmail.com',
        credits: 3000
    },
    {
        name: 'Sarthak',
        email: 'sarthak32@yahoo.com',
        credits: 2100
    },
    {
        name: 'Rohit',
        email: 'rohit87@gmail.com',
        credits: 5300
    },
	{
        name: 'Harsh',
        email: 'harsh44@gmail.com',
        credits: 7300
    }
]


function seedDB(){
	User.remove({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("removed users!");
	});
	seedUsers.forEach(function(seed){
                User.create(seed, function(err, user){
                    if(err){
                        console.log(err)
                    } else {
                        console.log("added a user");
					}
				});
});
}

module.exports = seedDB;				  