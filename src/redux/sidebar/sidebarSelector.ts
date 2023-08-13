import { createSelector } from 'reselect';

const selectSidebar = (state: any) => state.sidebar;

export const selectDisplay = createSelector(
  [selectSidebar],
  sidebar => sidebar.showSidebar
);