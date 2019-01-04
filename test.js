const functions = require('./main');
test("Simple contine test",()=>{
  expect(functions.contiene("forlindon",[])).toBeFalsy()
});
