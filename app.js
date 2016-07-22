import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import WidgetContainer from './app/containers/WidgetContainer';
import MainReducer from './app/reducers';
import jQuery from 'jquery';

let store = createStore(MainReducer)

render(
    <Provider store={store}>
        <WidgetContainer />
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
