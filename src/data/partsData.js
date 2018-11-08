import 'jquery';
import 'bootstrap';

import axios from 'axios';

const getFullBodyInfo = heads => Promise.all([getAllTorsosFromDb(), getAllLegsFromDb()])
  .then((dataArray) => {
    const getAllHeadsFromDb = heads;
    const getAllTorsosFromDb = dataArray[0].data;
    const getAllLegsFromDb = dataArray[1].data;
    const newHead = [];
    getAllHeadsFromDb.forEach((head) => {
      const newHead = head;
      getAllTorsosFromDb.forEach((torso) => {
        // if (head.teamId === torso.id) {
        //   newhead.team = torso.name;
        }
      });
      getAllLegsFromDb.forEach((legs) => {
        // if (leg.positionId === position.id) {
        //   newHead.position = position.name;
        }
      newHead.push(newHead);
    });
    return Promise.resolve(newHeads);
  })
  .catch((error) => {
    console.error({ error });
  });

const getAllHeadsFromDb = () => axios.get('hhttp://localhost:8089/heads');

const getAllTorsosFromDb = () => axios.get('hhttp://localhost:8089/torsos');

const getAllLegsFromDb = () => axios.get('hhttp://localhost:8089/legs');
