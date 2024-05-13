'use strict';

import { base_URL } from '../const/const.js';

const getUserData = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
};

getUserData(base_URL);
export { getUserData };
