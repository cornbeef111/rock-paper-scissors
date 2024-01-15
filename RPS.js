
            // using an object to store the score of the game
        let score =  JSON.parse(localStorage.getItem('score')) || {
                wins: 0,
                losses: 0,
                ties: 0
          };
        let isAutoPlay = false;
        let intervalId;

        function autoPlay(){
            if(!isAutoPlay){
               intervalId = setInterval(function(){
                
                    rockClick();
                    paperClick();
                    scissorsClick();
                  }, 1000);
                  isAutoPlay = true;
            }else{
                clearInterval(intervalId);
                isAutoPlay = false;
            }
           
        }



        function rockClick(){
            const randomNumber = Math.random();
            let computerMove = '';

            if(randomNumber >= 0 && randomNumber < 1/3){
                computerMove = 'rock';
            }else if (randomNumber >= 1/3 && randomNumber < 2/3){
                computerMove = 'paper';
            }else if (randomNumber >= 2/3 && randomNumber < 1){
                computerMove = 'scissors';
            }

            let result = '';
            if(computerMove === 'rock'){
                result = "Tie";
            }else if(computerMove === "paper"){
                result = "You loose";
            }else if(computerMove === "scissors"){
                result = "You win";
            }
            
            if(result === "Tie"){
                score.ties += 1;
            }else if(result === "You loose"){
                score.losses += 1;
            }else if(result === "You win"){
                score.wins += 1;
            }
            
            localStorage.setItem('score',JSON.stringify(score));
             
            document.querySelector('.showScore').innerHTML = `wins: ${score.wins}, losses: ${score.losses}, ties: ${score.ties}`; 
            
            document.querySelector('.js-result').innerHTML = result;
            document.querySelector('.js-moves').innerHTML = ` You <img src="images/rock-emoji.png" class="moveIcon">
                <img src="images/${computerMove}-emoji.png" class="moveIcon"> Computer`;
            
         }
        
        function paperClick(){
            const randomNumber = Math.random();
            let computerMove = '';

            if(randomNumber >= 0 && randomNumber < 1/3){
                computerMove = 'rock';
            }else if (randomNumber >= 1/3 && randomNumber < 2/3){
                computerMove = 'paper';
            }else if (randomNumber >= 2/3 && randomNumber < 1){
                computerMove = 'scissors';
            }

            let result = '';
            if(computerMove === 'rock'){
                result = "You win";
            }else if(computerMove === "paper"){
                result = "Tie";
            }else if(computerMove === "scissors"){
                result = "You loose";
            }

            if(result === "Tie"){
                score.ties += 1;
            }else if(result === "You loose"){
                score.losses += 1;
            }else if(result === "You win"){
                score.wins += 1;
            }

            localStorage.setItem('score',JSON.stringify(score));

            document.querySelector('.showScore').innerHTML = `wins: ${score.wins}, losses: ${score.losses}, ties: ${score.ties}`; 
            
            document.querySelector('.js-result').innerHTML = result;
            document.querySelector('.js-moves').innerHTML = ` You <img src="images/paper-emoji.png" class="moveIcon">
                <img src="images/${computerMove}-emoji.png" class="moveIcon"> Computer`;
        }
        
        function scissorsClick(){
            const randomNumber = Math.random();
            let computerMove = '';

            if(randomNumber >= 0 && randomNumber < 1/3){
                computerMove = 'rock';
            }else if (randomNumber >= 1/3 && randomNumber < 2/3){
                computerMove = 'paper';
            }else if (randomNumber >= 2/3 && randomNumber < 1){
                computerMove = 'scissors';
            }

            let result = '';
            if(computerMove === 'rock'){
                result = "You loose";
            }else if(computerMove === "paper"){
                result = "You win";
            }else if(computerMove === "scissors"){
                result = "Tie";
            }

            if(result === "Tie"){
                score.ties += 1;
            }else if(result === "You loose"){
                score.losses += 1;
            }else if(result === "You win"){
                score.wins += 1;
            }

            localStorage.setItem('score',JSON.stringify(score));


            document.querySelector('.showScore').innerHTML = `wins: ${score.wins}, losses: ${score.losses}, ties: ${score.ties}`; 
            
            document.querySelector('.js-result').innerHTML = result;
            document.querySelector('.js-moves').innerHTML = ` You <img src="images/scissors-emoji.png" class="moveIcon">
                <img src="images/${computerMove}-emoji.png" class="moveIcon"> Computer`;
        }
        
        function reset(){
            score.wins = 0;
            score.ties = 0;
            score.losses = 0;
            document.querySelector('.showScore').innerHTML = `wins: ${score.wins}, losses: ${score.losses}, ties: ${score.ties}`;
        }

        
