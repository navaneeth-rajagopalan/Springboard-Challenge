var courseSortDir = function(){
    return {
        restrict: "E",
        scope: {
            sortBy: "="
        },
        templateUrl: "/Assets/LearningHub/Views/Directives/Sort.html",
        require: "^coursesCtrl",
        link: function(scope, elem, attr, coursesCtrl){
            scope.newValue = function(val){
                coursesCtrl.sortChanged(val);
            }   
        }
    }
}