var courseDetailDir = function(){
    return {
        restrict: "E",
        templateUrl: "/Assets/LearningHub/Views/Directives/CourseDetail.html",
        link: function(scope, elem){
            $(elem).find(".courseTitle, .courseImage").on("click", function(){
                $(elem).parent(".courseDetail").removeClass("col-md-5");
                $(elem).parent(".courseDetail").addClass("col-md-11 highlightCourse");
                var sibling = $(elem).parent(".courseDetail").siblings();
                $(sibling).removeClass("col-md-11 highlightCourse");
                $(sibling).addClass("col-md-5");
            })
        }
    }
}