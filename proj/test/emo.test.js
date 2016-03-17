var expect = require('chai').expect;
var emo = require('../lib/emo.js');


describe('emo工具函数测试', function () {
	it('getRandomInt test', function () {
		expect(emo.getRandomInt()%1).to.be.equal(0);
	});
	it('contains test', function () {
		expect(emo.contains('its a test string','string')).to.be.equal(true);
		expect(emo.contains('its a test string','tsring')).to.be.not.equal(true);
	});
	it('startsWith test', function () {
		expect(emo.startsWith('ABC', 'a')).to.be.equal(true);
		expect(emo.startsWith('abc', 'A')).to.be.equal(true);
	});
	it('getDatePeriod test', function () {
		
	});
	it('isLeapYear test', function () {
		
	});
	it('endsWith test', function () {
		expect(emo.endsWith('ABC', 'c')).to.be.equal(true);
		expect(emo.endsWith('abc', 'C')).to.be.equal(true);
	});
	it('singleton test', function () {
		function test() {};
		var t1 = new test();
		var t2 = new test();
		var t3 = emo.singleton(test);
		var t4 = emo.singleton(test);
		expect(t1).to.be.not.equal(t2);
		expect(t2).to.be.not.equal(t3);
		expect(t3).to.be.equal(t4);
	});

});