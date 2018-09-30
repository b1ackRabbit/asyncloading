export const updateBlockLink = (blockIndex,videoId) => {
  return {
    type: 'UPDATE_BLOCK_LINK',
    payload : {
      blockIndex,
      videoId
    }
  }
}