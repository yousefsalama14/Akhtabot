// 1. Init dataTable
function InitDataTable() {

    var InitDataTableEle = document.getElementById("datatable_1");

    if (InitDataTableEle) {
        const dataTable = new simpleDatatables.DataTable("#datatable_1", {
            searchable: true,
            fixedHeight: false,
        })
    }

}

// 2. Init DateRangePicker
function InitDateRangePicker() {

    var InitDateRangeEle = document.getElementById('DateRange');

    if (InitDateRangeEle) {
        new DateRangePicker(InitDateRangeEle, {
            // ...options
        });
    }

}

// 3. Init file upload
function InitFileUpload() {

    var InitFileUploadEle = document.getElementById("drag-drop-area");

    if (InitFileUploadEle) {
        var uppy = Uppy.Core()
            .use(Uppy.Dashboard, {
                inline: true,
                target: '#drag-drop-area',
                height: '300px',
                width: '100%',
                fontSize: '10px'
            })
            .use(Uppy.Tus, { endpoint: 'https://google.com' })

        uppy.on('complete', function (result) {
            console.log('Upload complete! We’ve uploaded these files:', result.successful)
        })
    }

}

// 4. Init Map 
function initMap() {

    var initMapEle = document.getElementById("Bounds_Extend");

    if (initMapEle) {
        var osmUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
            osm = new L.TileLayer(osmUrl, { maxZoom: 18 });

        var latLng = new L.LatLng(30.0444, 31.2357);

        var bounds1 = new L.LatLngBounds(new L.LatLng(29.8171, 30.7955), new L.LatLng(30.1544, 31.4244));
        var bounds2 = new L.LatLngBounds(new L.LatLng(56.56023925701561, -2.076416015625), new L.LatLng(57.01158038001565, -0.9777832031250001));
        var bounds3;

        var map = new L.Map('Bounds_Extend', {
            layers: [osm],
            center: bounds1.getCenter(),
            zoom: 7
        });

        var rectangle1 = new L.Rectangle(bounds1);
        var rectangle2 = new L.Rectangle(bounds2);
        var rectangle3;

        var marker = new L.Marker(latLng);

        map.addLayer(rectangle1).addLayer(rectangle2).addLayer(marker);
    }

}

// 5. Dashboard charts
//-- [1]- Campaigns Status [Admin Page]
function campaignsStatusChart() {
    var campaignsStatusChart = {
        chart: {
            height: 255,
            type: 'donut',
        },
        plotOptions: {
            pie: {
                donut: {
                    size: '75%'
                }
            }
        },
        dataLabels: {
            enabled: false,
        },

        stroke: {
            show: true,
            width: 2,
            colors: ['transparent']
        },

        series: [50, 25, 25,],
        legend: {
            show: true,
            position: 'bottom',
            horizontalAlign: 'center',
            verticalAlign: 'middle',
            floating: false,
            fontSize: '13px',
            offsetX: 0,
            offsetY: 0,
        },
        labels: ["Success", "In progress", "Rejected"],
        colors: ["rgba(34,183,131,1)", "rgba(42, 118, 244,.35)", "rgba(239,77,86,.35)"],

        responsive: [{
            breakpoint: 600,
            options: {
                plotOptions: {
                    donut: {
                        customScale: 0.2
                    }
                },
                chart: {
                    height: 240
                },
                legend: {
                    show: false
                },
            }
        }],
        tooltip: {
            y: {
                formatter: function (val) {
                    return val + " %"
                }
            }
        }

    }

    new ApexCharts(document.querySelector("#campaignsStatusChart"), campaignsStatusChart).render();

}

//-- [2]- All Campaigns [Admin Page]
function AllCampaignsChart() {

    var AllCampaignsChart = {
        series: [{
            type: 'column',
            data: [140, 305, 113, 201, 120, 257, 160, 140, 305, 113, 201, 120, 257]
        },
        {
            type: 'line',
            data: [230, 142, 135, 227, 103, 122, 216, 230, 142, 135, 227, 103, 122]
        }],
        chart: {
            height: 260,
            type: 'line',
            toolbar: {
                show: false
            }
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '30%',
            },
        },
        stroke: {
            width: [0, 2],
        },

        dataLabels: {
            enabled: true,
            enabledOnSeries: [1],
            style: {
                colors: ['rgba(255, 255, 255, .6)'],
            },
            background: {
                enabled: true,
                foreColor: '#b2bdcc',
                padding: 4,
                borderRadius: 2,
                borderWidth: 1,
                borderColor: '#b2bdcc',
                opacity: 0.9,
            },
        },
        colors: ["#a4b1c3", "#6f7b8b"],
        xaxis: {
            categories: ['Sun', 'Mon', 'Tue', 'Wed', 'thu', 'Fri', 'Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'thu', 'Fri'],
        },
        grid: {
            row: {
                colors: ['transparent', 'transparent'], // takes an array which will be repeated on columns
                opacity: 0.2,
            },
            strokeDashArray: 2.5,
        },
    };

    new ApexCharts(document.querySelector("#AllCampaignsChart"), AllCampaignsChart).render();
}

//-- [3]- Campaigns Number [Admin Page]
function campaignsNumber() {

    var campaignsNumber = {

        chart: {
            type: 'area',
            height: 50,
            sparkline: {
                enabled: true
            },
        },
        stroke: {
            curve: 'smooth',
            width: 2
        },
        fill: {
            opacity: 1,
            gradient: {
                shade: '#2c77f4',
                type: "horizontal",
                shadeIntensity: 0.5,
                inverseColors: true,
                opacityFrom: 0.1,
                opacityTo: 0.1,
                stops: [0, 80, 100],
                colorStops: []
            },
        },
        series: [{
            data: [4, 8, 5, 10, 4, 16, 5, 11, 6, 11, 30, 10, 13, 4, 6, 3, 6]
        }],
        yaxis: {
            min: 0
        },
        colors: ['rgba(252, 122, 49, .1)'],
        tooltip: {
            show: false,
        }
    }
    new ApexCharts(document.querySelector("#campaignsNumber"), campaignsNumber).render();

}

//-- [4]- In Progress Campaigns
function inProgressCampaigns() {
    var inProgressCampaigns = {

        chart: {
            type: 'area',
            height: 50,
            sparkline: {
                enabled: true
            },
        },
        stroke: {
            curve: 'smooth',
            width: 2
        },
        fill: {
            opacity: 1,
            gradient: {
                shade: '#2c77f4',
                type: "horizontal",
                shadeIntensity: 0.5,
                inverseColors: true,
                opacityFrom: 0.1,
                opacityTo: 0.1,
                stops: [0, 80, 100],
                colorStops: []
            },
        },
        series: [{
            data: [4, 8, 5, 10, 4, 16, 5, 11, 6, 11, 30, 10, 13, 4, 6, 3, 6]
        }],
        yaxis: {
            min: 0
        },
        colors: ['rgba(34, 183, 131, .1)'],
        tooltip: {
            show: false,
        }
    }
    new ApexCharts(document.querySelector("#inProgressCampaigns"), inProgressCampaigns).render();


}

//-- [5]- Total Earns
function totalEarns() {

    var totalEarns = {

        chart: {
            type: 'area',
            height: 50,
            sparkline: {
                enabled: true
            },
        },
        stroke: {
            curve: 'smooth',
            width: 2
        },
        fill: {
            opacity: 1,
            gradient: {
                shade: '#2c77f4',
                type: "horizontal",
                shadeIntensity: 0.5,
                inverseColors: true,
                opacityFrom: 0.1,
                opacityTo: 0.1,
                stops: [0, 80, 100],
                colorStops: []
            },
        },
        series: [{
            data: [4, 8, 5, 10, 4, 16, 5, 11, 6, 11, 30, 10, 13, 4, 6, 3, 6]
        }],
        yaxis: {
            min: 0
        },
        colors: ['rgba(253, 60, 151, .1)'],
        tooltip: {
            show: false,
        }
    }
    new ApexCharts(document.querySelector("#totalEarns"), totalEarns).render();

}

//-- [6]- Goal Completions
function goalCompletions() {

    var goalCompletions = {

        chart: {
            type: 'area',
            height: 50,
            sparkline: {
                enabled: true
            },
        },
        stroke: {
            curve: 'smooth',
            width: 2
        },
        fill: {
            opacity: 1,
            gradient: {
                shade: '#2c77f4',
                type: "horizontal",
                shadeIntensity: 0.5,
                inverseColors: true,
                opacityFrom: 0.1,
                opacityTo: 0.1,
                stops: [0, 80, 100],
                colorStops: []
            },
        },
        series: [{
            data: [4, 8, 5, 10, 4, 16, 5, 11, 6, 11, 30, 10, 13, 4, 6, 3, 6]
        }],
        yaxis: {
            min: 0
        },
        colors: ['rgba(23, 97, 253, .1)'],
        tooltip: {
            show: false,
        }
    }
    new ApexCharts(document.querySelector("#goalCompletions"), goalCompletions).render();

}

//-- [7]- All Customers
function allCustomers() {

    var allCustomers = {
        series: [{
            name: 'New Visitors',
            data: [68, 44, 55, 57, 56, 61, 58, 63, 60, 66]
        }, {
            name: 'Unique Visitors',
            data: [51, 76, 85, 101, 98, 87, 105, 91, 114, 94]
        },],

        chart: {
            type: 'bar',
            width: 200,
            height: 35,
            sparkline: {
                enabled: true
            }
        },
        colors: ["#4d79f6", "#e0e7fd"],
        plotOptions: {
            bar: {
                columnWidth: '50%'
            }
        },
        labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        xaxis: {
            crosshairs: {
                width: 2
            },
        },
        tooltip: {
            fixed: {
                enabled: false
            },
            x: {
                show: false
            },
            y: {
                title: {
                    formatter: function (seriesName) {
                        return ''
                    }
                }
            },
            marker: {
                show: false
            }
        }
    };

    new ApexCharts(document.querySelector("#allCustomers"), allCustomers).render();
}

//-- [8]- New Customers
function newCustomers() {

    var newCustomers = {
        series: [{
            data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54]
        }],
        chart: {
            type: 'line',
            width: 200,
            height: 35,
            sparkline: {
                enabled: true
            }
        },
        stroke: {
            show: true,
            curve: 'smooth',
            width: [2],
            lineCap: 'round',
        },
        tooltip: {
            fixed: {
                enabled: false
            },
            x: {
                show: false
            },
            y: {
                title: {
                    formatter: function (seriesName) {
                        return ''
                    }
                }
            },
            marker: {
                show: false
            }
        }
    };

    new ApexCharts(document.querySelector("#newCustomers"), newCustomers).render();
}

//-- [9]- Active Now Customers
function activeNowCustomers() {

    var activeNowCustomers = {
        series: [10],
        chart: {
            type: 'radialBar',
            width: 50,
            height: 50,
            sparkline: {
                enabled: true
            }
        },
        dataLabels: {
            enabled: false
        },
        plotOptions: {
            radialBar: {
                hollow: {
                    margin: 0,
                    size: '50%'
                },
                track: {
                    margin: 0
                },
                dataLabels: {
                    show: false
                }
            }
        }
    };

    new ApexCharts(document.querySelector("#activeNowCustomers"), activeNowCustomers).render();

}




document.addEventListener('DOMContentLoaded', function () {
    // 1. Init dataTable
    InitDataTable();

    // 2. Init DateRangePicker
    InitDateRangePicker();

    // 3. Init file upload
    InitFileUpload();

    // 4. Init Map 
    initMap();

    // 5. Dashboard charts [Admin Page]
    //-- [1]- Campaigns Status
    campaignsStatusChart();

    //-- [2]- All Campaigns
    AllCampaignsChart()

    //-- [3]- Campaigns Number
    campaignsNumber();

    //-- [4]- In Progress Campaigns
    inProgressCampaigns();

    //-- [5]- Total Earns
    totalEarns();

    //-- [6]- Goal Completions
    goalCompletions();

    //-- [7]- All Customers
    allCustomers();

    //-- [8]- New Customers
    newCustomers();

    //-- [9]- Active Now Customers
    activeNowCustomers();

});