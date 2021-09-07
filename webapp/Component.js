jQuery.sap.declare("loginapp.Component");

sap.ui.core.UIComponent.externd("loginapp.Component", {
    createContent : function() {
        var oApp = sap.ui.view({
            id: "idApp",
            viewName: "loginapp.view.App",
            type: sap.ui.core.mvc.ViewType.XML
        });
        return oApp
    }
})