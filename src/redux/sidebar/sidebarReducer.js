import { actionsType } from "./sidebarActionsType";

const INITIAL_STATE = {
  display: false
};

const sidebarReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case actionsType.TOGGLE_SIDE_BAR:
      return {
        display: !state.display
      };

    default:
      return state;
  };
};

export default sidebarReducer;