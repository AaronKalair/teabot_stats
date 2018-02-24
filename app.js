import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { IntlProvider } from 'react-intl';
import WidgetHolder from './app/components/WidgetHolder';
import MainReducer from './app/reducers';
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
    <IntlProvider locale="en">
        <App/>
    </IntlProvider>,
    document.getElementById('root')
);

const get = (url) => {
    return fetch(url, {method: 'GET'}).then((response) => response.json());
};

const fetchNumberOfNewPots = () => {
    get('/numberOfNewTeapots').then(({numberOfTeapots}) => {
        store.dispatch({type: 'SET_NUMBER_OF_TEAPOTS', numberOfTeapots});
    });
};

fetchNumberOfNewPots();
window.setInterval(fetchNumberOfNewPots, 10000);

const fetchTeapotStatus = () => {
    get('/teabotWebhook').then(({text}) => {
        store.dispatch({type: 'SET_NUMBER_OF_CUPS_REMAINING', numberOfCupsRemaining: text});
    });
};

fetchTeapotStatus();
window.setInterval(fetchTeapotStatus, 10000);

const fetchPotMakers = () => {
    get('/potMakers').then(({potMakers}) => {
        store.dispatch({type: 'SET_POT_MAKERS', potMakers});
    });
};

fetchPotMakers();
window.setInterval(fetchTeapotStatus, 10000);

const fetchTeapotAge = () => {
    get('/teapotAge').then(({teapotAge}) => {
        store.dispatch({type: 'SET_TEAPOT_AGE', teapotAge});
    });
};

fetchTeapotAge();
window.setInterval(fetchTeapotAge, 10000);

export { fetchPotMakers };
