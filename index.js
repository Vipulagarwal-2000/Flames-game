var arrCountBig = [];
                var arrCountSmall = [];
                
                var flameArray = ["friend", "love", "Affection", "Marriage", "Enemy", "Siblings"];
                var result;
                
                function in_put(fName, sName){
                    var text = fName.concat(sName);
                    
                    for(var i = 0; i < text.length; i++){
                        var count = 1;
                        for(let j = i+1; j < text.length; j++){
                        if(text[i] === text[j]){
                            count++;
                        }
                    }
                    if(count < 2){
                        let morNow = text[i];
                        arrCountSmall.push({name : morNow, repeat : count}); 
                    }else if(count > 1){
                        let forNow = text[i];
                        arrCountBig.push({name : forNow, repeat : count}); 
                    }
                
                    }
                
                 let finalRes =   resultFilter(arrCountSmall, arrCountBig);
                 return finalRes;
                
                }
               
                
                
                
                function resultFilter(arr1, arr2){
                let filteredArray = arr1.filter(obj1 => !arr2.some(obj2 => obj1.name === obj2.name));
                var filterLen =filteredArray.length;
                
                for (let i = 0; i < filterLen; i++){
                    if(i === (filterLen-1)){
                        
                        if( i > 5){
                            let j =i;
                            j -= 6;
                            
                            result = flameArray[j];
                           
                            
                        }else {
                            result = flameArray[i];
                            
                        }   
                    }
                }
                   return result;
                }
                
                //logic above 
                
                
                //jquery manipulation down
                
                $("form").submit(function(event){
    event.preventDefault();
    var fname = $( "input#fname" ).val();

    var sname =  $("input#sname" ).val();
   
    var love = in_put(fname,sname);
   $(".change").text(love);


    
    
});