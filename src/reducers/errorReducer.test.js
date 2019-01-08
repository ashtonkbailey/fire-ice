import { errorReducer } from './errorReducer';

it('should return the error if action type is SET_ERROR', () => {
  const action = {
    type: 'SET_ERROR',
    error: 'Oops!'
  };
  const result = errorReducer('', action);
  expect(result).toEqual('Oops!')
});

it('should return default state if there is no action type', () => {
  const result = errorReducer(undefined, {});
  expect(result).toEqual('')
});
