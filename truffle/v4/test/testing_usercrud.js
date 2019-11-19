const UserCrud = artifacts.require('./UserCrud.sol')
const assert = require('assert')

let crudInstance;

contract('UserCrud', (accounts) => {
    beforeEach(async () => { crudInstance = await UserCrud.deployed() })

    it('should insert new user', async () => {

        await crudInstance.insertUser(0xa14f3bbe103c615978f5e4a29537080dc354df5a, "a@a.com", 10, 10000);
        await crudInstance.insertUser(0x03c8dd3aaa3bb04d6b12a463423d77f1ea2851b0, "b@a.com", 20, 10000);

        var total = await crudInstance.getUserCount();
        assert.equal(total, 2, "user count check error");

        var user = await crudInstance.getUser(0xa14f3bbe103c615978f5e4a29537080dc354df5a);
        assert.equal(user[0], "a@a.com");
        assert.equal(user[1].toNumber(), 10);

        await crudInstance.updateUserEmail(0xa14f3bbe103c615978f5e4a29537080dc354df5a, "a2@a.com");
        user = await crudInstance.getUser(0xa14f3bbe103c615978f5e4a29537080dc354df5a);
        assert.equal(user[0], "a2@a.com");
        assert.equal(user[1].toNumber(), 10);

        await crudInstance.updateUserAge(0xa14f3bbe103c615978f5e4a29537080dc354df5a, 20);
        user = await crudInstance.getUser(0xa14f3bbe103c615978f5e4a29537080dc354df5a);
        assert.equal(user[0], "a2@a.com");
        assert.equal(user[1].toNumber(), 20);

        await crudInstance.deleteUser(0x03c8dd3aaa3bb04d6b12a463423d77f1ea2851b0);

        total = await crudInstance.getUserCount();
        assert.equal(total, 1);
    })
})