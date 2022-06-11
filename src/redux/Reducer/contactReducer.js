const initialState = [
    {
        id:0,
        name:"Abhisek",
        email:"abhisek@gmail.com",
        number:8875209080,
        agent:"Sage",
        riot:"denver #kekw",
    },
    {
        id:1,
        name:"Atul Verma",
        email:"barry@gmail.com",
        number:9807658621,
        agent:"Jett",
        riot:"barry #bzzz",
    },
    {
        id:2,
        name:"Umang Kumar",
        email:"umangu@gmail.com",
        number:98076521,
        agent:"Viper",
        riot:"Jhinga #prone",
    },
    {
        id:3,
        name:"Akhil deshwal",
        email:"ahkhil@gmail.com",
        number:980586216,
        agent:"Bot",
        riot:"rogger #that",
    },
]

export const contactReducer = (state= initialState , action) =>{
    switch(action.type){
        case "ADD_TO_CONTACT":
            state = [...state , action.payload]
            return state
        case "UPDATE_CONTACT":
            const upadte = state.map(contact => contact.id === action.payload.id ? action.payload : contact);
            state = upadte;
            return state;
        case "DELETE":
            const filter = state.filter(contact=> contact.id !== action.payload && contact);
            state = filter;
        default: return state
    }
}