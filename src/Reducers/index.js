export const initialState = {
dark: true,
Display: true,
}


export const classReducer = (state, action) => {
switch (action.type) {
	case "TOGGLE_CLASS_DARK":
		return { ...state, dark: !state.dark };
	case "TOGGLE_CLASS_DISPLAY":
		return { ...state, Display:!state.Display};
	default:
		return state; // do nothing, just return previous state unchanged
}
}