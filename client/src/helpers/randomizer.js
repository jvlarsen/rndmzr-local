import Connector from './connector';

const allocatePlayers = (numberOfParticipants) => {
  console.log(numberOfParticipants + ' deltagere i denne omgang.');

  var playerEle = document.getElementById('playerHome3');
  console.log(playerEle);
  playerEle.setAttribute('allocationkey', 3);
}

//vil gerne have hele elementet med.
const randomize = (selectedPlayer, selectedEvent) => {
  console.log(selectedPlayer + selectedEvent);
  return Connector.randomize(selectedPlayer, selectedEvent);
}

export default {
  allocatePlayers,
  randomize,
}
