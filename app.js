import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import WidgetHolder from './app/components/WidgetHolder';
import MainReducer from './app/reducers';
import jQuery from 'jquery';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {blueGrey400} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

let store = createStore(MainReducer);

const muiTheme = getMuiTheme({
    palette: {
        primary1Color: blueGrey400
    }
});

const App = () => (
    <MuiThemeProvider muiTheme={muiTheme}>
        <Provider store={store}>
            <WidgetHolder />
        </Provider>
    </MuiThemeProvider>
);

render(
    <App/>,
    document.getElementById('root')
);


const fetchNumberOfNewPots = () => {
    jQuery.ajax({
        method: 'GET',
        url: '/numberOfNewTeapots'
    }).done(function( msg ) {
        store.dispatch({type: 'SET_NUMBER_OF_TEAPOTS', numberOfTeapots: msg.numberOfTeapots});
    });
};

fetchNumberOfNewPots();
this.setInterval(fetchNumberOfNewPots, 60000);

const fetchTeapotStatus = () => {
    jQuery.ajax({
        method: 'GET',
        url: '/teabotWebhook'
    }).done(function( msg ) {
        store.dispatch({type: 'GET_TEAPOT_STATUS', statusOfTeapot: msg.text});
    });
};

fetchTeapotStatus();
this.setInterval(fetchTeapotStatus, 30000);


const fetchPotMakers = () => {
    jQuery.ajax({
        method: 'GET',
        url: '/potMakers'
    }).done(function( msg ) {
        store.dispatch({type: 'SET_POT_MAKERS', potMakers: msg.potMakers});
    });
};
fetchPotMakers();
this.setInterval(fetchTeapotStatus, 30000);

const fetchTeapotAge = () => {
    jQuery.ajax({
        method: 'GET',
        url: '/teapotAge'
    }).done(function( msg ) {
        store.dispatch({type: 'SET_TEAPOT_AGE', teapotAge: msg.teapotAge});
    });
};

fetchTeapotAge();
this.setInterval(fetchTeapotAge, 30000);
