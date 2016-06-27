project = $("#projects");
project.hide();
$(".project").click(function() {
    project.animate({
        height: 'toggle'
    });
});

work = $("#workExperience");
work.hide();
$(".woRk").click(function() {
    work.animate({
        height: 'toggle'
    });
});

educ = $("#education");
educ.hide();
$(".edu").click(function() {
    educ.animate({
        height: 'toggle'
    });
});
