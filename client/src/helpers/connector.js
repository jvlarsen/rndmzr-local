

const randomize = (selectedEvent, selectedPlayer) => {
  //var participants = getParticipants();
  //console.log(parts);
  console.log(selectedEvent + ' - ' + selectedPlayer + ' printed from Connector.');
  var result = [{status:'0',value: 3}, {status:'1', value:2}, {status:'2', value:8}];
  return result;
}

const getParticipants = () => {
  var participants = fetch('/participants')
    .then(res => res.json());
  return participants;
}

const getEvents = () => {
  //Type 1 = Other 1
  //Type 1 = Other 2
  //Type 1 = Other 3
  //Type 2 = Owner 1
  //Type 2 = Owner 2
  //Type 2 = Owner 3
  var allEvents = fetch('/events')
    .then(res => res.json());

  return allEvents;
}

const getMeasures = () => {
  var measures = {'Other1':{'Small':50, 'Medium':30, 'Large':15, 'Walter':5},
                'Other2':{'Small':29, 'Medium':31, 'Large':25, 'Walter':15},
                'Other3':{'Small':15, 'Medium':24, 'Large':35, 'Walter':26},
                'Own1':{'Small':40, 'Medium':30, 'Large':20, 'Walter':10},
                'Own2':{'Small':20, 'Medium':29, 'Large':31, 'Walter':20},
                'Own3':{'Small':15, 'Medium':25, 'Large':28, 'Walter':32},};

  return measures;
}

export default {
  randomize,
  getParticipants,
  getEvents,
  getMeasures,
}
