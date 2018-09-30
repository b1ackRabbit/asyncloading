
const initialState = {
  searchText: 'bug',
  blockToLoad: 0,
  loadingBlocks: [
    {
      videoId: null,
      number: 1
    },
    {
      videoId: null,
      number: 2
    },
    {
      videoId: null,
      number: 3
    }
  ]
}

export const loadingBlockReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_SEARCH_VALUE': {
      const {blockToLoad,loadingBlocks} = state;
      return {
        searchText: action.payload,
        blockToLoad,
        loadingBlocks
      }
    }
    case 'UPDATE_BLOCK_LINK': {
      const {loadingBlocks} = state;
      const {blockIndex,videoId} = action.payload;
      loadingBlocks[blockIndex].videoId = videoId;
      return {
        searchText : state.searchText,
        blockToLoad: state.blockToLoad,
        loadingBlocks: loadingBlocks
      }
    }
    case 'MARK_NEXT_BLOCK': {
      const {searchText,loadingBlocks} = state;

      return {
        blockToLoad : action.payload,
        searchText,
        loadingBlocks

      }
    }

    default: {
      return state;
    }
  }
}