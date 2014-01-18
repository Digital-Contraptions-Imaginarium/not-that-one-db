console.log("I am here!");

var readDatabase = function (callback) {
    var tells = [ ];	
    d3.json("./tells.json", function (tempTells) {
        tells = tempTells.reduce(function (memo, tell) {
            memo[tell.name] = tell;
            return memo;
        }, { });
        async.each(Object.keys(tells), function (tellName, callback) {
            d3.json("./tells/" + tellName + ".json", function (tellData) {
                tells[tellName].products = tellData.products;
                callback(!tellData.products);
            });
        }, function (err) {
            console.log(JSON.stringify(database));
            callback(err, { tells: tells });
        });
    });
}
