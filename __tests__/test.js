require('jest');

jest.dontMock('fs')
  .dontMock('jquery')
  .dontMock('../testplugin');

require('../testplugin');
var $ = require('jquery');


  test('Initialize plugin by id', () => {
    document.body.innerHTML = '<div id="testID">Test data</div>';

    $('#testID').testplugin();

    expect($('#testID').is(":visible")).toBeTruthy();
  });