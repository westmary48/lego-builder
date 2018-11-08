const headButton = () => {
  $('#headsButtons').on('click', () => {
    console.log('heads');
  });
};
const torsoButton = () => {
  $('#torsoButtons').on('click', () => {
    console.log('legs');
  });
};

const legsButton = () => {
  $('#legsButtons').on('click', () => {
    console.log('legs');
  });
};

const buttonEvents = () => {
  headButton();
  torsoButton();
  legsButton();
};

buttonEvents();
