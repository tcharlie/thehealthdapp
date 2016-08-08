var accounts;
var account;

function setStatus(message) {
  var status = document.getElementById("status");
  status.innerHTML = message;
};

/*
function refreshBalance() {
  var meta = MetaCoin.deployed();

  meta.getBalance.call(account, {from: account}).then(function(value) {
    var balance_element = document.getElementById("balance");
    balance_element.innerHTML = value.valueOf();
  }).catch(function(e) {
    console.log(e);
    setStatus("Error getting balance; see log.");
  });
};

function sendCoin() {
  var meta = MetaCoin.deployed();

  var amount = parseInt(document.getElementById("amount").value);
  var receiver = document.getElementById("receiver").value;

  setStatus("Initiating transaction... (please wait)");

  meta.sendCoin(receiver, amount, {from: account}).then(function() {
    setStatus("Transaction complete!");
    refreshBalance();
  }).catch(function(e) {
    console.log(e);
    setStatus("Error sending coin; see log.");
  });
};
*/

function getNumMembers(){
    var c_register = Register.deployed();

    c_register.getNumMembers.call().then(function(value){
        var _numMembers = document.getElementById("numMembers");
        _numMembers.innerHTML = value.valueOf();
    }).catch(function(e){
        console.log(e);
        setStatus("Error getting number of members; see log.");
    });
}


function register(){
    var register = Register.deployed();

    var memAddress = document.getElementById("memAddress").value;
    var memId = document.getElementById("memId").value;

    setStatus("Adding new member... (please wait)");

    register.addMember.sendTransaction(memAddress, memId, {from: account}).then(function(){
        setStatus("New member added");
        getNumMembers();
    }).catch(function(e){
        console.log(e);
        setStatus("Error adding member; see log.");
    });
};

window.onload = function() {
  web3.eth.getAccounts(function(err, accs) {
    if (err != null) {
      alert("There was an error fetching your accounts.");
      return;
    }

    if (accs.length == 0) {
      alert("Couldn't get any accounts! Make sure your Ethereum client is configured correctly.");
      return;
    }

    accounts = accs;
    account = accounts[0];

    getNumMembers();
  });
}
