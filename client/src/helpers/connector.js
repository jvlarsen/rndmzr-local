

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

const getEvents = () => {
  //Type 1 = Other 1
  //Type 1 = Other 2
  //Type 1 = Other 3
  //Type 2 = Owner 1
  //Type 2 = Owner 2
  //Type 2 = Owner 3
  var allEvents = [{Id:1, Name:'Goal', Type:'1', Small:10, Medium:20, Large:30, Walter:40},
          {Id:2, Name:'Free kick committed', Type:'2', Small:40, Medium:30, Large:20, Walter:10},
          {Id:3, Name:'Yellow card', Type:'2', Small:10, Medium:20, Large:30, Walter:40},
          {Id:4, Name:'Shot on target', Type:'1', Small:10, Medium:20, Large:30, Walter:40}];
  return allEvents;
}

export default {
  randomize,
  getParticipants,
  getEvents,
}
