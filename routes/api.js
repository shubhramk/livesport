'use strict';

/**
 * Serve JSON to our AngularJS client
 */

var express = require('express');
var router = express.Router();
var _ = require('underscore');
// For a real app, you'd make database requests here.
// For this example, "data" acts like an in-memory "database"
var data = {
    employeelist : [
        {
            "username":"priya",
            "password":"priya"
        },
        {
            "username":"shubhram",
            "password":"shubhram"
        },
        {
            "username":"mukesh",
            "password":"mukesh"
        }
    ],
    "message":"Tavant is an IT solutions and services provider recognized globally for its innovative solutions. We have been able to provide game changing results for our customers by combining our industry experience with cutting-edge technologies. Our unwavering commitment to customers has paved the way for long-standing customer relationships. At all levels, our employees continually strive to provide a superior experience to customers through their passion and excellence. We specialize in building custom technology solutions and providing end to end services across domains such as capital markets, consumer lending, manufacturing, media and entertainment, gaming, and retail. We pride ourselves on our traditions of innovation and process excellence that are coupled with high employee and customer satisfaction levels. Tavant is an ISO 27001 compliant and SEI-CMMI level 4 compliant organization. Our best-shore delivery model provides close interaction with customers and a strong process oriented offshore team. Our suite of products and services are routinely rated high by the industry and media, and deployed by leading business names like Electronic Arts, TiVo, MLB AM, New York Times, Ingersoll Rand, Bobcat, Federal Signal and many more. We believe that when passionate people come together in an endeavor to achieve excellence, we can build cutting edge solutions and services that have an impact on our customers core business.Priya"
};


router.post('/checkLogin', function(req, res) {
    var employeedetails =  _.find(data.employeelist, function (o) { return ( o.username === req.body.Name && o.password === req.body.Password) });
    res.json({
        employeedetails: employeedetails
    });
});




module.exports = router;