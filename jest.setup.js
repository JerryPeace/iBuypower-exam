import '@testing-library/jest-dom';
import 'jest-extended';

global.matchMedia = global.matchMedia || function() {
  return {
    matches: false,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  };
};