const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name? Nicknames are also acceptable :)", (answer) => {
  // TODO: Log the answer in a database
  database = {
    nickname: "",
    activity: "",
    listenTo: "",
    favMeal: "",
    favFood: "",
    favSport: "",
    superPower: ""
  }

  database.nickname = answer;

  rl.question("What's an activity you like doing?", (answer) => {
    // TODO: Log the answer in a database
    database.activity = answer;
    rl.question("What do you listen to while doing that?", (answer) => {
      // TODO: Log the answer in a database
      database.listenTo = answer;
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.)", (answer) => {
        // TODO: Log the answer in a database
        database.favMeal = answer;
        rl.question("What's your favourite thing to eat for that meal?", (answer) => {
          // TODO: Log the answer in a database
          database.favFood = answer;
          rl.question("Which sport is your absolute favourite?", (answer) => {
            // TODO: Log the answer in a database
            database.favSport = answer;
            rl.question("What is your superpower? In a few words, tell us what you are amazing at!", (answer) => {
              // TODO: Log the answer in a database
              database.superPower = answer;
              console.log(database.nickname, "loves listening to", database.listenTo, "while", database.activity + ", devouring", database.favFood, "for", database.favMeal + ", prefers", database.favSport, "over any other sport, and is amazing at", database.superPower + ".");
              rl.close();
            });
            
          });
          
        });
        
      });
      
    });
    
  });
});