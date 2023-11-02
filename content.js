chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        try{
            var x = myframe.document.querySelectorAll('textarea');
            var i = 0;
            for (i = 0; i < x.length; i++){
                if(x[i].id==="rad_1_11"){
                    x[i].value=request.rad_1_11;
                }
                else if(x[i].id==="rad_1_12"){
                    x[i].value=request.rad_1_12;
                }
                else if(x[i].id==="rad_2_11"){
                    x[i].value=request.rad_2_11;
                }
                else if(x[i].id==="rad_2_12"){
                    x[i].value=request.rad_2_12;
                }
                else{
                    x[i].value=request.rad_0_15;
                }
            }
          
            x = myframe.document.querySelectorAll('input[type="radio"]');
            // console.log(x);

            //for marking all excellent-uncomment below and then refresh extension 
            for (i = 1; i < x.length; i++){
                if (x[i].getAttribute('name') == 'check'){
                    continue;
                }
                x[i].click();
            }

            //for marking all poor-uncomment below and then refresh extension 
            // for (i = 2; i < x.length; i+=5){
            //     if (x[i].getAttribute('name') == 'check'){
            //         continue;
            //     }
            //     x[i].click();
            // }
          
          }catch(err){
            console.log(err);
          }
    }
);