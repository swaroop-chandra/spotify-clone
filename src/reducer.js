export const initialState = {
    user:null,
    playlist: [],
    playing: false,
    item: null,
    token: 'BQCMVYTIzHGEskJ1mhSQw1a8Zx4bGI4EcStxuTrpVk5QjJjedUOl3aZpNJ3fW6teoXnU80Ym9Sdf8T59OY_jarHKPjFNNhdyVu7f308RMz_iKBbPQI623_u1jhb59W1bxUTJNZrU9EnH_gOxZ6kX4ul1PaUavYCXbjbm-A96_SfyCCDyRu0l'
}

const reducer = (state,action) => {
    console.log(action);
    // eslint-disable-next-line default-case
    switch(action.type){
        case 'SET_USER' : 
        return {
            ...state,
            user: action.user
        } ;
        case 'SET_TOKEN' : 
            return {
              ...state,
              token: action.token

        };
        case 'SET_PLAYLISTS' : 
          return {
            ...state,
            playlists: action.playlists
          };
       case 'SET_DISCOVER_WEEKLY' :
         return {
            ...state,
            discover_weekly:action.discover_weekly
         };
        default  : 
            return state;
    }
}

export default reducer;