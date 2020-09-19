const mocha = require('mocha');
const assert = require('assert');
const PersonChar = require('../models/personchar');

// Describe testing process

describe("Describe: ", function() {
    it("Add collection to db: ", function(done) {
        var character = new PersonChar({
            name: 'Thanh Huy'
        });

        character.save().then(function(){
            assert(character.isNew === false);
            done();
        })
    })
});