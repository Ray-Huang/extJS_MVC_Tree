Ext.define('TREE.view.treeView', {
    extend: 'Ext.tree.Panel',
    alias: 'widget.customTree',

    title: 'Simple Tree',
    width: '50%',
    height: 150,
    rootVisible: false,
    store:'treeStore',

    initComponent: function() {
        this.callParent(arguments);
    }
});