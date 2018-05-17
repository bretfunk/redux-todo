const keys = {
  UPDATE_ITEM: "UPDATE_ITEM",
  ADD_TODO: "ADD_TODO"
};
export const updateItem = e => ({
  type: keys.UPDATE_ITEM,
  payload: e.target.value
});

export const addTodo = () => ({
  type: keys.ADD_TODO
});

export const rootReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_ITEM":
      debugger;
      return { ...state, item: action.payload };
    case "ADD_TODO":
      return { ...state, items: [...state.items, state.item], item: "" };
    default:
      return state;
  }
};
