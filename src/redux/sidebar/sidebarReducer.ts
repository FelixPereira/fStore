import { actionsType } from "./sidebarActionsType";

const INITIAL_STATE = {
  showSidebar: false,
};

const sidebarReducer = (state = INITIAL_STATE, action: any) => {
  switch(action.type) {
    case actionsType.TOGGLE_SIDE_BAR:
      return {
        showSidebar: !state.showSidebar,
      };

    default:
      return state;
  };
};

export default sidebarReducer;