const inintialNewsState = {};

export const newsReducer = (state = inintialNewsState, action) => {
  switch (action.type) {
    case "POST_NEWS_LIST":
      return { ...state, news: action.payload };

    default:
      return state;
  }
};
