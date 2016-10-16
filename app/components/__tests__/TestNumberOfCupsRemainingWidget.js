import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import NumberOfCupsRemainingWidget from '../NumberOfCupsRemainingWidget.jsx';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

it('renders correctly', () => {
    const comp = ReactTestUtils.renderIntoDocument(
        <MuiThemeProvider><NumberOfCupsRemainingWidget numberOfCupsRemaining={'5'} /></MuiThemeProvider>
    );
    const element = ReactTestUtils.findRenderedDOMComponentWithClass(comp, 'card-margin');
    expect(element.textContent).toContain('5');
    expect(element.textContent).toContain('Number of Cups in Teapot');
});
