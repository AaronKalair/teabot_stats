import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import NumberOfCupsRemainingWidget from '../NumberOfCupsRemainingWidget';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

it('renders correctly', () => {
    const component = ReactTestUtils.renderIntoDocument(
        <MuiThemeProvider>
            <NumberOfCupsRemainingWidget numberOfCupsRemaining={'5'} />
        </MuiThemeProvider>
    );
    const element = ReactTestUtils.findRenderedDOMComponentWithClass(component,
        'paper__title');
    expect(element.textContent).toContain('5');
});
