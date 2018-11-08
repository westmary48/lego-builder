import 'jquery';
import 'bootstrap';


const headBuilder = (head) => {
  const domString = `
    <li class="player-team-${head.id}">
      <div class="img-holder">
        <img class="player-img" src="${head.imgURL}">
      </div>
      <h3 class="header-name">${head.name}</h3>
    </li>
  `;

  return domString;
};

const torsosBuilder = (torso) => {
  const domString = `
      <li class="player-team-${torso.id}">
        <div class="img-holder">
          <img class="player-img" src="${torso.imgURL}">
        </div>
        <h3 class="header-name">${torso.name}</h3>
      </li>
    `;

  return domString;
};

const legsBuilder = (leg) => {
  const domString = `
      <li class="player-team-${leg.id}">
        <div class="img-holder">
          <img class="player-img" src="${leg.imgURL}">
        </div>
        <h3 class="header-name">${leg.name}</h3>
      </li>
    `;

  return domString;
};

const legoBuilder = () => {
  headBuilder();
  torsosBuilder();
  legsBuilder();
};

legoBuilder();
