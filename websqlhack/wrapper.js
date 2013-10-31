var wrapper = {
    version: "0.1",

    onSuccess: function (sql) {
        console.log(sql);
        
    }, 

    onError: function (transaction, error) {
        console.error(error.message);
    },

    execute: function (sql) {
        debugger
        db.transaction(function(tx) { tx.executeSql(sql, [], this.onSuccess, this.onError); });
    },

    create: function (table_name, table_fields) {
       this.execute('CREATE TABLE IF NOT EXISTS ' + table_name + ' (' + table_fields + ');');
    },

    insert: function (table_name, column_name, values) {
       this.execute('INSERT INTO ' + table_name + ' (' + column_name + ')' + ' VALUES(' + values + ');');
    },

    deleteRow: function (table_name, column, value) {
        this.execute('DELETE FROM ' + table_name + ' WHERE ' + column + '=' + value + ';');
    },

    drop: function (table_name) {
        this.execute('DROP TABLE IF EXISTS ' + table_name + ';');
    },

    select: function (table_name, column, value) {
        this.execute('SELECT * FROM ' + table_name + ' WHERE ' + column + '=' + value + ';');
        
    }
}
















