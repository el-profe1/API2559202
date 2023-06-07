const test = require('node:test');
const assert = require('node:assert/strict');
const commentService = require('../services/commentService')

const service = new commentService();

test('funcionaApi',()=>{
    const result = service.findOne({_id: new ObjectId('5a9427648b0beebeb69579e7')});
    const expected = '{"_id":"5a9427648b0beebeb69579e7","name":"Mercedes Tyler","email":"mercedes_tyler@fakegmail.com","movie_id":"573a1390f29313caabcd4323","text":"Eius veritatis vero facilis quaerat fuga temporibus. Praesentium expedita sequi repellat id. Corporis minima enim ex. Provident fugit nisi dignissimos nulla nam ipsum aliquam.","date":"2002-08-18T04:56:07.000Z"}';
    assert.equal(result, expected);
})