const chai = require('chai');
const expect = chai.expect;
const greet = require(__dirname + '/../lib/greet');

describe('greet', () => {
  it('should equal Hello World', () => {
    expect(greet(' Craig')).to.eql('Hello Craig')
  });

});
