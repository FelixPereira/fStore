import { createSelector } from 'reselect';

const selectSidebar = state => state.sidebar;

export const selectDisplay = createSelector(
  [selectSidebar],
  sidebar => sidebar.showSidebar
);