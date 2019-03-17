class MyPlugin {
  constructor(options) {
    this.options = options;
  }
  apply(compiler) {
    compiler.hooks.done.tap('MyPlugin', () => {
      console.log('bundling completed');
    });
    compiler.hooks.emit.tap('MyPlugin', compilation => {
      let result = '';
      for (const filename in compilation.assets) {
        if (this.options.showSize) {
          const size = compilation.assets[filename].size();
          result += `${filename}(${size})\n`;
        } else {
          result += `${filename}\n`;
        }
      }
      compilation.assets['fileList.txt'] = {
        source: function() {
          return result;
        },
        size: function() {
          return result.length;
        },
      };
    });
  }
}

module.exports = MyPlugin;
