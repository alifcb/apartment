var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
		    console.log(FileTransfer);
			
    },
// Update DOM on a Received Event
receivedEvent: function(id) {
	var parentElement = document.getElementById(id);
	var listeningElement = parentElement.querySelector('.listening');
	var receivedElement = parentElement.querySelector('.received');
	listeningElement.setAttribute('style', 'display:none;');
	receivedElement.setAttribute('style', 'display:block;');
	console.log('Received Event: ' + id);
}
};
//LOAD START EXAMPLES WHEN DOCUMENT IS READY
document.addEventListener('onDevice_Ready', checkConnection,false);
document.addEventListener("offline", onOffline, false);
document.addEventListener("online", onOnline, false);
/////////////////////////////////////////cra=eat table
// Cordova is ready
//
function onDevice_Ready() {
var db = window.openDatabase("Database", "1.0", "Cordova Demo", 200000);
db.transaction(table, errorCB, successCB);
}
function table(tx){      
tx.executeSql('DROP TABLE IF EXISTS DEMO');
tx.executeSql('DROP TABLE IF EXISTS DEMO2');
tx.executeSql('DROP TABLE IF EXISTS DEMO3');
tx.executeSql('CREATE TABLE IF NOT EXISTS post(id unique, subject text,content text,date,id_cat INTEGER,id_sub INTEGER,pic text,source,type INTEGER,flag INTEGER) ');
tx.executeSql('CREATE TABLE IF NOT EXISTS setting(id unique, title text,value text)');
tx.executeSql('CREATE TABLE IF NOT EXISTS cats(id unique, name text, type INTEGER )');
tx.executeSql('INSERT INTO setting(id,title,value) values(1,"flag_one",1)');
}
// Transaction success callback
function successCB() {
var db = window.openDatabase("Database", "1.0", "Cordova Demo", 200000);
db.transaction(queryDB, errorCB);
}

// Transaction error callback
function errorCB(err) {
console.log("Error processing SQL: "+err.code);
}

////////////////////////////////// online init
function onOnline() {
	alert('ufufu');
/////////////////////////////////////download file
var down_load = function(){
var fileTransfer = new FileTransfer();
var uri = encodeURI("http://www.shahreroya.ir/images/nlogo.png");
fileTransfer.download(
uri,
"cdvfile://localhost/persistent/folder_a/333/nlogo.png",
function(entry) {
  console.log("download complete: " + entry.toURL());
},
function(error) {
  console.log("download error source " + error.source);
  console.log("download error target " + error.target);
  console.log("upload error code" + error.code);
},
false,
{
  headers: {
	  "Authorization": "Basic dGVzdHVzZXJuYW1lOnRlc3RwYXNzd29yZA=="
  }
}
);
resolveLocalFileSystemURL('cdvfile://localhost/persistent/folder_a/333/nlogo.png', function(entry) {
    var nativePath = entry.toURL();
    document.getElementById('imagess').src = nativePath;
});
}
}

function onOffline() {
	alert('11111111');
	// baresi ejray avalin bar barnameh
var db = window.openDatabase("Database", "1.0", "Cordova Demo", 200000);
db.transaction(flag_one, errorCB);

function flagbit(bit) {	
alert('bit');
alert(bit);
}


$.getJSON("json/farhang.json", function(json) {
for(i = 0; i <  json.items.length; i++) {
testo( json.items[i].id, json.items[i].pic);
}
});
}

/////////////////////////////////////////////
function flag_one(tx) {
tx.executeSql('SELECT * FROM setting where title="flag_one"', [], flagSuccess, errorCB);
}
function flagSuccess(tx, results) {
flagbit(results.rows.item(0).id);
}
/////////////////////////////////////////////////////////////////////database
function table(tx) {      
tx.executeSql('DROP TABLE IF EXISTS DEMO');
tx.executeSql('DROP TABLE IF EXISTS DEMO2');
tx.executeSql('DROP TABLE IF EXISTS DEMO3');
tx.executeSql('CREATE TABLE IF NOT EXISTS post(id unique, subject text,content text,date,id_cat INTEGER,id_sub INTEGER,pic text,source,type INTEGER,flag INTEGER) ');
tx.executeSql('CREATE TABLE IF NOT EXISTS setting(id unique, title text,value text)');
tx.executeSql('CREATE TABLE IF NOT EXISTS cats(id unique, name text, type INTEGER )');
tx.executeSql('INSERT INTO setting(id,title,value) values(1,"flag_one",1)');

}

function tests(id,name) {

$.getJSON("json/farhang.json", function(json) {
   for(i = 0; i <  json.items.length; i++) {
testo( json.items[i].id, json.items[i].pic);
}
	 // this will show the info it in firebug console
});

}

function testo(id,name) {
var dbs = window.openDatabase("Database", "1.0", "Cordova Demo", 200000);
dbs.transaction (function(tx){insert(tx,id,name);},successCB, errorCB);	 
}
function insert(tx,id,name) {
tx.executeSql('INSERT INTO DEMO3(id,data) values('+id+', "'+name+'")');
}
// Query the database
//
function queryDB(tx) {
tx.executeSql('SELECT * FROM DEMO3', [], querySuccess, errorCB);
}

// Query the success callback
//
function querySuccess(tx, results){
	out="";
var len = results.rows.length;
console.log("DEMO3 table: " + len + " rows found.");
for (var i=0; i<len; i++){
 out+="Row = " + i + " ID = " + results.rows.item(i).id + " Data =  " + results.rows.item(i).data;
}
document.getElementById("ali").innerHTML =  out;
}


