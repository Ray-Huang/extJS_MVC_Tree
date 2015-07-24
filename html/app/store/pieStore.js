Ext.define('TREE.store.pieStore', {
    extend: 'Ext.data.JsonStore',
    model: 'TREE.model.pieModel',
    data: [
        { 'name': 'metric one',   'data': 10 },
        { 'name': 'metric two',   'data':  7 },
        { 'name': 'metric three', 'data':  5 },
        { 'name': 'metric four',  'data':  2 },
        { 'name': 'metric five',  'data': 27 }
    ]
})