const initialState = {
  isBlogRendered: false,
  isGDPRClicked: false,
};

// Action Types
const TOGGLE_BLOG_RENDER = 'TOGGLE_BLOG_RENDER';
const TOGGLE_GDPR_RENDER = 'TOGGLE_GDPR_RENDER';

export const toggleBlog = (shouldRender) => ({
  type: TOGGLE_BLOG_RENDER,
  shouldRender,
});

export const toggleGDPR = (shouldRender) => ({
  type: TOGGLE_GDPR_RENDER,
  shouldRender,
});

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_BLOG_RENDER:
      return { ...state, shouldRender: action.shouldRender };
    case TOGGLE_GDPR_RENDER:
      return { ...state, shouldRender: action.shouldRender };
    default:
      return state;
  }
};
