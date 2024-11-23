//problem 1
db["unemployment"].distinct("Year").length
//counts amount of unique years in the data set using distinct and length

//problem 2
db["unemployment"].distinct("State").length
//counts unique states in the dat aset using distinct and length

//problem 3
db.unemployment.find({Rate : {$lt: 1.0}}).count()
// the above query counts all data entries with a rate less than 1

//problem 4 
db.unemployment.find({Rate : {$gt: 10}})
//query uses greater than 10 function to find all counties with a rate greater than 10

//problem 5
db.unemployment.aggregate([{$group : {_id:null,AverageRate:{$avg:"$Rate"}}}])
//query aggregates all records by making id null allowing $avg to calculate all entries average

//problem 6
db.unemployment.find({Rate : {$gte: 5, $lte: 8}})
//Query finds all records with a rate greater than or equal to five and les than or equal to 8

//Problem 7
db.unemployment.aggregate([{$sort : {Rate : -1}},{$limit:1}])
// the query sorts by rate -1 to sort in descending order then limits to show highest value

// problem 8
db["unemployment"].distinct("County", {Rate: {$gt:5}}).length
// returns the number of all distinct counties with an unemployment of more than 5%

//problem 9
db.unemployment.aggregate([{$group : {_id:{State: "$State", Year: "$Year"},
    AverageRate:{$avg:"$Rate"}}}, {$sort:{"_id.State": 1, "_id.year": 1}}])
    // the query aggregates by state and year with ID as a composite key then the average function returns average for each group




//problem 10
db.unemployment.aggregate([{$group :{ _id: "$State", TotalRate:{$sum: "$Rate"}}}])
// groups data by state and gets the sum of unemployment rates for data grouped by state. 

//problem 11
db.unemployment.aggregate([{$match: { Year: {$gte: 2015}}},{$group :{ _id: "$State", TotalRate:{$sum: "$Rate"}}}])
// the above query uses match to filter data by those >= 2015 and groups by state, then sums data. 
