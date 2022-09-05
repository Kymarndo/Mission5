function placeholder(){
return('hello');
}

test('placeholder test', () => {
  expect(placeholder().toBe('hello'))
});
