const chai = require('chai');
const expect = require('chai').expect;
const sayHello = require(__dirname + '/../lib/greet');

describe('greet', function(){
  it('should take use name parameter if no command line args', function() {
    process.argv[2] = null;
    expect(greet.greet('Mom')).to.eql('Hello Mom');
  });
  it('should take a command line argument as a parameter', function() {
    process.argv[2] = 'Dad';
    expect(greet.greet()).to.eql('Hello Dad');
  });
});
