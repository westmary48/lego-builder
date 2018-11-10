import 'jquery';
import 'bootstrap';
import './index.scss';


import legoBuilder from './components/LegoCharacter/legoCharacter';
import partsData from './data/partsData';

const initializeApp = () => {
  partsData.getAllHeadsFromDb();
  partsData.getAllTorsosFromDb();
  partsData.getAllLegsFromDb();
  legoBuilder.legsData();
  legoBuilder.headsData();
  legoBuilder.torsosData();
};

initializeApp();
