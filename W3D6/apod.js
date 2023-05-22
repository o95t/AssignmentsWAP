$(document).ready(
    function () {
        $("#view_button").click(getPicture);
    });

function getPicture() {

    // encode to scape spaces
    const esc = encodeURIComponent;
    const url = 'https://api.nasa.gov/planetary/apod?';
    const params = {
        api_key: "HAI8yceW0yUSWNtQv938yAgC5EyMB10w2iK6hyNx",
        date: date.value
    }
    // this line takes the params object and builds the query string
    const query = Object.keys(params)
        .map(k => `${esc(k)}=${esc(params[k])}`)
        .join('&');

    fetch(url + query)
        .then(response => response.json())
        .then(data => showPicture(data))
        .catch(err => noPicture());
}

function showPicture(data) {
    $("#pic").attr("src", data.url);
    $("#title").text(data.title)
};
function noPicture(error) {
    alert(error.responseText);
};