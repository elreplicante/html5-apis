var db = window.openDatabase("websql_hack", "1.0", "websql-hack", 5*1024*1024);

var wrapper = {
    version: "0.1"
}

function onSuccess(sql) {
    console.log('Succesful transfer:');
    console.log(sql.toString);
}

function onError(transaction, error) {
    console.error(error.message);
}

function execute(sql) {
    db.transaction(function(tx) { tx.executeSql(sql, [], onSuccess, onError); });
}


function create(table_name, table_fields) {
    execute('CREATE TABLE IF NOT EXISTS ' + table_name + ' (' + table_fields + ');');
}

function insert(table_name, column_name, values) {
    execute('INSERT INTO ' + table_name + ' (' + column_name + ')' + ' VALUES(' + values + ');');
}

function deleteRow(table_name, column, value) {
    execute('DELETE FROM ' + table_name + ' WHERE ' + column + '=' + value + ';');
}

function drop(table_name) {
    execute('DROP TABLE IF EXISTS ' + table_name + ';');
}

function select(table_name, column, value) {
    execute('SELECT * FROM ' + table_name + ' WHERE ' + column + '=' + value + ';');
}

create("'movies'", "'title' VARCHAR(100), 'year' INTEGER");

select("movies", "title", "'Blade Runner'");
