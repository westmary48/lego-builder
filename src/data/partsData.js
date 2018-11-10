import 'jquery';
import 'bootstrap';

import axios from 'axios';

const getAllHeadsFromDb = () => axios.get('http://localhost:8089/heads');

const getAllTorsosFromDb = () => axios.get('http://localhost:8089/torsos');

const getAllLegsFromDb = () => axios.get('http://localhost:8089/legs');


const allData = () => {
  getAllHeadsFromDb();
  getAllTorsosFromDb();
  getAllLegsFromDb();
};

allData();

export default { getAllHeadsFromDb, getAllTorsosFromDb, getAllLegsFromDb };
