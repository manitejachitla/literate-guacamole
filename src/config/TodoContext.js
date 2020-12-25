import React from 'react';

const TodoContext = React.createContext();

const rootReducer = (state, action) => {
  const payload = action.payload;
  switch (action.type) {
    case "ADD_NEW_TODO": {
      const found = state.list.some(el => el.id === payload.id);
      if (found) {
        state.list.filter((el) => {
          if (el.id === payload.id) {
            el.title = payload.title
            el.status = payload.status
            el.assignee = payload.assignee
            el.description = payload.description
          }
        })
        return {
          ...state,
          list: state.list,
        };
      } else {
        return {
          ...state,
          list: [
            ...state.list,
            payload
          ],
        };
      }
    }
    case "SET_CREATE_TODO_MODAL": {
      return {
        ...state,
        isNewTodoModal: payload.status,
        selectedTodo: payload.data
      };
    }
    default:
      return {
        ...state
      };
  }
};

const TodoStateProvider = ({ children }) => {
  const [todoState, setTodoState] = React.useReducer(rootReducer, {
    list: [
      { id: 5545642, title: "todo status", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s", status: 1, date: "12/15/2020" },
      { id: 3454511, title: "inprogress status", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s", status: 2, date: "12/15/2020" },
      { id: 7545188, title: "inqa status", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s", status: 3, date: "12/15/2020" },
      { id: 3265486, title: "done status", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s", status: 4, date: "12/15/2020" },
      { id: 9744544, title: "blocked status", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s", status: 5, date: "12/15/2020" },
      { id: 4615787, title: "deployed status", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s", status: 6, date: "12/15/2020" },
    ],
    isNewTodoModal: false,
    selectedTodo: {}
  });

  return (
    <TodoContext.Provider value={{ todoState, setTodoState }}>
      {children}
    </TodoContext.Provider>
  );
};

const useTodoState = () => {
  const context = React.useContext(TodoContext);
  return context;
};

const addNewTodo = (dispatch, todoDetails) => {
  dispatch({ type: "ADD_NEW_TODO", payload: todoDetails });
}

const setCreateTodoModal = (dispatch, isModal) => {
  dispatch({ type: "SET_CREATE_TODO_MODAL", payload: isModal });
}

export {
  TodoStateProvider,
  useTodoState,
  setCreateTodoModal,
  addNewTodo,
};
