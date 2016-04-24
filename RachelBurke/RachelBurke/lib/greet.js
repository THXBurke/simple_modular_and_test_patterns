const greet = module.exports = {
  'greet': function(name){
    if(!process.argv[2]){
      return('hello ' + name);
    }
    else{
      return('hello ' + process.argv[2]);
    }
  }
};
