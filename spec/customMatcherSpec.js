/**
 * Created by common on 2016/4/8.
 */

var customMatchers = {
    toBeGoofy: function (util, customEqualityTesters) {
        return {
            compare: function (actual, expected) {
                if (expected === undefined) {
                    expected = '';
                }
                console.log(util);
                console.log(customEqualityTesters);
                var result = {};
                result.pass = util.equals(actual.hyuk, "gawrsh" + expected, customEqualityTesters);
                //if (result.pass) {
                //    result.message = "Expected" + actual + "not to be quite so goofy";
                //} else {
                //    result.message = "Expected" + actual + "to be goofy,but it was not very goofy";
                //}
                return result;
            }
        };
    }
};

describe("Custom matcher:'toBeGoofy'", function () {
    beforeEach(function () {
        jasmine.addMatchers(customMatchers);
    });

    it("can take an 'expected' parameter", function () {
        expect({
            hyuk: 'gawrsh is fun'
        }).toBeGoofy(' is funs');
    })
});