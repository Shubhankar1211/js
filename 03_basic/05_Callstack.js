//  how the js code execute and call stack
/* 
javascript execution context--------->>>>>>>

{} ->> global execuiton context ->>>>> ise this me rakh diya jata h
// javascript ek single threaded h 

there are three exectuion context // interview question
global execution context
funtion execution context
eval exectuion context 

ye niche wla asla me code h ise empty curly braces mat samjhana
[{}]  ====>>>>>> memory creation phase ise sirf creation phase bhi bol dete h
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

    ye uper wala code kaise execute hoga usee niche likha h

    (1)global execution ise global ennvironment bhi bol te h
         --->>>> this  /// sabse phlw jo bhi code run kanra ho kitna hi bda ho or kitna bhi chota ho use sabse phlee this ke andar allot kiya jata h

    (2)memory phase  sare variables ko ikhata kiya jata h or sabko ek ghah rkah jata h 
    val1 ---> undefined
    val2 ---> undefiend
    addnum --->>> defination  //  ye function ko u defiend nahi likh ta balki use defination me likha ta h
    result1 --->> undefined
    result2 --->> undefined

    (3) execution phase 
    val1  <---- 10
    val2  <---- 5
    add Num ----->>[new variable environment + execution thread]  << // jab ham add num pe atte h vo apna alag ek execution context banata h // jo bhi add ke baad likha h vo execution context ke andar h
    result =15 ye niche ka context box ke puri kaam hone ke baaad delte hone ke baad yha ake save ho jaeygi
    result= 12

    //jitni bar bhi fucntion call hoga utni bar hi 1 context box banega ye niche wlaa ek context box ko represent kar raha h
                        ---->>  memory phase 
                                val1 ---->>>undefined
                                val2 ---->>>undefined
                                total --->>>undefined
                        ---->> execution context or phase
                                num1 ---->>>10
                                num2 ---->>>5
                                total --->>>15  // ye total return bhi ho raha h to ye global exexcution me return hoga 

                            itna kaam hone ke baad ye exexcution box delete bhi hota h 
           
    ye uper wali sari kahani niche bhi exexcute hogi neww rsult ke liye                         
    memory 
    execution
    nve + thread     
    


    // ye call stack h
    lifo  [ three() , two() , one() [global execution]]

*/