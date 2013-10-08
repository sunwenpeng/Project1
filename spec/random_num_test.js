describe('random_num', function () {
    it('number has four numbers', function () {
        var result, random_number;

        random_number = random_num();
        result = 100 <= random_number && random_number <= 9999;

        expect(result).toBeTruthy();
    });
    it('number should be random', function () {
        var result;
        var j = 0;
        var a = random_num();
        for (var i = 1; i <= 1000; i++) {
            if (a == random_num()) {
                j++;
            }
        }


        result = j<=10;
        expect(result).toBeTruthy();
    });

});