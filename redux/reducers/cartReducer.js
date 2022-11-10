let defaultSteate = {
  selectedItems: { items: [] },
};

let cartReducer = (state = defaultSteate, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      let newState = { ...state };
      newState.selectedItems = {
        items: [...newState.selectedItems.items, action.payload],
      };

      console.log(newState);
      return newState;
    }
    default:
      return state;
  }
};

export default cartReducer;
