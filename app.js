let scores, roundScore, activePlayer, dice, gamePlaying = true;

document.querySelector('.player-0-panel').classList.add('active');
function init() 
{
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;
    document.querySelector('.dice').style.display = 'none';

    document.getElementById('score-0').textContent = '0';

    document.getElementById('name-0').textContent = 'Player';

    document.querySelector('.player-0-panel').classList.remove('winner');

}

init();

    
roundScore = 0;
document.getElementById('score-0').textContent = '0';
document.querySelector('.player-0-panel').classList.toggle('active');
document.querySelector('.dice').style.display = 'none';

document.querySelector('.btn-new').addEventListener('click', init);
document.querySelector('.btn-roll').addEventListener('click', function(){
    if(gamePlaying) {
        let dice = Math.floor(Math.random() * 6) + 1;
        let diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = './dice/d' + dice + '.png';
    
        if (dice !== 1){
            roundScore += dice;
            document.querySelector('#score-' + activePlayer).textContent = roundScore;
            document.getElementById('current-0').textContent = `${Math.max(roundScore)}`;
        }
        else if (roundScore >= 20) {
            init()
        }
        else {
            init()
        }
    }
});