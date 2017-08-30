function FileListPlugin(options) {}

FileListPlugin.prototype.apply = function(compiler) {
    compiler.plugin('emit', function(compilation, callback) {
        
        var filelist = 'In this build:\n\n';

        for (var filename in compilation.assets) {
            filelist += ('- ' + filename + '\n');
        }

        // Insert this list into the Webpack build as a new file asset:
        compilation.assets['aaa.md'] = {
            source: function() {
                return filelist;
            },
            size: function() {
                return filelist.length;
            }
        };


        callback();
    });

};

module.exports = FileListPlugin;
