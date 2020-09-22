const  setOfWords =
   [
  "Carmen, how long has she had this fever?",
   "The castle was heavily bombed during the war.",
   "Joe waited for the train, but the train was late.",
   "Mary and Samantha arrived at the bus station early but waited until noon for the bus",
   " Yes, there it was, all quivering in the warm sunshine, its blossom-laden branches almost touching the long grass.",
   "I looked for Mary and Samantha at the bus station, but they arrived at the station before noon and left on the bus before I arrived.",
   " a day or two passed and there was great activity aboard the pequod not only were the old sails being mended but new sails were coming on board and bolts of canvas and coils.",
"For a long time Pierre could not understand, but when he did, he jumped up from the sofa, seized Boris under the elbow in his quick, clumsy way, and, blushing far more than Boris, began to speak with a feeling of mingled shame and vexation.",
"And some years pass during which he plays a pitiful comedy to himself in solitude on his island, justifying his actions by intrigues and lies when the justification is no longer needed, and displaying to the whole world what it was that people had mistaken for strength as long as an unseen hand directed his actions.",

];
const msg= document.getElementById('msg');
const typeWords = document.getElementById('mywords');
const btn = document.getElementById('btn');

let startTime , endTime;

const playGame = () => {
    let randomNumber = Math.floor(Math.random()*setOfWords.length);
    msg.innerText = setOfWords[randomNumber];
    
    let date= new Date();
    startTime = date.getTime();

    btn.innerText="Done";
}

const endPlay = () => {
    let date= new Date();
    endTime = date.getTime();

    let totalTime = ((endTime - startTime )/1000); 
    console.log(totalTime);

    let totalString = typeWords.value;
    let wordCount = wordCounter(totalString);

    let speed = Math.round((wordCount / totalTime)*60);

    let finalMsg = " You typed total at "  + speed +  " words per minutes ";
   
    finalMsg += compareWord(msg.innerText , totalString);
    
    msg.innerText= finalMsg;
} 



const compareWord = (str1 , str2) =>{
    let word1 = str1.split(" ");
    let word2 = str2.split(" ");
    let cnt=0;  

    word1.forEach(function(item,index){
     if(item == word2[index]){
         cnt++;
     }
    })

    let errorWords = (word1.length - cnt);
    return (cnt + " correct out of " + word1.length + " words and the total number of error are " + errorWords + ".");

}

const wordCounter = (str) => {
    let response = str.split(" ").length;
    console.log(response);
    return response;
}



btn.addEventListener('click',function(){
    if(this.innerText == 'Start'){
        typeWords.disabled = false;
        playGame();
}
else if(this.innerText == 'Done'){
    typeWords.disabled = true;
    btn.innerText="Start";
    
    endPlay();
}
})