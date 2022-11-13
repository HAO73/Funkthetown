module.exports = {
  apps : [{
    script: 'app.js',
    watch: '.'
  }, {
    script: 'app.js',
    watch: ['./service-worker']
  }],

};
