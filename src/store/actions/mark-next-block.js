export const markNextBlock = (nextBlockIndex) => {
  return {
    type: 'MARK_NEXT_BLOCK',
    payload : nextBlockIndex
  }
}