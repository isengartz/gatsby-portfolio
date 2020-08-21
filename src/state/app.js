const initialState = {
  isBlogRendered: false,
  isGDPRClicked: false,
};

// Helpers

// checks if the state should get persisted
export const saveState = (state, persist = false) => {
  return persist ? persistState(state) : state;
};
// Used to persist the state in the localstorage
export const persistState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
    return state;
  } catch (e) {
    return initialState;
  }
};

// Loads the state from localStorage
export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return initialState;
    }
    return JSON.parse(serializedState);
  } catch (e) {
    return initialState;
  }
};

// Action Types
const TOGGLE_BLOG_RENDER = 'TOGGLE_BLOG_RENDER';
const TOGGLE_GDPR_RENDER = 'TOGGLE_GDPR_RENDER';

// Not gonna use the blog but leaving it just in case xD
export const toggleBlog = (shouldRender) => ({
  type: TOGGLE_BLOG_RENDER,
  shouldRender,
  persist: false,
});

export const toggleGDPR = (shouldRender) => ({
  type: TOGGLE_GDPR_RENDER,
  shouldRender,
  persist: true,
});

export default (state = loadState(), action) => {
  switch (action.type) {
    case TOGGLE_BLOG_RENDER:
      return saveState(
        { ...state, isBlogRendered: action.shouldRender },
        action.persist
      );
    case TOGGLE_GDPR_RENDER:
      return saveState(
        {
          ...state,
          isGDPRClicked: action.shouldRender,
        },
        action.persist
      );
    default:
      return state;
  }
};
