var api = require('../lib/api.js');

describe('api.foo', function() {

	it('returns bar', function() {
		expect(api.foo()).toEqual('bar');
	});

});
