play = true;

function game() {
    // Input options
    const options = ['R', 'P', 'S'];
    // Use Math methods to generate a random pick from the options array
    const randomHand = options[Math.floor(Math.random()*options.length)];
    // Prompt user in browser to pick a hand.
    const chooseHand = window.prompt('Rock(R), Paper(P), or Scissors(S)?');

    // All outcomes based on matchup
    if (chooseHand == 'R' && randomHand == 'P') {
        window.alert('You chose ' + chooseHand + '. Your opponent hand is: ' + randomHand + '. You Lose!');
    } else if (chooseHand == 'R' && randomHand == 'S') {
        window.alert('You chose ' + chooseHand + '. Your opponent hand is: ' + randomHand + '. You Won!');
    } else if (chooseHand == 'P' && randomHand == 'S') {
        window.alert('You chose ' + chooseHand + '. Your opponent hand is: ' + randomHand + '. You Lose!');
    } else if (chooseHand == 'P' && randomHand == 'R') {
        window.alert('You chose ' + chooseHand + '. Your opponent hand is: ' + randomHand + '. You Won!');
    } else if (chooseHand == 'S' && randomHand == 'R') {
        window.alert('You chose ' + chooseHand + '. Your opponent hand is: ' + randomHand + '. You Lose!');
    } else if (chooseHand == 'S' && randomHand == 'P') {
        window.alert('You chose ' + chooseHand + '. Your opponent hand is: ' + randomHand + '. You Won!');
    } else {
        window.alert('You chose ' + chooseHand + '. Your opponent hand is: ' + randomHand + '. Draw!');
    };
}

// Run Rock, Paper, Scissors game
game();

// If continuing to play, rerun game()
while (play) {
    game();
    play = window.confirm('Would you like to play again?')
};
