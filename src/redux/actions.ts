import actionType from "./actionType";
import type { action } from "./types";

const changeVieToEng = (): action => {
    return {
        type: actionType.changeVieToEng,
    };
};
const changeEngToVie = (): action => {
    return {
        type: actionType.changeEngToVie,
    };
};

export { changeVieToEng, changeEngToVie };
