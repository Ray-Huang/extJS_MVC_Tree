Ext.define('AM.controller.User', {
    extend: 'Ext.app.Controller',
	
    views: [
        'UserList'
    ],
    
    stores: [
        'User'
    ],
    
    models: [
    	'User'
    ],

    init: function() {
        this.control({
            'viewport > userlist': {
                itemdblclick: this.editUser
            },
            'useredit button[action=save]': {
                click: this.updateUser
            }
        });
    },

    editUser: function(grid, record) {
        var view = Ext.widget('useredit');

        view.down('form').loadRecord(record);
    },
    updateUser: function(button) {
         var win = button.up('window'),
         form   = win.down('form'),
         record = form.getRecord(),
         values = form.getValues();

	     record.set(values);
	     win.close();
    }
});