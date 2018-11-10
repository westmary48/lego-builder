import $ from 'jquery';
import 'bootstrap';

import partsData from '../../data/partsData';


const headBuilder = (headsArray) => {
  let newString = '';
  for (let i = 0; i < headsArray.length; i += 1) {
    newString += `
        <div class ="card-containter">
          <div class="card-body">
            <h2 class="card-id">${headsArray[i].id}</h2>
            <img class="card-image" src = "${headsArray[i].imageUrl}">
            <div class="card-name">${headsArray[i].name}</div>
          </div>
         </div>`;
  }
  $('#heads').html(newString);
};

const torsosBuilder = (torsosArray) => {
  let newString = '';
  for (let i = 0; i < torsosArray.length; i += 1) {
    newString += `
          <div class ="card-containter">
            <div class="card-body">
              <h2 class="card-id">${torsosArray[i].id}</h2>
              <img class ="card-image" src = "${torsosArray[i].imageUrl}">
              <div class="card-name">${torsosArray[i].name}</div>
            </div>
           </div>`;
  }

  $('#torsos').html(newString);
};

const legsBuilder = (legsArray) => {
  let newString = '';
  for (let i = 0; i < legsArray.length; i += 1) {
    newString += `
          <div class ="card-containter">
            <div class="card-body">
              <h2 class="card-id">${legsArray[i].id}</h2>
              <img class="card-image" src = "${legsArray[i].imageUrl}">
              <div class="card-name">${legsArray[i].name}</div>
            </div>
           </div>`;
  }
  $('#legs').html(newString);
};
const headsData = () => {
  partsData.getAllHeadsFromDb()
    .then((data) => {
      console.log(data.data);
      headBuilder(data.data);
    })
    .catch((error) => {
      console.error({ error });
    });
};

const torsosData = () => {
  partsData.getAllTorsosFromDb()
    .then((data) => {
      torsosBuilder(data.data);
    })
    .catch((error) => {
      console.error({ error });
    });
};

const legsData = () => {
  partsData.getAllLegsFromDb()
    .then((data) => {
      legsBuilder(data.data);
    })
    .catch((error) => {
      console.error({ error });
    });
};

export default { legsData, torsosData, headsData };
