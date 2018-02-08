import generateActionCreator from 'lib/generateActionCreator';

describe('generateActionCreator', () => {
  it('generates an action creator with no arguments', () => {
    const ACTION_TYPE = 'ACTION_TYPE';
    const action = generateActionCreator(ACTION_TYPE);
    expect(action(1)).toEqual({
      type: 'ACTION_TYPE',
    });
  });

  it('generates an action creator with a single argument', () => {
    const ACTION_TYPE = 'ACTION_TYPE';
    const action = generateActionCreator(ACTION_TYPE, 'id');
    expect(action(1)).toEqual({
      type: 'ACTION_TYPE',
      id: 1,
    });
  });

  it('generates an action creator with multiple  arguments', () => {
    const ACTION_TYPE = 'ACTION_TYPE';
    const action = generateActionCreator(ACTION_TYPE, 'id', 'value');
    expect(action(1, 2)).toEqual({
      type: 'ACTION_TYPE',
      id: 1,
      value: 2,
    });
  });
});
