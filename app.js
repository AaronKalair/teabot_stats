import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import WidgetHolder from './app/components/WidgetHolder';
import MainReducer from './app/reducers';
import jQuery from 'jquery';

let store = createStore(MainReducer)

render(
    <Provider store={store}>
        <WidgetHolder />
    </Provider>,
    document.getElementById('root')
)


const fetchNumberOfNewPots = () => {
    jQuery.ajax({
        method: "GET",
        url: "/numberOfNewTeapots"
    }).done(function( msg ) {
        store.dispatch({type: 'SET_NUMBER_OF_TEAPOTS', numberOfTeapots: msg.numberOfTeapots})
    });
}
fetchNumberOfNewPots()
setInterval(fetchNumberOfNewPots, 60000)

const fetchTeapotStatus = () => {
    jQuery.ajax({
        method: "GET",
        url: "/teabotWebhook"
    }).done(function( msg ) {
        store.dispatch({type: 'GET_TEAPOT_STATUS', statusOfTeapot: msg.text})
    });
}

fetchTeapotStatus()
setInterval(fetchTeapotStatus, 30000)

const fetchTeapotAge = () => {
    jQuery.ajax({
        method: "GET",
        url: "/teapotAge"
    }).done(function( msg ) {
        store.dispatch({type: 'SET_TEAPOT_AGE', statusOfTeapot: msg.teapotAge})
    });
}

fetchTeapotAge()
setInterval(fetchTeapotAge, 30000)
