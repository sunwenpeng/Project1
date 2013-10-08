describe('button_test',function(){
    it('onclick 产生一个随机数 should create a random number',function(){
        btn_click();
        var result= isNaN(JSON.parse(localStorage.getItem("random_number")))==false;
        expect(result).toBeTruthy();
    });
    it('onclick 确认 should put out 2A1B',function(){
        btn_click()  ;
        localStorage.setItem("random_number", 1234);
        document.getElementById('guess').value = 1435 ;
        times=0;
        btn_click_1();
        var result=document.getElementById("txt2").innerText == "2A1B"    ;
        expect(result).toBeTruthy();
    });


})