const assert = require('assert');

suite('Home page', function() {
  let fetch;

  // Dynamically import fetch before tests run
  suiteSetup(async function() {
    fetch = (await import('node-fetch')).default;
  });

  test('Page title', async function() {
    let res = await fetch("http://localhost:8888/");
    let body = await res.text();
    assert.ok(body.includes("<h1>Students Registry</h1>"));
  });
  
  test('Students count', async function() {
    let res = await fetch("http://localhost:8888/");
    let body = await res.text();
    assert.ok(body.includes("Registered students: <b>2</b>"));
  });
});
