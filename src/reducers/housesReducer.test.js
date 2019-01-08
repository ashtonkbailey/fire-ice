import { housesReducer } from './housesReducer';

it('should return the error if action type is ADD_HOUSES', () => {
  const houses = [
    { name: 'House', titles: 'Lord' }
  ]
  const action = {
    type: 'ADD_HOUSES',
    houses
  };
  const result = housesReducer('', action);
  expect(result).toEqual(houses)
});

it('should return default state if there is no action type', () => {
  const result = housesReducer(undefined, {});
  expect(result).toEqual([])
});
