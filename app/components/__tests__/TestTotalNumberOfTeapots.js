import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import TotalNumberOfTeapots from '../TotalNumberOfTeapots';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

it('renders correctly', () => {
    ReactTestUtils.renderIntoDocument(
        <MuiThemeProvider><TotalNumberOfTeapots numberOfTeapots={1} /></MuiThemeProvider>
    );
});
