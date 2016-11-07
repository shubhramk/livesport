'use strict';

/**
 * Serve JSON to our AngularJS client
 */

var express = require('express');
var router = express.Router();
var _ = require('underscore');
var fs = require('fs');
var mongoClient = require('mongodb').MongoClient;

var db;
var dbURL = 'mongodb://localhost:27017/livesport';
mongoClient.connect(dbURL,  function (err, database){
    if (err) return console.log(err);
    db = database;
})

router
     //Login Check
    .post('/checkLogin', function(req, res) {
        db.collection('login').find(
            {
                $and:[
                    {"username":req.body.Name},
                    {"password":req.body.Password}]
            }
        ).toArray(function (err, result) {
            if (err) throw err;

            if(result.length > 0){
                res.json({
                    "status": "0",
                    "message":"successfully logged IN"
                });
            }else{
                res.json({
                    "status": "1",
                    "message":"Invalid username or password"
                });
            }
        });

    })
     //get top ten videos
    .get('/getTopTenVideos', function(req, res) {
        db.collection('videos').find().toArray(function (err, result) {
            var topTenVideos  = _.sortBy(result,'views');
            topTenVideos = topTenVideos.reverse();
            topTenVideos =  _.first(topTenVideos,10);

            res.json(topTenVideos);
        });
    })
    //get top videos
    .get('/getTopVideos', function(req, res) {
        db.collection('videos').find().toArray(function (err, result) {
            var topVideos  = _.sortBy(result,'views');
            topVideos = topVideos.reverse();
            res.json(topVideos);
        });
    })
    //get featured videos
    .get('/getFeaturedVideos', function(req, res) {
        db.collection('videos').find().toArray(function (err, result) {
            var featuredVideos  = _.where(result, {isFeatured: true});
            res.json(featuredVideos);
        });

    })
    //get channels List
    .get('/getChannels', function(req, res) {
        db.collection('channels').find().toArray(function (err, result) {
           res.json(result);
        });
    })
    //get Events List
    .get('/getEvents', function(req, res) {
        db.collection('events').find().toArray(function (err, result) {
           res.json(result);
        });
    })
    //get Channel Video
    .get('/getVideo/:channelID', function(req, res) {
        db.collection('videos').find().toArray(function (err, result) {
            var userVideo  = _.where(result, {channelID: req.params.channelID});
            res.json(userVideo);
        });
    })
    //get Events Video
    .get('/getEvent/:eventID', function(req, res) {
        db.collection('events').find().toArray(function (err, result) {
            var eventVideo  = _.where(result, {eventID: req.params.eventID});
            res.json(eventVideo);
        });
    })
    .get('/getAllVideos', function(req, res) {
        db.collection('videos').find().toArray(function (err, result) {
            var relevance = _.where(result, {sType:'relevance'});
            var popular   = _.where(result, {sType: 'popular'});
            var recent    = _.where(result, {sType: 'recent'});
            res.json({
                "relevance": relevance,
                "popular":popular,
                "recent":recent

            });
        });
    })
    .get('/getSearchedVideo/:cID/:vID', function(req, res) {
        db.collection('videos').find().toArray(function (err, result) {
            var channelsVidList  = _.where(result, {channelID: req.params.cID});

            //current video
            var curVid = _.filter(channelsVidList,function(item) {
                return item.mediaID == req.params.vID;
            });

            //video list
            var arr = _.filter(channelsVidList,function(item) {
                return item.mediaID != req.params.vID;
            });
             var finalArr  = curVid.concat(arr);
             res.json(finalArr);
        });
    })



module.exports = router;