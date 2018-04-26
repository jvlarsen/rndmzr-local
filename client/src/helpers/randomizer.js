
const allocatePlayers = (numberOfParticipants) => {
  console.log(numberOfParticipants + ' deltagere i denne omgang.');

  var playerEle = document.getElementById('playerHome3');
  console.log(playerEle);
  playerEle.setAttribute('allocationkey', 3);
}

export default {
  allocatePlayers
}
