sap.ui.define([
	"sap/ui/core/mvc/Controller"
],
	function (Controller) {
		"use strict";

		return Controller.extend("loginapp.controller.LoginForm", {
			onInit: function () {

            },
            
            checkDetails: function () {
                var uname = this.getView().byId("idIUname").getValue();
                var pwd = this.getView().byId("idIPwd").getValue();

                if ( uname=="" || pwd =="") {
                    jQuery.sap.require("sap.m.MessageBox");
                    sap.m.MessageBox.show("Both Input Fields Are Mandatory", {
                        icon : sap.m.MessageBox.Icon.INFORMATION,
                        title : "Validation Failed",
                        actions: [sap.m.MessageBox.Action.OK]
                    });
                }

                else if ( uname !=="test" || pwd !=="test") {
                    jQuery.sap.require("sap.m.MessageBox");
                    sap.m.MessageBox.show("Incorrect Username or Password", {
                        icon : sap.m.MessageBox.Icon.ERROR,
                        title : "Validation Failed",
                        actions: [sap.m.MessageBox.Action.OK]
                    });   
                }

                else {
                    jQuery.sap.require("sap.m.MessageBox");
                    sap.m.MessageBox.show("Login Successful", {
                        icon : sap.m.MessageBox.Icon.SUCCESS,
                        title : "Validation Success",
                        actions: [sap.m.MessageBox.Action.OK]
                    }); 
                    var oApp = this.getView().getParent();
                    oApp.to("idApp--idSplitApp");                   
                }
            }
		});
	});
