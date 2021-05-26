describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('should update table using updateServerTable()', function () {
    submitServerInfo();
    updateServerTable();

    let tableElements = document.querySelectorAll('#serverTable tbody tr td');

    expect(tableElements.length).toEqual(2);
    expect(tableElements[0].innerText).toEqual('Alice');
    expect(tableElements[1].innerText).toEqual('$0.00');
  });

  afterEach(function() {
    // teardown logic
    serverID = 0;
    serverTbody.innerHTML = '';
    allServers = {};
  });
});