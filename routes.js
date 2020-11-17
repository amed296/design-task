let express = require('express')
let router = express.Router()

router.get('/', (req, res)=>{
    res.render("index", {
        "pageTitle": "Official"
    })
})


router.get('/home', (req, res)=>{
    res.render("home", {
        "pageTitle": "Home",
        "headings": ["Swiss removes 28 A320s from service for winter", "Ethiopian takes same-day delivery of a pair of A350s", "Irkut rolls out first MC-21 with Russian PD-14 engines"],
        "img": ["https://d3lcr32v2pp4l1.cloudfront.net/Pictures/380x253/6/7/4/74674_swissairbusa320_419218.jpg", "https://d3lcr32v2pp4l1.cloudfront.net/Pictures/380x253/5/7/5/74575_ethiopiana350titlecethiopianairlines_587531.jpg", "https://d3lcr32v2pp4l1.cloudfront.net/Pictures/380x253/6/3/8/74638_mc21310withpd14enginescirkut_389135.jpg"],
        "des": ["Lufthansa subsidiary Swiss is temporarily withdrawing 28 older Airbus A320-family aircraft from service for the winter timetable to save costs, and instead deploying “more efficient” Airbus A220s, A320neos and A321neos across its short- and medium-haul network.", "Ethiopian Airlines has taken delivery of another pair of Airbus A350-900s, both aircraft being handed over on the same day.", "Russian airframer Irkut has rolled out the first MC-21 equipped with domestically-built Aviadvigatel PD-14 powerplants."],
        "dfTitles": ['Pilot Wings Hat', 'Airplane Propeller Replica 47"'],
        "dfImgs": ['https://blog.globalair.com/image.axd?picture=/2019/Caitlyn-Bruszewski/10%20%20Aviation%20Gifts/hat.jpg', 'https://blog.globalair.com/image.axd?picture=/2019/Caitlyn-Bruszewski/10%20%20Aviation%20Gifts/propellers.jpg'],
        "dfPrices": [15.95, 170]
    })
})

router.get('/info', (req, res)=>{
    res.render("info", {
        "pageTitle": "Information about Enthusiasts"
    })
})

router.get('/store', (req, res)=>{
    res.render("store", {
        "pageTitle": "Duty Free - best aviation accessories",
        "itemsHeadings": ['Pilot Wings Hat', 'Flight Gear HP iPad Kneeboard', 'Airplane Propeller Replica 47"', 'Airplane Keychain', 'Red Canoe Cessna Stow Bag', 'Vintage Instrument Coasters', 'Pilot Humor Mug', 'Principles of Flight Tie', 'Pilot Humor T-Shirt', 'Spark Plug Plane Paperweight'],
        "itemsImgs": ['https://blog.globalair.com/image.axd?picture=/2019/Caitlyn-Bruszewski/10%20%20Aviation%20Gifts/hat.jpg', 'https://blog.globalair.com/image.axd?picture=/2019/Caitlyn-Bruszewski/10%20%20Aviation%20Gifts/ipad%20kneeboard.jpg', 'https://blog.globalair.com/image.axd?picture=/2019/Caitlyn-Bruszewski/10%20%20Aviation%20Gifts/propellers.jpg', 'https://blog.globalair.com/image.axd?picture=/2019/Caitlyn-Bruszewski/10%20%20Aviation%20Gifts/keychain.jpg', 'https://blog.globalair.com/image.axd?picture=/2019/Caitlyn-Bruszewski/10%20%20Aviation%20Gifts/bag.jpg', 'https://blog.globalair.com/image.axd?picture=/2019/Caitlyn-Bruszewski/10%20%20Aviation%20Gifts/coasters.jpg', 'https://blog.globalair.com/image.axd?picture=/2019/Caitlyn-Bruszewski/10%20%20Aviation%20Gifts/mug.jpg', 'https://blog.globalair.com/image.axd?picture=/2019/Caitlyn-Bruszewski/10%20%20Aviation%20Gifts/tie.jpg', 'https://blog.globalair.com/image.axd?picture=/2019/Caitlyn-Bruszewski/10%20%20Aviation%20Gifts/tshirt.jpg', 'https://blog.globalair.com/image.axd?picture=/2019/Caitlyn-Bruszewski/10%20%20Aviation%20Gifts/paperweight.jpg'],
        "itemsPrices" : [15.95, 34.95, 170, 16.99, 79.99, 21.95, 16.95, 28, 20, 35]
    })
})

router.get('/todo', (req, res)=>{
    res.render("todo", {
        "pageTitle": "Recommended things for an AvGeek",
        "todos": ["Attend an airshow", "Fly in a Vintage Aircraft", "Fly in First/Business class", "Fly in a Sea Plane", "Fly in a Glider"],
        "todoInfo": ["There are a number of AirShows and can be found in many locations. Such as the Singapore AirShow", "You can fly in a vintage aircraft around the country, it is said to be fun.", "It is very fun to fly in a simulator and it can give you a semi-real experience in it.", "If you have enough money to experience first or business class then go for it. It will be a luxuries expereince.", "Flying in a sea plane is different from flying in a ground plane (while the take off and landing). It would be something to try.", "Flying in a glider is said to be an amazing experience. You takeoff from a cessna attached and then you fly it wothout an engine with an instructor."]
    })
})


router.get('/community', (req, res)=>{
    res.render("community", {
        "pageTitle": "Community"
    })
})


router.get('*', (req, res)=> {
    res.send('Page not found <br> <a href="/" >Go back </a>')
})


module.exports = router;