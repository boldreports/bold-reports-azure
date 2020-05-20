serverApp.controller('ItemInfoCtrl', ["$scope", "$timeout", function ($scope, $timeout,) {
    $scope.ItemDetail = null;

    $scope.closeItemInfo = function() {
        $("#item-info-popup").ejDialog("close");
    };

    $scope.openInfoDialog = function (itemDetail, showDashboardLinkButton) {
        $scope.ItemDetail = itemDetail;
        $scope.showDashboardLinkButton = showDashboardLinkButton;
        $("#item-info-popup").ejDialog({
            width: window.innerWidth > 480 ? "480px" : window.innerWidth - 10 + "px",
            height: "auto",
            showOnInit: false,
            allowDraggable: false,
            enableResize: false,
            showHeader: false,
            enableModal: true
        });

        $("#item-info-popup").ejDialog("open");
        $("#item-info-popup").ejDialog("refresh");
        $timeout(function () {
            $scope.$apply();
        }, 100);
    };

    $scope.viewDashboardUrl = function(id, categoryName, name, isDraft) {
        if (isDraft === true) {
            return encodeURI(editDashboardUrl + "/" + id + "/draft/" + name);
        }

        return encodeURI(viewDashboardUrlAction + "/" + id + "/" + categoryName + "/" + name + "?showmyreports=1");
    };

    $scope.GetInfoButtonText = function(isDraft) {
        if (isDraft === true) {
            return window.Server.App.LocalizationContent.EditReport;
        }

        return window.Server.App.LocalizationContent.OpenReport;
    };
}]);