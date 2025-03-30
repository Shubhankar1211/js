// the globalfetch method dtarts the process of fecthing a resourse from the network ,returning a promise which is fulfilled once the rewponse is available
// interview question promise se apne request kari or error agya 404 to to vo kha mileh=ga reject me milega ya fir resolve melile ga vohamesha apko response me hi mielga kyo ki vo error nahi h error tab hoga ue case me jab vo browser se request hi nahi kar paya h

/*

respose = fetch('something')

data :-  ->>>>> ye data hi respose ko golabal memory me poucta h                      web borweser/node->>>> network resqueat ->>>> yha se netrok  response or reject agar ko response aya h to vo hamesha jata h onfulfilled me or onfield se vo data me jata h 
onfulfilled[] // isse directly vlaue puch karna allowed hi nahi hota h ye private field hote h 
on rejection[] 

*/