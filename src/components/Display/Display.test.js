import Display, { mapStateToProps, mapDispatchToProps } from './Display';

describe('mapStateToProps', () => {
  it('should return an object with the houses array and isLoading boolean', () => {
    const mockState = {
      houses: [{ name: 'House', titles: 'Lord' }],
      isLoading: false,
      error: ''
    };
    const expected = {
      houses: [{ name: 'House', titles: 'Lord' }],
      isLoading: false,
    };
    const mappedProps = mapStateToProps(mockState);
    expect(mappedProps).toEqual(expected)
  });
});

describe('mapDispatchToProps', () => {
  it('calls getHousesThunk on getHousesThunk', () => {
    const mockThunk = jest.fn();
    const mockDispatch = jest.fn();
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.getHousesThunk();
    expect(mockDispatch).toHaveBeenCalledWith(mockThunk);
  })
})
