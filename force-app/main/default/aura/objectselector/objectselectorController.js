({
	jsInit : function(cmp) {

    },

	jsChange : function(cmp,evt,hlp) {

		var sTmp = cmp.find("selectObject").get("v.value");
		var e1 = cmp.getEvent("selectMTDObject");
    	e1.setParam("Object",sTmp);
    	e1.fire();		
	}


})
