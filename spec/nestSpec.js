/**
 * Created by common on 2016/4/8.
 */
describe("A spec", function () {
    var foo;
    beforeAll(function () {
        console.log("outer beforeAll");
    });

    afterAll(function () {
        console.log("outer afterAll");
    });

    beforeEach(function () {
        foo = 0;
        foo += 1;
        console.log("outer beforeEach");
    });

    afterEach(function () {
        foo = 0;
        console.log("outer afterEach");
    });

    it("is just a function, so it can contain any code", function () {
        expect(foo).toEqual(1);
    });

    it("can have more than one expectation", function () {
        expect(foo).toEqual(1);
        expect(true).toEqual(true);
    });

    describe("nested inside a second describe", function () {
        var bar;
        beforeAll(function () {
            console.log("inner beforeAll");
        });

        beforeEach(function () {
            bar = 1;
            console.log("inner beforeEach")
        });

        it("can reference both scopes as needed", function () {
            expect(foo).toEqual(bar);
        })
    })
});