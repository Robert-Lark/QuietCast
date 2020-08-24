export const ISOLATE_FEATURE = "ISOLATE_FEATURE";
export const SHOW_FEATURE = "SHOW_FEATURE";
export const DELETE_COMPLETED = "DELETE COMPLETED";

export const isolateFeature = (feature) => {
//console.log(feature)
   return { type: ISOLATE_FEATURE, payload: feature };
};
export const showFeature = (feature) => {
	return { type: SHOW_FEATURE, payload: feature };
};

export const hideUnselected = () => {
    return { type: DELETE_COMPLETED };
}
