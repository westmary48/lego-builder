import 'jquery';
import 'bootstrap';
import './index.scss';

import legoBuilder from './components/LegoCharacter/legoCharacter';
import allData from './data/partsData';

const initializeApp = () => {
  allData();
  legoBuilder();
};

initializeApp();
