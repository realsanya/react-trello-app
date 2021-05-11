export const SET_TASKS = "SET_TASKS";
export const SET_TASK_NAME = "SET_TASK_NAME";
export const SET_TASK_DESCRIPTION = "SET_TASK_DESCRIPTION";
export const SET_TASK_DEADLINE = "SET_TASK_DEADLINE";
export const SET_CHECK_ITEMS="SET_CHECK_ITEMS";

const initState = {
    tasks: [],
    taskName: "",
    taskDescription: "",
    taskDeadLine: "",
    checkItems: [],
};

export const setTasks = (tasks) => ({
    type: SET_TASKS,
    tasks,
});

export const setTaskName = (taskName) => ({
    type: SET_TASK_NAME,
    taskName,
});

export const setTaskDescription = (taskDescription) => ({
    type: SET_TASK_DESCRIPTION,
    taskDescription,
});

export const setTaskDeadline = (taskDeadLine) => ({
    type: SET_TASK_DEADLINE,
    taskDeadLine,
});

export const setCheckItems = (checkItems) => ({
    type: SET_CHECK_ITEMS,
    checkItems,
})

//---------- REDUCER ----------
const taskReducer = (state = initState, action) => {
    switch(action.type) {
        case SET_TASKS: {
            return {
                ...state,
                tasks: [...action.tasks],
            }
        }
        case SET_TASK_NAME: {
            return {
                ...state,
                taskName: action.taskName,
            }
        }
        case SET_TASK_DESCRIPTION: {
            return {
                ...state,
                taskDescription: action.taskDescription,
            }
        }
        case SET_TASK_DEADLINE: {
            return {
                ...state,
                taskDeadLine: action.taskDeadLine,
            }
        }
        case SET_CHECK_ITEMS: {
            return {
                ...state,
                checkItems: [...action.checkItems],
            }
        }
        default: {
            return {
                ...state,
            };
        }
    }
}

export default taskReducer;

