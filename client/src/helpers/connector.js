

const randomize = (selectedEvent, selectedPlayer) => {
  console.log(selectedEvent + ' - ' + selectedPlayer + ' printed from Connector.');
  var result = [{status:'0',value: 3}, {status:'1', value:2}, {status:'2', value:8}];
  return result;
}

const getParticipants = () => {
  var result = fetch('/participants')
    .then(res => res.json());
  return result;
}

export default {
  randomize,
  getParticipants
}
