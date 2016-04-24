
const sayHello = module.exports = {
  'greet': function(name){
    if(!process.argv[2]){
      return('Hello ' + name);
    } else {
      return('Hello' + process.argv[2]);
    }
  }
};
