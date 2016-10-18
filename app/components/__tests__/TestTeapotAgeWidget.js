import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import TeapotAge from '../TeapotAgeWidget';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

it('renders correctly', () => {
    const comp = ReactTestUtils.renderIntoDocument(
        <MuiThemeProvider><TeapotAge teapotAge={20.451} /></MuiThemeProvider>
    );
    const element = ReactTestUtils.findRenderedDOMComponentWithClass(comp, 'card-margin');
    expect(element.textContent).toContain('20');
    expect(element.textContent).toContain('Age of Teapot');
});
