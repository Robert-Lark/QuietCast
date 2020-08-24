export const ISOLATE_FEATURE = "ISOLATE_FEATURE";
export const SHOW_FEATURE = "SHOW_FEATURE";
export const DARKMODE = "DARKMODE";
export const RETURN_HOME = "RETURN HOME";

export const isolateFeature = (feature) => {
console.log(feature)
   return { type: ISOLATE_FEATURE, payload: feature };
};
export const showFeature = (feature) => {
	return { type: SHOW_FEATURE, payload: feature };
};

export const darkMode = () => {
    return { type: DARKMODE };
}

export const returnHome = () => {
    return { type: RETURN_HOME };
}
