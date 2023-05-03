

//VARIABLES
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnEvent = document.querySelector("#btn1")
const btnReset = document.querySelector("#btn2")

//EVENTS
  btnEvent.addEventListener('click', choosingTheMessage)
  btnReset.addEventListener('click', deliveringResetClick)

// AUXILIARY FUNCTIONS
  function toggleScreen () {
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
  }

// BOSS FUNCTIONS (WITH CALLBACK)
  function choosingTheMessage (){
    let randomNumber = Math.round(Math.random() * 10)
    toggleScreen()
  
    switch (randomNumber.toString()) { 
      case '0':
        screen2.querySelector("h2").innerText = `Never love anyone who treats you like you're ordinary.`
         break;

      case '1':
        screen2.querySelector("h2").innerText = `Remember that sometimes not getting what you want is a wonderful stroke of luck.`      
        break;
  
      case '2':
        screen2.querySelector("h2").innerText = `It’s not so much what we have in this life that matters. \nIt’s what we do with what we have.`;
        break;
  
      case '3':
        screen2.querySelector("h2").innerText = `Life is not a problem to be solved, but a reality \nto be experienced.`;
        break;
      
      case '4':
        screen2.querySelector("h2").innerText = `There are no \nsecrets to success... \nIt is the result of preparation, hard work, and learning from failure.`;
        break;
      
      case '5':
        screen2.querySelector("h2").innerText = `Continuous effort \n– not strength or intelligence – \nis the key to unlocking our potential.`;
        break;
  
      case '6':
        screen2.querySelector("h2").innerText = `Courage is risking the known for the unknown, the familiar for the unfamiliar.`;
        break;
        
      case '7':
        screen2.querySelector("h2").innerText = `Stand for something or you will fall for \nanything. \nToday’s mighty oak is \nyesterday’s nut that held its ground.`;
        break;
      
      case '8':
        screen2.querySelector("h2").innerText = `Changes that seem small and unimportant at first will compound into remarkable results \nif you’re willing \nto stick with them \nfor years.`;
        break;
  
      case '9':
        screen2.querySelector("h2").innerText = `The hard choices \n– what we most fear doing, asking, saying – these are very often exactly what we most need to do.`;
        break;
        
      case '10':
        screen2.querySelector("h2").innerText = `Have enough courage \nto trust love one more time \nand always one more time.`;
        break;       
    }
    console.log(randomNumber)
  }

  function deliveringResetClick(){
    toggleScreen()
  }