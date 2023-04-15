            staticObject={};//initializing an object to store data
            let countAll=0;//initializing  the countAll overall count made
            //s is element clicked 
            //function calle when you click each flexowrap button with a (background image)
            clickFunction=(s)=>{
                countAll=0;
                //number for counting similar class
                static_count=0;
                document.querySelectorAll('.flexowrap').forEach(el=>{
                    //when a  flexowrap is not defined in the new object
                    if(staticObject['counting'+static_count]==undefined){
                        staticObject['counting'+static_count]=0;
                    }
                    //s is element clicked and el is for each element flexowrap 
                    if(el==s){
                        //when equalcount is increased and element unique number stored in staticObject
                        //button number is increased
                        //and value is stored to be obtained incase of refresh
                        staticObject['counting'+static_count]=Number(staticObject['counting'+static_count])+1;
                        document.querySelectorAll('.number')[static_count].innerHTML=staticObject['counting'+static_count];
                        window.localStorage.setItem('counting'+static_count,staticObject['counting'+static_count]);
                    }//increasing number of the flexowrap clicked
                    countAll+=Number(window.localStorage.getItem('counting'+static_count,));//countAll vote count
                    static_count++;//count for each element 
                    
                })
                countAll_count.innerHTML = `Total: ${countAll}`;
        }
          /*everytime page loads*/
            flexowrapnumber=0;            
            document.querySelectorAll('.flexowrap').forEach(el=>{
                 /*allbutton are given a click event*/
                el.onclick=(e)=>{
                    clickFunction(e.target);      
                    notification.style.backgroundImage=
                    "url(./images/"+e.target.style.backgroundImage
                    .split('/')[e.target.style.backgroundImage.split('/').length-1]
                    .replaceAll('"',"").replaceAll(')',"")+")";
                    file_name.innerHTML=e.target.style.backgroundImage
                    .split('/')[e.target.style.backgroundImage.split('/').length-1]
                    .replaceAll('"',"").replaceAll(')',"").replaceAll(".jpg","").replaceAll(".jpeg","")
                }
                /*all count divs are created and appended to  button*/
                elementNumber=document.createElement('div');
                el.appendChild(elementNumber);
                elementNumber.className="number";
                 /*all count divs are checked if they have data from the past*/
                if(window.localStorage.getItem('counting'+flexowrapnumber)!=undefined){
                     /*past data are restored*/
                    elementNumber.innerHTML=window.localStorage.getItem('counting'+flexowrapnumber)
                    staticObject['counting'+flexowrapnumber]=window.localStorage.getItem('counting'+flexowrapnumber)
                }
                else{
                 /*without past data divs start count number*/
                elementNumber.innerHTML="0";}
                flexowrapnumber++;
            })
            
            /*for reseting all button images previously clicked*/
            resetFunction=()=>{
            flexowrapnumber=0;            
            document.querySelectorAll('.flexowrap').forEach(el=>{
                 /*remove history*/
                window.localStorage.removeItem('counting'+flexowrapnumber)
                 /*start object*/
                staticObject={}
                /*initialize buttons*/
                document.querySelectorAll('.number')[flexowrapnumber].innerHTML="0";
                flexowrapnumber++;
                // to prevent error after reset for not defining object and storage
                clickFunction(document.querySelectorAll('.flexowrap')[0]);
                staticObject['counting'+0]=0;
                document.querySelectorAll('.number')[0].innerHTML="0"
                 window.localStorage.setItem('counting'+0,staticObject['counting'+0]);
            })
            countAll=1;
            countAll_count.innerHTML="Total: 0"
            }
            addFunction=()=>{
            flexowrapnumber=0;            
            document.querySelectorAll('.flexowrap').forEach(el=>{
                 /*increment all object*/
                staticObject['counting'+flexowrapnumber]=Number(staticObject['counting'+flexowrapnumber])+1;
                /*increment all hisory*/
                 window.localStorage.setItem('counting'+flexowrapnumber,staticObject['counting'+flexowrapnumber]);
                /*increment all buttons*/
                document.querySelectorAll('.number')[flexowrapnumber].innerHTML=Number(
                    document.querySelectorAll('.number')[flexowrapnumber].innerHTML
                )+1;
                flexowrapnumber++;
            })
             countAll_count.innerHTML = `Total: ${countAll+60}`;
            }
            
            //reset button function given to hamburger and reset all button
            m[0].onclick=()=>{
                  startOver()
            }
            hamburger.onclick=()=>{
                 startOver()
            }
             m[1].onclick=()=>{
                 addFunction()
            }
            
            
