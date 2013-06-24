var _lib = {
    fs : require('fs')
};

var CoffeeFilesMapper = function() {
    /**
    *
    *
    */
    this.basedir = {
        coffee : undefined,
        js : undefined
    };;
    /**
    *
    *
    */
    this.listing = {
        coffee : [],
        js : []
    };
};
/**
*
*
*
*/
CoffeeFilesMapper.prototype.setBasedir = function(val) {
    //
    this.basedir = val;
};
/**
*
*
*
*/
CoffeeFilesMapper.prototype.getListing = function() {
    //
    return this.listing;
};
/**
*
*
*
*/
CoffeeFilesMapper.prototype.walk = function() {
    //
    var results = [],
        self = this;
    //
    _lib.fs.readdir(this.basedir.coffee, function(err, list) {

        if (err) return done(err);

        var pending = list.length;

        if (!pending) return done(null, results);
        //
        list.forEach(function(file) {

          file = dir + '/' + file;

          _lib.fs.stat(file, function(err, stat) {

            if (stat && stat.isDirectory()) {

              self.walk(file, function(err, res) {

                results = results.concat(res);

                if (!--pending) done(null, results);
              });

            } else {

              results.push(file);

              if (!--pending) done(null, results);
            };
          });
        });
    });
};
/**
*
*
*
*/
CoffeeFilesMapper.prototype.run = function(done) {

    var self = this;

    this.walk(this.basedir, function(err, results) {
        if (err) throw err;
        self.map(results, done);
    });
};
/**
*
*
*
*/
CoffeeFilesMapper.prototype.map = function(listing, done) {

    for(var i = 0; i< listing.length; i++){
        //
        lib.coffee.push(this.basedir.coffee + "/" + listing[i]);
        lib.js.push(this.basedir.js + "/" + listing[i].replace("coffee", "js"));
    };

    done.call();
};
//
module.exports = CoffeeFilesMapper;