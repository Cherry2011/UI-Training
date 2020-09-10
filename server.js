const express = require('express');
const { ROUTE_CONSTANTS } = require('./helpers/route_constants');
const bodyparser = require("body-parser");
const app = express()
app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())
app.post(ROUTE_CONSTANTS.POST_LOGIN,function(req,res){
    console.log(req.body);
    res.send("Sucessfully Logged In")
})
//route, callback function.
app.get(ROUTE_CONSTANTS.DEFAULT,function (req,res){
res.send("<h1>Welcome to Pega");
});

app.get(ROUTE_CONSTANTS.GET_LOGIN,function (req,res){
res.sendFile(__dirname+'/pages/login.html')
});

app.get(ROUTE_CONSTANTS.GET_REGISTER,function (req,res){
res.sendFile(__dirname+'/pages/registration.html')
})

app.get(ROUTE_CONSTANTS.GET_PRODUCTS,function (req,res){
const productsData=[
    {
      "_id": "5f58617fb8b4f0f280807bcf",
      "index": 0,
      "guid": "107827c5-1621-4d74-922a-a90c052d4608",
      "isActive": false,
      "balance": "$1,265.16",
      "picture": "http://placehold.it/32x32",
      "age": 26,
      "eyeColor": "brown",
      "name": "Zamora Lane",
      "gender": "male",
      "company": "ZOID",
      "email": "zamoralane@zoid.com",
      "phone": "+1 (843) 439-2386",
      "address": "717 Elton Street, Harmon, Federated States Of Micronesia, 1137",
      "about": "Incididunt fugiat occaecat pariatur sint pariatur non minim aute. Est minim sint nisi esse dolore quis qui nulla ullamco incididunt dolore nisi officia deserunt. Adipisicing quis sunt deserunt ut excepteur eiusmod fugiat anim nulla quis dolor tempor aute eu. Nostrud nisi duis eu non elit quis aute nostrud ipsum nisi cillum. Consequat voluptate veniam amet velit Lorem.\r\n",
      "registered": "2017-08-20T04:35:34 -06:-30",
      "latitude": -56.898945,
      "longitude": -78.211159,
      "tags": [
        "aute",
        "magna",
        "in",
        "culpa",
        "aliqua",
        "nostrud",
        "tempor"
      ],
      "friends": [
        {
          "id": 0,
          "name": "Puckett Britt"
        },
        {
          "id": 1,
          "name": "Joanna Powell"
        },
        {
          "id": 2,
          "name": "Bowman Mccray"
        }
      ],
      "greeting": "Hello, Zamora Lane! You have 5 unread messages.",
      "favoriteFruit": "apple"
    },
    {
      "_id": "5f58617ff62df2eaca692410",
      "index": 1,
      "guid": "5f0ca086-b8a4-42e5-90b7-0e5baf924ede",
      "isActive": true,
      "balance": "$1,069.24",
      "picture": "http://placehold.it/32x32",
      "age": 26,
      "eyeColor": "green",
      "name": "Crawford Jensen",
      "gender": "male",
      "company": "QUIZMO",
      "email": "crawfordjensen@quizmo.com",
      "phone": "+1 (972) 589-2478",
      "address": "431 Franklin Avenue, Leland, Wisconsin, 3491",
      "about": "Et veniam laboris proident duis proident occaecat aliquip deserunt reprehenderit commodo aliqua ad reprehenderit occaecat. Aliqua cupidatat in cillum quis minim pariatur ipsum Lorem eiusmod ad adipisicing minim mollit. Ullamco fugiat occaecat nisi non sit anim nulla exercitation. Reprehenderit consequat et magna reprehenderit deserunt aliquip reprehenderit irure tempor pariatur non reprehenderit. Enim qui nostrud eiusmod officia pariatur ipsum dolor excepteur magna sint mollit. Eu reprehenderit nostrud cillum exercitation.\r\n",
      "registered": "2017-03-31T05:56:06 -06:-30",
      "latitude": 70.090798,
      "longitude": -17.735929,
      "tags": [
        "excepteur",
        "tempor",
        "nostrud",
        "anim",
        "tempor",
        "dolor",
        "tempor"
      ],
      "friends": [
        {
          "id": 0,
          "name": "Leach Franklin"
        },
        {
          "id": 1,
          "name": "Odom Snyder"
        },
        {
          "id": 2,
          "name": "Sheree Thomas"
        }
      ],
      "greeting": "Hello, Crawford Jensen! You have 3 unread messages.",
      "favoriteFruit": "banana"
    },
    {
      "_id": "5f58617fde23d785d91e0710",
      "index": 2,
      "guid": "fb4c69a7-4d0e-4c2a-8c0a-0cd4c8146d56",
      "isActive": false,
      "balance": "$1,700.60",
      "picture": "http://placehold.it/32x32",
      "age": 31,
      "eyeColor": "brown",
      "name": "Salazar Bolton",
      "gender": "male",
      "company": "DIGINETIC",
      "email": "salazarbolton@diginetic.com",
      "phone": "+1 (856) 463-3894",
      "address": "291 Barbey Street, Davenport, Alaska, 2278",
      "about": "Voluptate aliqua laboris veniam ea adipisicing. Cillum dolore nostrud tempor culpa commodo est esse commodo fugiat anim. Voluptate enim ipsum tempor excepteur id anim labore nostrud amet labore. Qui anim minim eu fugiat culpa ut occaecat anim minim ipsum commodo ad aute. Et commodo veniam cillum irure deserunt enim ea duis eiusmod deserunt proident officia irure. Anim incididunt non amet et reprehenderit cillum aliquip laborum veniam dolore. Aute et irure anim officia nostrud ullamco minim veniam occaecat.\r\n",
      "registered": "2016-07-18T07:43:58 -06:-30",
      "latitude": -88.34521,
      "longitude": -115.482776,
      "tags": [
        "pariatur",
        "eu",
        "esse",
        "aute",
        "anim",
        "exercitation",
        "do"
      ],
      "friends": [
        {
          "id": 0,
          "name": "Maura Mcmahon"
        },
        {
          "id": 1,
          "name": "Lucinda Joseph"
        },
        {
          "id": 2,
          "name": "Violet Wilson"
        }
      ],
      "greeting": "Hello, Salazar Bolton! You have 3 unread messages.",
      "favoriteFruit": "strawberry"
    },
    {
      "_id": "5f58617f82cadfc260ad07e4",
      "index": 3,
      "guid": "602fd32a-77d9-4077-bc9e-c73121aa06d9",
      "isActive": true,
      "balance": "$1,384.49",
      "picture": "http://placehold.it/32x32",
      "age": 38,
      "eyeColor": "brown",
      "name": "Teresa Little",
      "gender": "female",
      "company": "IMAGEFLOW",
      "email": "teresalittle@imageflow.com",
      "phone": "+1 (930) 441-3375",
      "address": "143 Just Court, Detroit, New Mexico, 6121",
      "about": "Id aliquip nostrud elit do commodo cupidatat exercitation exercitation. Laborum nisi anim est dolore eiusmod veniam laborum qui sunt ut. Consectetur exercitation voluptate laborum consequat fugiat cupidatat excepteur laboris minim voluptate. Irure aliqua in dolor laborum commodo aute cupidatat ex proident ullamco velit mollit eu amet. Cillum occaecat sit deserunt nulla culpa veniam enim dolor id.\r\n",
      "registered": "2020-03-14T06:58:11 -06:-30",
      "latitude": -10.239132,
      "longitude": -170.306944,
      "tags": [
        "ipsum",
        "non",
        "in",
        "aute",
        "et",
        "qui",
        "aliquip"
      ],
      "friends": [
        {
          "id": 0,
          "name": "Knight Blevins"
        },
        {
          "id": 1,
          "name": "David Fuentes"
        },
        {
          "id": 2,
          "name": "Claudia Lloyd"
        }
      ],
      "greeting": "Hello, Teresa Little! You have 8 unread messages.",
      "favoriteFruit": "apple"
    },
    {
      "_id": "5f58617f805015531c9d8dd4",
      "index": 4,
      "guid": "12de2528-f2c4-4fb9-8e86-addbe54cba8e",
      "isActive": true,
      "balance": "$3,638.91",
      "picture": "http://placehold.it/32x32",
      "age": 33,
      "eyeColor": "blue",
      "name": "Colon Gill",
      "gender": "male",
      "company": "CENTURIA",
      "email": "colongill@centuria.com",
      "phone": "+1 (857) 495-2052",
      "address": "516 Anna Court, Calvary, New Jersey, 4778",
      "about": "Occaecat consequat aliquip magna consectetur in. Exercitation consectetur irure Lorem sint proident. Ullamco excepteur duis dolor laborum velit pariatur consectetur enim occaecat ad est.\r\n",
      "registered": "2017-10-12T11:11:54 -06:-30",
      "latitude": 23.725261,
      "longitude": -12.174986,
      "tags": [
        "occaecat",
        "aliqua",
        "consectetur",
        "nisi",
        "labore",
        "id",
        "sunt"
      ],
      "friends": [
        {
          "id": 0,
          "name": "Bernadine Meyer"
        },
        {
          "id": 1,
          "name": "Zimmerman Mcfarland"
        },
        {
          "id": 2,
          "name": "Santiago Griffin"
        }
      ],
      "greeting": "Hello, Colon Gill! You have 4 unread messages.",
      "favoriteFruit": "apple"
    },
    {
      "_id": "5f58617f55fc22c02d111747",
      "index": 5,
      "guid": "b85af762-1310-41c9-80c0-789732981432",
      "isActive": false,
      "balance": "$3,262.97",
      "picture": "http://placehold.it/32x32",
      "age": 28,
      "eyeColor": "brown",
      "name": "Shepherd Hopkins",
      "gender": "male",
      "company": "BIFLEX",
      "email": "shepherdhopkins@biflex.com",
      "phone": "+1 (869) 483-3721",
      "address": "272 Joval Court, Belva, Northern Mariana Islands, 3442",
      "about": "Laborum eiusmod aliquip velit ut duis adipisicing. Ea enim laborum in consectetur excepteur sit. Fugiat sint mollit dolore ad esse velit reprehenderit id amet dolor. Ut aliquip anim magna Lorem et. Lorem sunt cupidatat nisi irure consequat commodo cillum tempor pariatur.\r\n",
      "registered": "2016-01-21T11:14:50 -06:-30",
      "latitude": 18.525397,
      "longitude": -94.009316,
      "tags": [
        "duis",
        "cupidatat",
        "laborum",
        "adipisicing",
        "amet",
        "qui",
        "non"
      ],
      "friends": [
        {
          "id": 0,
          "name": "Cunningham Leon"
        },
        {
          "id": 1,
          "name": "Jerri Dickson"
        },
        {
          "id": 2,
          "name": "Angel Stokes"
        }
      ],
      "greeting": "Hello, Shepherd Hopkins! You have 2 unread messages.",
      "favoriteFruit": "banana"
    }
];
res.json(productsData)
});
app.listen(3000);