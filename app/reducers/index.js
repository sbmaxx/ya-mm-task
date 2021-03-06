import { combineReducers } from 'redux';
import { reducer as app } from './app.reducer';
import { reducer as tabs } from './tabs.reducer';
import { reducer as console } from './console.reducer';
import { reducer as rating } from './rating.reducer';

export default combineReducers({
    app,
    tabs,
    console,
    rating,
});
