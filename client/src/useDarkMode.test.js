import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom';


afterEach(rtl.cleanup)

test ('renders without crashing', () => {
    const wrapper = rtl.render(<App />)
    expect(wrapper).toBeVisible
  });
  
  test('renders navbar component', () => {
    const wrapper = rtl.render(<Navbar />)
    const element = wrapper.getByText(/hit/i)
    expect(element).toBeInTheDocument()
  })

