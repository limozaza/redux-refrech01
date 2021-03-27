import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        {title: 'didi',duration: '4:05'},
        {title: 'Sir sir',duration: '3:35'},
        {title: 'koul koul',duration: '3:15'},
        {title: 'noud noud',duration: '2:45'}
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if(action.type === 'SONG_SELECTED'){
        return action.payload
    }
    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});