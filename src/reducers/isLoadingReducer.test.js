import { isLoadingReducer } from './isLoadingReducer';

it('should return the error if action type is IS_LOADING', () => {
  const action = {
    type: 'IS_LOADING',
    isLoading: true
  };
  const result = isLoadingReducer('', action);
  expect(result).toEqual(true)
});

it('should return default state if there is no action type', () => {
  const result = isLoadingReducer(undefined, {});
  expect(result).toEqual(false)
});
