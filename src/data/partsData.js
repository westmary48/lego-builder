import 'jquery';
import 'bootstrap';

import axios from 'axios';

const getAllHeadsFromDb = () => axios.get('http://localhost:3007/heads');

const getAllTorsosFromDb = () => axios.get('http://localhost:3007/torsos');

const getAllLegsFromDb = () => axios.get('http://localhost:3007/legs');

export default { getAllHeadsFromDb, getAllTorsosFromDb, getAllLegsFromDb };
