export const ISOLATE_FEATURE = "ISOLATE_FEATURE";
export const SHOW_FEATURE = "SHOW_FEATURE";
export const DARKMODE = "DARKMODE";
export const RETURN_HOME = "RETURN HOME";
export const ASSIGN_MODAL = "ASSIGN MODAL";

export const isolateFeature = (feature) => {
    window.scrollTo(0, 0);
   return { type: ISOLATE_FEATURE, payload: feature };
};
export const showFeature = (feature) => {
	return { type: SHOW_FEATURE, payload: feature };
};

export const darkMode = () => {
    return { type: DARKMODE };
}

export const returnHome = () => {
    window.scrollTo(0, 0);
    return { type: RETURN_HOME };
}
export const assignModal = (modal) => {
    return { type: ASSIGN_MODAL, payload: modal };
}
