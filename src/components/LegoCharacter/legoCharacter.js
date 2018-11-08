import 'jquery';
import 'bootstrap';

import allData from '../../data/partsData';


const headBuilder = (head) => {
  const domString = `
    <li class="head-id-${head[0].id}">
      <div class="img-holder">
        <img class="head-img" src="${head[0].imgURL}">
      </div>
      <h3 class="head-name">${head[0].name}</h3>
    </li>
  `;
  $('#headsId').html(domString);
};

const torsosBuilder = (torso) => {
  const domString = `
      <li class="player-id-${torso[0].id}">
        <div class="img-holder">
          <img class="torsos-img" src="${torso[0].imgURL}">
        </div>
        <h3 class="torsos-name">${torso[0].name}</h3>
      </li>
    `;

  $('#torsosId').html(domString);
};

const legsBuilder = (leg) => {
  const domString = `
      <li class="legs-team ${leg[0].id}">
        <div class="img-holder">
          <img class="legs-img" src="${leg[0].imgURL}">
        </div>
        <h3 class="legs-name">${leg[0].name}</h3>
      </li>
    `;
  $('#legsId').html(domString);
};

const legoBuilder = () => {
  headBuilder();
  torsosBuilder();
  legsBuilder();
  allData();
};

legoBuilder();

export default legoBuilder;
