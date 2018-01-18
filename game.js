/*---window loads---*/

window.onload = function(){
    var col1,col2,col3,randomNumber,sum=0,index=0,pickedcolor;
    var ar = [0,0,0];
    var htmlar = [0,0,0];
    var colorar =[0,0,0];
    //var gameplay true;
    
    generate();
    
    document.querySelector(".hard").addEventListener('click',changer);
    document.querySelector(".easy").addEventListener('click',changer);
    
    /*---new game---*/
    
    document.querySelector(".again").addEventListener('click',generate);
    
    /*---new game ends---*/
   
    /*------------game algorithm------------*/
    document.getElementById("sq-1").addEventListener('click',function(){
       if (gameplay==true)
           {
                if ((this.style.backgroundColor.match(/\d+/g)[0] == htmlar[0])&&(this.style.backgroundColor.match(/\d+/g)[1] == htmlar[1])&&(this.style.backgroundColor.match(/\d+/g)[2] == htmlar[2])){
                    win();
                }
                else{
                    document.getElementById("sq-1").style.backgroundColor = "rgb(255,255,255)";
                }
           }
    });
    document.getElementById("sq-2").addEventListener('click',function(){
        if (gameplay==true)
            {
                if ((this.style.backgroundColor.match(/\d+/g)[0] == htmlar[0])&&(this.style.backgroundColor.match(/\d+/g)[1] == htmlar[1])&&(this.style.backgroundColor.match(/\d+/g)[2] == htmlar[2])){
                        pickedcolor = this.style.backgroundColor;
                        win();
                }
                else{
                        document.getElementById("sq-2").style.backgroundColor = "rgb(255,255,255)";
                }  
            }
        
    });
    document.getElementById("sq-3").addEventListener('click',function(){
        if (gameplay==true)
            {
                if ((this.style.backgroundColor.match(/\d+/g)[0] == htmlar[0])&&(this.style.backgroundColor.match(/\d+/g)[1] == htmlar[1])&&(this.style.backgroundColor.match(/\d+/g)[2] == htmlar[2])){
                    pickedcolor = this.style.backgroundColor;
                    win();
                }
                else{
                    document.getElementById("sq-3").style.backgroundColor = "rgb(255,255,255)";
                }
            }
    });
    document.getElementById("sq-4").addEventListener('click',function(){
        if (gameplay==true)
            {
                if ((this.style.backgroundColor.match(/\d+/g)[0] == htmlar[0])&&(this.style.backgroundColor.match(/\d+/g)[1] == htmlar[1])&&(this.style.backgroundColor.match(/\d+/g)[2] == htmlar[2])){
                    pickedcolor = this.style.backgroundColor;
                    win();
                }
                else{
                    document.getElementById("sq-4").style.backgroundColor = "rgb(255,255,255)";
                }
            }
    });
    document.getElementById("sq-5").addEventListener('click',function(){
        if (gameplay==true)
            {
                if ((this.style.backgroundColor.match(/\d+/g)[0] == htmlar[0])&&(this.style.backgroundColor.match(/\d+/g)[1] == htmlar[1])&&(this.style.backgroundColor.match(/\d+/g)[2] == htmlar[2])){
                    pickedcolor = this.style.backgroundColor;
                    win();
                }
                else{
                    document.getElementById("sq-5").style.backgroundColor = "rgb(255,255,255)";
                }
            }
    });
    document.getElementById("sq-6").addEventListener('click',function(){
        if (gameplay==true)
            {
                if ((this.style.backgroundColor.match(/\d+/g)[0] == htmlar[0])&&(this.style.backgroundColor.match(/\d+/g)[1] == htmlar[1])&&(this.style.backgroundColor.match(/\d+/g)[2] == htmlar[2])){
                    pickedcolor = this.style.backgroundColor;
                    win();
                }
                else{
                    document.getElementById("sq-6").style.backgroundColor = "rgb(255,255,255)";
                }
            }
    });
    /*-------------game algorithm ends----------------*/
    
    
    
    /*--generator--*/
    function generate(){
        gameplay=true;
        sum = 0;
        index = 0;
        ar = [0,0,0];
        htmlar = [0,0,0];
        colorar = [0,0,0];
        col1=Math.floor(Math.random()*255)+1;
        col2=Math.floor(Math.random()*255)+1;
        col3=Math.floor(Math.random()*255)+1;
        colorar[0] = col1;
        colorar[1] = col2;
        colorar[2] = col3;
        while(sum!==3){
            randomNumber = Math.floor(Math.random()*3)+1;
            if(ar[randomNumber-1]===0){
                htmlar[index]=colorar[randomNumber-1]
                sum++;
                index++;
                ar[randomNumber-1]=1;
            }
        }
        
        document.querySelector(".again").textContent = "Reset Game";
        document.getElementById("heading").style.backgroundColor = "rgb(222, 184, 135)";
        
        document.getElementById("text1").textContent = "";
        document.getElementById("text2").textContent = "";
        document.getElementById("text3").textContent = "";
        document.getElementById("text4").textContent = "";
        document.getElementById("text5").textContent = "";
        document.getElementById("text6").textContent = "";
        
        document.getElementById("lowertext").textContent = "Guess the color mentioned above as RGB";
        
        document.getElementById("value").textContent = "RGB("+htmlar[0]+","+htmlar[1]+","+htmlar[2]+")";
        document.getElementById("sq-1").style.backgroundColor = "rgb("+col1+","+col2+","+col3+")";
        document.getElementById("sq-2").style.backgroundColor = "rgb("+col1+","+col3+","+col2+")";
        document.getElementById("sq-3").style.backgroundColor = "rgb("+col2+","+col1+","+col3+")";
        document.getElementById("sq-4").style.backgroundColor = "rgb("+col2+","+col3+","+col1+")";
        document.getElementById("sq-5").style.backgroundColor = "rgb("+col3+","+col1+","+col2+")";
        document.getElementById("sq-6").style.backgroundColor = "rgb("+col3+","+col2+","+col1+")";
        
        
    }
    /*--generator ends--*/
    
    
    /*--changer--*/
    function changer(){
        document.querySelector(".hard").classList.toggle("active");
        document.querySelector(".easy").classList.toggle("active");
        
        /*---generator---*/
        
        generate();
        
        /*---generator ends ---*/
           

    };
    /*---changer ends--*/
    
    
    /*-----win function-----*/
    function win(){
        document.getElementById("sq-1").style.backgroundColor = pickedcolor;
        document.getElementById("sq-2").style.backgroundColor = pickedcolor;
        document.getElementById("sq-3").style.backgroundColor = pickedcolor;
        document.getElementById("sq-4").style.backgroundColor = pickedcolor;
        document.getElementById("sq-5").style.backgroundColor = pickedcolor;
        document.getElementById("sq-6").style.backgroundColor = pickedcolor;
        document.getElementById("heading").style.backgroundColor = pickedcolor;
        document.querySelector(".again").textContent = "!!  Play Again  !!";
        
        document.getElementById("text1").textContent = "Y";
        document.getElementById("text2").textContent = "O";
        document.getElementById("text3").textContent = "U";
        document.getElementById("text4").textContent = "W";
        document.getElementById("text5").textContent = "I";
        document.getElementById("text6").textContent = "N";
        document.getElementById("lowertext").textContent ="";
        gamplay=false;
        }
    /*-----win function ends-----*/
}


/*---window ends---*/





