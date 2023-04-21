const rangeSlider = document.querySelector('#range_slider');

if (rangeSlider) {
    noUiSlider.create(rangeSlider, {
        start: [20, 80],
        connect: true,
        limit: 90,
        step: 1,
        range: {
            'min': 0,
            'max': 100
        }
    });
}

var limitFieldMin = document.querySelector('.range_slider_min');
var limitFieldMax = document.querySelector('.range_slider_max');

rangeSlider.noUiSlider.on('update', function (values, handle) {
    (handle ? limitFieldMax : limitFieldMin).innerHTML = values[handle];
});