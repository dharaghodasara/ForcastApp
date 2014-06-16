#!/usr/bin/env node
var filestocopy = [{
     "res/icons/android/icon.png": 
     "platforms/android/res/drawable/icon.png"
 }, {
     "res/icons/android/icon-48-mdpi.png":
     "platforms/android/res/drawable-mdpi/icon.png"
 }, {
     "res/icons/android/icon-72-hdpi.png":
     "platforms/android/res/drawable-hdpi/icon.png"
 }, {
     "res/icons/android/icon-96-xhdpi.png":
     "platforms/android/res/drawable-xhdpi/icon.png"
 }, {
     "res/icons/android/SplashScreen.png":
     "platforms/android/res/drawable/splashscreen.png"
 }];
 
var fs = require('fs');
var path = require('path');
 
// no need to configure below
var rootdir = process.argv[2];
 
filestocopy.forEach(function(obj) {
    Object.keys(obj).forEach(function(key) {
        var val = obj[key];
        var srcfile = path.join(rootdir, key);
        var destfile = path.join(rootdir, val);
        //console.log("copying "+srcfile+" to "+destfile);
        var destdir = path.dirname(destfile);
        if (fs.existsSync(srcfile) && fs.existsSync(destdir)) {
            fs.createReadStream(srcfile).pipe(
               fs.createWriteStream(destfile));
        }
    });
});