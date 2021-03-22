/*
 Template Name: Admiria - Bootstrap 4 Admin Dashboard
 Author: Themesbrand
 File: Morris chart Init
 */


!function ($) {
    "use strict";

    var MorrisCharts = function () {
    };

        //creates line chart
        MorrisCharts.prototype.createLineChart = function (element, data, xkey, ykeys, labels, lineColors) {
            Morris.Line({
                element: element,
                data: data,
                xkey: xkey,
                ykeys: ykeys,
                labels: labels,
                hideHover: 'auto',
                gridLineColor: '#eef0f2',
                resize: true, //defaulted to true
                lineColors: lineColors,
                lineWidth: 2
            });
        },

        //creates Donut chart
        MorrisCharts.prototype.createDonutChart = function (element, data, colors) {
            Morris.Donut({
                element: element,
                data: data,
                resize: true,
                colors: colors
            });
        },
        //creates Stacked chart
        MorrisCharts.prototype.createStackedChart = function (element, data, xkey, ykeys, labels, lineColors) {
            Morris.Bar({
                element: element,
                data: data,
                xkey: xkey,
                ykeys: ykeys,
                stacked: true,
                labels: labels,
                hideHover: 'auto',
                resize: true, //defaulted to true
                gridLineColor: '#eeeeee',
                barColors: lineColors
            });
        },
        MorrisCharts.prototype.init = function () {

            //create line chart
            var $data = [
                {y: '2017', a: 23 ,b:6},
                {y: '2018', a: 36 ,b:9},
                {y: '2019', a: 49, b:13},
                {y: '2020', a: 60, b:17},
                {y: '2021', a: 68, b:20}
            ];
            this.createLineChart('morris-line-example', $data, 'y', ['a','b'], ['해외','아시아'], ['#5468da','#6B9900']);

            //creating donut chart
            var $donutData = [
                {label: "디지털기반 제조업", value: 44.0},
                {label: "사물인터넷", value: 22.9},
                {label: "인공지능", value: 6.1},
                {label: "기타", value: 27}
            ];
            this.createDonutChart('morris-donut-example', $donutData, ['#FF0000', '#FF5E00', '#FFBB00','#FFE400']);

            //creating Stacked chart
            var $stckedData = [
                {y: 'pencil', a:0},
                {y: 'eraser', a:0},
                {y: 'note', a:0},
                {y: 'highlighter', a: 0},
                {y: 'television', a: 0},
                {y: 'microwave', a: 0},
                {y: 'monitor', a: 0},
                {y: 'kimchi fridge', a: 0},
                {y: 'apple', a: 0},
                {y: 'banana', a: 0},
                {y: 'grape', a: 0},
                {y: 'arange', a: 0}
            ];
            this.createStackedChart('morris-bar-stacked', $stckedData, 'y', ['a'], ['sell'], ['#009688', '#4ac18e']);

        },
        //init
        $.MorrisCharts = new MorrisCharts, $.MorrisCharts.Constructor = MorrisCharts
}(window.jQuery),

//initializing 
    function ($) {
        "use strict";
        $.MorrisCharts.init();
    }(window.jQuery);