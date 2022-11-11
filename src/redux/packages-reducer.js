const SET_PACKAGES = 'SET_PACKAGES'
const ADD_PACKAGE = 'ADD_PACKAGE'
const SET_DELETE_PACKAGE = 'SET_DELETE_PACKAGE'

let initialState = {
    packages: [
        {
            id: 1,
            track: 'T-1',
            fio: 'Иванов Иван Иванович',
            weight: 35,
            inside: 'Что-то',
            price: 50000,
            city: 'Астана',
            date: '11.11.2022'
        },
        {
            id: 2,
            track: 'T-2',
            fio: 'Иванов Иван Иванович',
            weight: 35,
            inside: 'Что-то',
            price: 50000,
            city: 'Астана',
            date: '11.11.2022'
        },
        {
            id: 3,
            track: 'T-3',
            fio: 'Иванов Иван Иванович',
            weight: 35,
            inside: 'Что-то',
            price: 50000,
            city: 'Астана',
            date: '11.11.2022'
        }
    ]
};

const packagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PACKAGES:
            return { ...state, packages: action.packages }
        case ADD_PACKAGE:
            return { ...state, packages: [...state.packages, action.newPackage] }
        case SET_DELETE_PACKAGE:
            return { ...state, packages: state.packages.filter(x => x.id !== action.id) }
        default:
            return state;
    }
}

const setPackages = (packages) => ({ type: SET_PACKAGES, packages })
const setAddPackage = (newPackage) => ({ type: ADD_PACKAGE, newPackage })
const setDeletePackage = (id) => ({ type: SET_DELETE_PACKAGE, id })

export const getPackages = () => async (dispatch) => {

}

export const addPackage = (newPackage) => async (dispatch) => {
    dispatch(setAddPackage(newPackage));
}

export const deletePackage = (id) => async (dispatch) => {
    dispatch(setDeletePackage(id))
}

export default packagesReducer;
