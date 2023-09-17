(function(jQuery) {
    "use strict";
    jQuery(document).ready(function() {
        var rightSideBarMini = false;
        checkRightSideBar(rightSideBarMini);
        jQuery(document).on('click', '.right-sidebar-toggle', function() {
            if (rightSideBarMini) {
                rightSideBarMini = false;
            } else {
                rightSideBarMini = true;
            }
            checkRightSideBar(rightSideBarMini);
        })
    });

    function checkRightSideBar(rightSideBarMini) {
        if (rightSideBarMini) {
            rightSideBarShow();
        } else {
            rightSideBarHide()
        }
    }

    function rightSideBarShow() {
        jQuery('.right-sidebar-mini').addClass('right-sidebar')
    }

    function rightSideBarHide() {
        jQuery('.right-sidebar-mini').removeClass('right-sidebar')
    }

})(jQuery);


if (jQuery('#chart-home3-01').length) {
    var options = {
        series: [{
            name: 'Series 1',
            data: [80, 50, 30, 40, 100, 20],
        }, {
            name: 'Series 2',
            data: [20, 30, 40, 80, 20, 80],
        }, {
            name: 'Series 3',
            data: [44, 76, 78, 13, 43, 10],
        }],
        colors: ['#089bab', '#e64141', '#777D74'],
        chart: {
            height: 350,
            type: 'radar',
            dropShadow: {
                enabled: true,
                blur: 1,
                left: 1,
                top: 1
            }
        },
        title: {
            text: 'Radar Chart - Multi Series'
        },
        stroke: {
            width: 0
        },
        fill: {
            opacity: 0.4
        },
        markers: {
            size: 0
        },
        xaxis: {
            categories: ['2011', '2012', '2013', '2014', '2015', '2016']
        }
    };

    var chart = new ApexCharts(document.querySelector("#chart-home3-01"), options);
    chart.render();
}


