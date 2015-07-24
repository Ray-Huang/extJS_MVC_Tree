Ext.application({
    name: 'TREE',

    appFolder: 'app',
    
    controllers: [
        'treeController'
    ],
    views: [
        'treeView','chart'
    ],

    launch: function() {
    	Ext.create('Ext.panel.Panel', {
		    title: 'Example',
		    id : 'wrapper',
		    items : {
		    	xtype : 'customTree'
		    },
		    renderTo: Ext.getBody()
		});
    }
});