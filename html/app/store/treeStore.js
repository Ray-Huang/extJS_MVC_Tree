Ext.define('TREE.store.treeStore', {
    extend: 'Ext.data.TreeStore',
    //model: 'AM.model.TreeModel',
    root: {
        expanded: true,
        children: [
            { text: "detention", leaf: true },
            { text: "homework", expanded: true, children: [
                { text: "book report", leaf: true },
                { text: "alegrbra", leaf: true}
            ] },
            { text: "buy lottery tickets", leaf: true }
        ]
    }
})