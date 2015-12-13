/*
Japanese Vocabulary Quiz Program
This program prompts the user to define a Japanese term in English, and will
gives a final count of how many terms were defined, how many were correct, and
how many were incorrect.
Natalie Szews
*/




//counts how many times the user correctly defined a term
var correctCounter = 0;

//counts how mant times the user incorrectly defined a term
var incorrectCounter = 0;

//the Japanese terms being used
var japaneseVocabulary = [
    {
      "japaneseTerm": "わたし",
      "englishDefinition": "I"
    },
    {
      "japaneseTerm": "こんにちは",
      "englishDefinition": "HELLO"
    },
    {
      "japaneseTerm": "ありがとう",
      "englishDefinition": "THANK YOU"
    },
    {
      "japaneseTerm": "いいえ",
      "englishDefinition": "NO"
    },
    {
      "japaneseTerm": "はい",
      "englishDefinition": "YES"
    }
  ]; 
  
  var promptCounter = 0;

  
//this function does the comparing of user inputs to the answers
function CompareAnswersToDefinitions (englishDefinitionInput) {
  
  //declare variables  
  var secondEnglishDefinitionInput;
  
  //if definition is left blank  
  if (englishDefinitionInput.toUpperCase() === "") {
    alert("Please enter a definition.\n");   
    secondEnglishDefinitionInput = prompt("What is the English definition of " + 
                                japaneseVocabulary[promptCounter].japaneseTerm +
                                "?\n");
    secondEnglishDefinitionInput = secondEnglishDefinitionInput.toUpperCase();
    if (secondEnglishDefinitionInput === japaneseVocabulary[promptCounter].englishDefinition) {
      alert("Correct!");
      correctCounter++;
    } else {
      alert("Sorry, that's not correct. The correct definition of " +
            japaneseVocabulary[promptCounter].japaneseTerm + 
            " is " + 
            japaneseVocabulary[promptCounter].englishDefinition + "\n");
      incorrectCounter++;
     }   
  //if the definition is not a string
  } else if ((isNaN(englishDefinitionInput) === false)) {
    alert("You entered a number. Please enter a text definition.\n");  
    secondEnglishDefinitionInput = prompt("What is the English definition of " + 
             japaneseVocabulary[promptCounter].japaneseTerm +
             "?\n");
      if (secondEnglishDefinitionInput.toUpperCase() === japaneseVocabulary[promptCounter].englishDefinition) {
        alert("Correct!\n");
        correctCounter++;
      } else{
        alert("Sorry, that's not correct. The correct definition of " +
              japaneseVocabulary[promptCounter].japaneseTerm + 
              " is " + 
              japaneseVocabulary[promptCounter].englishDefinition + "\n");
               incorrectCounter++;
      } 
    //if definition is not correct
  } else if (englishDefinitionInput.toUpperCase() !== japaneseVocabulary[promptCounter].englishDefinition) {
    alert("Sorry, that is not correct. Please try again.\n");
    secondEnglishDefinitionInput = prompt("What is the English definition of " + 
                          japaneseVocabulary[promptCounter].japaneseTerm + "?\n");
    if (secondEnglishDefinitionInput.toUpperCase() === japaneseVocabulary[promptCounter].englishDefinition) {
      alert("Correct!\n");
      correctCounter++;
    } else{
      alert("Sorry, that's not correct. The correct definition of " +
             japaneseVocabulary[promptCounter].japaneseTerm + 
            " is " + 
            japaneseVocabulary[promptCounter].englishDefinition + "\n");
            incorrectCounter++;
    }
  //when the definition is correct
  } else {
    alert("Correct!\n");
    correctCounter++;
  }
    
promptCounter++;  
}

//this function holds the prompts and final output
function Main() {  

  //number of times the user can try to answer again 
  var numberOfTerms = japaneseVocabulary.length;
  var output = "";
  var userEnglishDefinition;
  
  while (promptCounter < numberOfTerms) {
    userEnglishDefinition = prompt("What is the English definition of " +
                            japaneseVocabulary[promptCounter].japaneseTerm + 
                            "?");
    
    CompareAnswersToDefinitions(userEnglishDefinition);  
  }
    
  //create the final message with the correct/incorrect counters
  output =  "You're finished!\n\n" +
            "You defined " + promptCounter + " Japanese term(s).\n" +
            "You defined " + correctCounter + " term(s) correctly.\n" +
            "You defined " + incorrectCounter + " term(s) incorrectly.";
                      
  document.write(output);  
}

//Run the program
Main ();

 