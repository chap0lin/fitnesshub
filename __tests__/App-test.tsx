/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

function hello(){
  return 'hell o'
}

test('Should log hello', ()=>{
  const text = hello()
  expect(text).toBe('hell o')
})

it('renders correctly', () => {
  renderer.create(<App />);
});
