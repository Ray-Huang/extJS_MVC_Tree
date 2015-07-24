Ext.define('TREE.controller.treeController', {
    extend: 'Ext.app.Controller',
	
    views: [
        'treeView','chart'
    ],
    
    stores: [
        'treeStore','pieStore'
    ],
    
    models: [
    	'pieModel'
    ],

    init: function() {
        this.control({
            'customTree' : {
            	itemclick: function(thisItem, record, item, index, e, eOpts){
            		if(record.data.text == "alegrbra"){
            			Ext.getCmp("wrapper").add(Ext.create('Ext.panel.Panel', {
            				title : record.data.text,
            				html : 'created successful!'
						}))
            		}else if (record.data.text == "detention"){
            			Ext.getCmp("wrapper").add(Ext.widget('pieChart'))
            		}
            	}
            }
        });
    }

   
});