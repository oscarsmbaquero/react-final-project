export const tabsInitState = {
    infomation: false,
    contacts: false,
    jobsList: false,
    notifications: false
};

export const tabsReducer = (currentState, action) => {

    switch (action.type) {
        case "INFORMATION":
            return {
                ...action.payload,
                infomation: true
            };
        case "CONTACTS":
            return {
                ...action.payload,
                contacts: true
            };
        case "JOBS":

            return {
                ...action.payload,
                jobsList: true
            };
        case "NOTIFICATIONS":

            return {
                ...action.payload,
                notifications: true
            };
        default:
            break;
    }

};