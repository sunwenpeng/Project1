describe('comparetest',function(){
    it('result should be 0,0',function(){
        var result;
        result=  compare(1234,5678)[0]==0&&compare(1234,5678)[1]==0   ;
        expect(result).toBeTruthy()
    });
    it('result should be 1,0',function(){
        var result;
        result=   compare(1234,5638)[0]==1&&compare(1234,5638)[1]==0;
        expect(result).toBeTruthy()
    });

})


















/**/

















/**/