
//---------- ACTIONS ----------
export const SET_PROJECTS = "SET_PROJECTS";
export const setProjects = (projects) => ({
    type: SET_PROJECTS,
    projects,
});

export const SET_PROJECT_NAME = "SET_PROJECT_NAME";
export const setName = (name) => ({
    type: SET_PROJECT_NAME,
    name,
});

export const ADD_MEMBER_TO_PROJECT = "ADD_MEMBER_TO_PROJECT";
export const setMemberEmail = (memberEmail) => ({
    type: ADD_MEMBER_TO_PROJECT,
    memberEmail,
});

export const SET_PROJECT_DESC = "SET_PROJECT_DESC";
export const setDescription = (description) => ({
    type: SET_PROJECT_DESC,
    description,
});

export const SET_DASHBOARD = "SET_DASHBOARD";
export const setDashboard = (dashboardId) => ({
    type: SET_DASHBOARD,
    dashboardId,
});

const initState = {
    projects: [],
    name: '',
    description: '',
    dashboardId: null,
    memberEmail: '',
    // dashboard: {
    //     id: null,
    // },
};

//---------- REDUCER ----------
const dataReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_PROJECTS: {
            return {
                ...state,
                projects: [...action.projects],
            };
        }
        case SET_PROJECT_NAME: {
            return {
                ...state,
                name: action.name,
            };
        }
        case ADD_MEMBER_TO_PROJECT: {
            return {
                ...state,
                memberEmail: action.memberEmail,
            }
        }
        case SET_PROJECT_DESC: {
            return {
                ...state,
                description: action.description,
            };
        }
        case SET_DASHBOARD: {
            return {
                ...state,
                dashboardId: action.dashboardId,
            };
        }
        default: {
            return {
                ...state,
            };
        }
    }
};

export default dataReducer;