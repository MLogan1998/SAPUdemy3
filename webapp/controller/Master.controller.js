sap.ui.define([
	"sap/ui/core/mvc/Controller"
],
	function (Controller) {
		"use strict";

		return Controller.extend("loginapp.controller.Master", {
			onInit: function () {

            },
            
            goToPersonal: function() {
                var oApp = this.getView().getParent().getParent();
                oApp.toDetail("idApp--idSplitApp--idPersonal", "baseSlide");
            },

            goToExperience: function() {
                var oApp = this.getView().getParent().getParent();
                oApp.toDetail("idApp--idSplitApp--idExperience", "baseSlide");;
            },

            goToAddress: function() {
                var oApp = this.getView().getParent().getParent();
                oApp.toDetail("idApp--idSplitApp--idAddress", "baseSlide");
            },

            onNavBack: function () {
                window.location.href = "./index.html";
            }
		});
	});
