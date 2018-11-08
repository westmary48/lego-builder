import 'jquery';
import 'bootstrap';

import axios from 'axios';


const getAllHeadsFromDb = () => new Promise((resolve, reject) => {
  axios.get('http://localhost:8089/heads')
    .done((data) => {
      resolve(data);
    })
    .fail((error) => {
      reject(error);
    });
});

const getAllTorsosFromDb = () => new Promise((resolve, reject) => {
  axios.get('http://localhost:8089/torsos')
    .done((data) => {
      resolve(data);
    })
    .fail((error) => {
      reject(error);
    });
});


const getAllLegsFromDb = () => new Promise((resolve, reject) => {
  axios.get('http://localhost:8089/legs')
    .done((data) => {
      resolve(data);
    })
    .fail((error) => {
      reject(error);
    });
});

const allData = () => {
  getAllHeadsFromDb();
  getAllTorsosFromDb();
  getAllLegsFromDb();
};

allData();

export default allData;
