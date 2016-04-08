/**
 * Created by common on 2016/4/8.
 */
describe("A spec (with setup and tear-down)", function () {
    var foo;
    beforeAll(function () {
        foo = 1;
        console.log("beforeAll run");
    });

    afterAll(function () {
        foo = 0;
        console.log("afterAll run");
    });

    beforeEach(function () {
        console.log("beforeEach run");
    });

    afterEach(function () {
        console.log("afterEach run");
    });

    it("is just a function,so it can contain any code", function () {
        expect(foo).toEqual(1);
    });

    it("can have more than one expectation", function () {
        expect(foo).toEqual(1);
        expect(true).toEqual(true);
    });
});