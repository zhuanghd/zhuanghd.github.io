if (window.location.protocol == 'https:') {
    window.location.href = 'http:' + window.location.href.substr(6);
}

$(function() {

    var vue = new Vue({
        el: '#app',
        data: {
            "Year": new Date().getFullYear()
        },
        methods: {

        }
    });

});
