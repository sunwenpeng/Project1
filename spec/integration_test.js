describe('integration test',function(){
    it('result should be 2A1B',function(){
        btn_click()  ;
        localStorage.setItem("random_number", 1234);
        document.getElementById('guess').value = 1435 ;
        btn_click_1();
        var result=document.getElementById("txt2").innerText == "2A1B"    ;
        expect(result).toBeTruthy();
    });
    it('result should be 您已猜了6次！',function(){
        times=0;
        btn_click()  ;
        localStorage.setItem("random_number", 1234);
        document.getElementById('guess').value = 1435 ;
        btn_click_1();
        document.getElementById('guess').value = 1425 ;
        btn_click_1();
        document.getElementById('guess').value = 1436 ;
        btn_click_1();
        console.log(times);
        document.getElementById('guess').value = 9435 ;
        btn_click_1();
        document.getElementById('guess').value = 1437 ;
        btn_click_1();
        document.getElementById('guess').value = 2435 ;
        btn_click_1();
        console.log(times);
        var result=document.getElementById("txt2").innerText == "您已猜了6次！";
        expect(result).toBeTruthy();
    });
    it('result should be 猜对了！',function(){
        times=0   ;
        btn_click()  ;
        localStorage.setItem("random_number", 1234);
        document.getElementById('guess').value = 1435 ;
        btn_click_1();
        document.getElementById('guess').value = 1234 ;
        btn_click_1();
        var result=document.getElementById("txt2").innerText == "猜对了！";
        expect(result).toBeTruthy();
    });
})