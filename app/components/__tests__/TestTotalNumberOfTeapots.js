import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import TotalNumberOfTeapots from '../TotalNumberOfTeapots';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

it('renders correctly', () => {
    const comp = ReactTestUtils.renderIntoDocument(
        <MuiThemeProvider><TotalNumberOfTeapots numberOfTeapots={1} /></MuiThemeProvider>
    );
    const element = ReactTestUtils.findRenderedDOMComponentWithClass(comp, 'card-margin');
    expect(element.textContent).toContain('1');
    expect(element.textContent).toContain('Number of Teapots');
});
