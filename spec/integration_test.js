describe('integration test',function(){
    it('result should be 2A1B',function(){
        btn_click()  ;
        localStorage.setItem("random_number", 1234);
        document.getElementById('guess').value = 1435 ;
        btn_click_1();
        var result=document.getElementById("txt2").innerText == "2A1B"    ;
        expect(result).toBeTruthy();
    });

})