function addMenu(name, text, fun) {
	$("div[data-reactid='.0.1.1.0.0.0.0.1.$enrollments/=1$enrollments']").clone()
						.attr("myid", name).removeAttr("data-reactid")
						.click(fun)
						.appendTo(".bt3-panel-group");

	$("div[myid="+ name +"] *").removeAttr("data-reactid")
				.find("a").replaceWith('<a href="#" class="bt3-collapsed" >' + text + '</a>');
}

/*
$('.cozy').each(function() {
	$(this).find(".c-dashboard-course-right-column")
			.append('&nbsp;<input type="checkbox" class="checkclass hidden-courses" name="" value="">');
});

var h = function(){$(":checked").parents('.cozy').toggle();}
addMenu("clickhide", "Hide em", h);

var g = function(){$(":not(:checked)").parents('.cozy').toggle();}
addMenu("clickshow", "Show", g); */

var f = function(){
}
addMenu("searchbox", "", f);

$("div[myid=searchbox] *").removeAttr("data-reactid")
			.find("a").replaceWith('<input id="searchInput" placeholder="Buscar">');

$("#searchInput").keyup(function (e) {
    var rows = $("div[data-js=course-nameundefined]");
    if (this.value.length) {
        $.each(rows, function (i, v) {
						$(v).parents('.cozy').show();
						if ($(v).text().toUpperCase().indexOf(e.target.value.toUpperCase()) == -1)
							$(v).parents('.cozy').hide();
        });
    } else $('.cozy').show();
});

// div[data-js=course-nameundefined]

/*
$(function () {
    var data = localStorage.getItem("showing");
    if (data !== null) {
        $("input.checkclass").attr("checked", "checked");
    }
});

$("input.checkclass").click(function () {

    if ($(this).is(":checked")) {
        localStorage.setItem("showing", $(this).val());
    } else {
        localStorage.removeItem("showing");
    }
});*/
