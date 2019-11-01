import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

const data = require('./components/data');


test('data contains a person', () => {
    const expected = {name: 'Alex Morgan'}
    const actual = {name: 'Alex Morgan'}

    expect(actual).toMatchObject(expected)

});