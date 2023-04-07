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
            for (i = 1; i < x.length; i++){
                if (x[i].getAttribute('name') == 'check'){
                    continue;
                }
                x[i].click();
            }
          
          }catch(err){
            console.log(err);
          }
    }
);