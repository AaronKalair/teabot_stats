import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import { IntlProvider } from 'react-intl';
import TotalNumberOfTeapots from '../TotalNumberOfTeapots';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

it('renders correctly', () => {
    const comp = ReactTestUtils.renderIntoDocument(
        <IntlProvider locale="en">
            <MuiThemeProvider>
                <TotalNumberOfTeapots numberOfTeapots={1} />
            </MuiThemeProvider>
        </IntlProvider>
    );
    const element = ReactTestUtils.findRenderedDOMComponentWithClass(comp,
        'paper__title');
    expect(element.textContent).toContain('1');
});
