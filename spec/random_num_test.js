describe('random_num', function () {
    it('number has four numbers', function () {
        var result, random_number;

        random_number = random_num();
        result = 100 <= random_number && random_number <= 9999;

        expect(result).toBeTruthy();
    });

});