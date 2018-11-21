


//var questions = [] 


var questions = [{

    prompt: "Is Dubai the capital of Kuwait?",
    answer: "false",
},
    
    {
    prompt: "Is Chennai the capital of India?",
    answer: "false",
},
    
    {
    prompt: "Is Canberra the capital of Australia?",
    answer: "true",
},
    
    {
    prompt: "Is the capital of China is Shanghai?",
    answer: "false",
},
    {
    prompt: "The Kuwait Dinar the highest currency in the World?",
    answer: "true",
},
    
    {
    prompt: "Qatar is the richest country in the World?",
    answer: "true"
}];


                    
                    
                    
                    //We need to start a timer, that modifies the DOM every second and gives the effect of a timer
                    
                    //If time ends form should be submitted automatically
                    
                    //We also need a submit button
                    
                    //A function to read all the checked inputs and determine how many wrong and right and unanswered questions we have
                    //UPdate DOM and let user know
                    var score = 0;
                    
for(var i = 0; i < questions.length; i++){
    var questionNumber = i + 1;
    var newHtml = '<div class="radio-container"><h5>' + questions[i].prompt + '</h5><div class="input-container"><input data-index="' + i +'" type="radio" name="q' + questionNumber + '" value="true" id="q' + questionNumber + 'true"><label for="q' + questionNumber + 'true" name="q' + questionNumber + '">True</label><input type="radio" name="q' + questionNumber + '" value="false" id="q' + questionNumber + 'false"> <label for="q' + questionNumber + 'false" name="q' + questionNumber + '">False</label></div></div>';
                
                $("#boxInImage").append(newHtml)
                  }
                


                  setTimeout(function(){
                    console.log($('input:checked'));
                  }, 3000)
                
                
