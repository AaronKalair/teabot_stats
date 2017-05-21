import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { IntlProvider } from 'react-intl';
import Pusher from 'pusher-js';
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

const fetchTeapotStatus = () => {
    get('/teabotWebhook').then(({text}) => {
        store.dispatch({type: 'SET_NUMBER_OF_CUPS_REMAINING', numberOfCupsRemaining: text});
    });
};

fetchTeapotStatus();

const fetchPotMakers = () => {
    get('/potMakers').then(({potMakers}) => {
        store.dispatch({type: 'SET_POT_MAKERS', potMakers});
    });
};

fetchPotMakers();

const fetchTeapotAge = () => {
    get('/teapotAge').then(({teapotAge}) => {
        store.dispatch({type: 'SET_TEAPOT_AGE', teapotAge});
    });
};

const incTeapotAge = () => {
    store.dispatch({type: 'INC_TEAPOT_AGE', minutes: 10 / 60})
}

window.setInterval(incTeapotAge, 10000)

fetchTeapotAge();

const fetchNumberOfPotRequests = () => {
    get('/getNumberOfTeapotRequests').then(({teaRequests}) => {
        store.dispatch({type: 'SET_NUMBER_OF_TEAPOT_REQUESTS', numberOfTeapotRequests: teaRequests});
    });
};

fetchNumberOfPotRequests();

const setupPusher = () => {
    get('/getPusherAppKey').then(({pusherAppKey}) => {
        const pusher = new Pusher(pusherAppKey, {cluster: 'eu'});

        pusher.subscribe('dashboard');
        var channel = pusher.channel('dashboard');

        channel.bind(
            'refresh',
            data => {
                console.log('updating myself')
                fetchNumberOfNewPots();
                fetchTeapotStatus();
                fetchPotMakers();
                fetchTeapotAge();
                fetchNumberOfPotRequests();
            }
        );
    });

}

setupPusher();

export { fetchPotMakers };
