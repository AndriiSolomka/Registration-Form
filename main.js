"use strict";

import {URL} from "./const.js";

const getUserData = async (URL) => {
    try {
        const response = await fetch(URL);
        const data = await response.json();
        console.log(data)
        return data
    } catch (error) {
        console.error(error);
    }
}


getUserData(URL)
export {getUserData}
