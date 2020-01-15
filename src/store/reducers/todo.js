import { CREATE_TODO, REMOVE_TODO, TOGGLE_TODO } from '../constants'

const initialState = {
    toDoList: [
      {
        text: 'Покормить собаку',
        complete: false,
      },
      {
        text: 'Покушать',
        complete: false,
      },
      {
        text: 'Сходить в магазин',
        complete: false,
      },
    ]
};

export default (state = initialState, action) => {
    switch (action.type) {

        /**
         * Добавляем дело
         */
        case CREATE_TODO: {
          const newToDoList = [...state.toDoList];
          const text = action.payload;

          newToDoList.push({text: text, complete: false})

          return {
            ...state, toDoList: newToDoList
          };
        }

        /**
         * Удалем законченные дела
         */
        case REMOVE_TODO: {
          const newToDoList = state.toDoList.filter(item => !item.complete)

          return {
            ...state, toDoList: newToDoList
          };
        }

        /**
         * Меняем статус дела Закончено\Не закончено
         */
        case TOGGLE_TODO: {
          const newToDoList = [...state.toDoList];
          const index = action.payload;
          
          newToDoList.splice(index, 1, { 
            text: newToDoList[index].text, 
            complete: !newToDoList[index].complete 
          })

          return {
            ...state, toDoList: newToDoList
          };
        }
        default: {
					return {
            ...state
					};
        }
    }
}   