//hide div until clarendon loads

document.fonts.ready.then(function () {
    var titleContent = document.getElementById('hide-title-load');
    titleContent.style.visibility = "visible";
});

document.fonts.ready.then(function() {
    var statContent = document.getElementById('hide-clar-load');
    console.log(statContent);
    statContent.style.visibility = "visible";
});
