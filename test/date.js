/**
 * Created by osmeteor on 4/25/17.
 */
var chai = require('chai')
    , expect = chai.expect
    , should = chai.should();

var dt=require("./../lib/date");
exports=require("./../lib/typeof");


var should = require('chai').should() //actually call the function
    , foo = 'bar'
    , beverages = { tea: [ 'chai', 'matcha', 'oolong' ] };

//
// foo.should.equal('bar');
// foo.should.have.lengthOf(3);
// beverages.should.have.property('tea').with.lengthOf(3);
new Date().should.be.a('date')
console.log( dt.dateFormat( dt.dateGetGMT(),"yyyy-MM-dd hh:mm:ss"))
console.log(dt.dateGetStandardTimeZone(new Date()))
console.log(dt.dateFormat(dt.dateGetDateFromOffset(dt.dateGetGMT(),+8),"yyyy-MM-dd hh:mm:ss"))
console.log(dt.dateFormat(dt.dateGetGMT(),"yyyy-MM-dd hh:mm:ss"))
