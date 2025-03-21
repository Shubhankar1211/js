//  how the js code execute and call stack
/* 
javascript execution context--------->>>>>>>

{} ->> global execuiton context

global execution context
funtion execution context
eval exectuion context


[{}]====>>>>>> memory creation phase 
    ====>>>>>> execution phase

    example -:
    let val1 =10;
    let val2 = 5;
    function addnum(num1,num2){
    let total = num1 +num2 
    return total
    }
    let result1= addnum(val1,val2);
    let result2= addnum(10,2);

    (1)global execution 
         --->>>> this

    (2)memory phase 
    val1 ---> undefined
    val2 ---> undefiend
    addnum --->>> defination
    result1 --->> undefined
    result2 --->> undefined

    (3) execution phase 
    vals  <---- 10
    val2  <---- 5
    add N1 ----->>[new variable environment + execution thread]  <<-- delete
    now execution thread ---->> memory phase 
                                val1 ---->>>undefined
                                val2 ---->>>undefined
                                total --->>>undefined
                        ---->> execution context 
                                num1 ---->>>10
                                num2 ---->>>5
                                total --->>>15  
                                
    memory 
    execution
    nve + thread     
    
    lifo  [ three() , two() , one() [global execution]]

*/