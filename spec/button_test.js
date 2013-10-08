describe('button_test',function(){
    it('onclick 产生一个随机数 should create a random number',function(){
        btn_click();
        var result= isNaN(JSON.parse(localStorage.getItem("random_number")))==false;
        expect(result).toBeTruthy();
    });

})