<template>
    <content-body>
        <div class="row">
            <div class="col-xl-3 col-lg-4 col-xxl-4">
                <div class="card balance-widget">
                    <div class="card-header border-0 py-0">
                        <h4 class="card-title">Your Portfolio </h4>
                    </div>
                    <div class="card-body pt-0">
                        <div class="balance-widget">
                            <div class="total-balance">
                                <h3>$63411.00</h3>
                                <h6>Total Balance</h6>
                            </div>
                            <ul class="list-unstyled">
                                <li class="media">
                                    <i class="cc BTC mr-3"></i>
                                    <div class="media-body">
                                        <h5 class="m-0">Bitcoin</h5>
                                    </div>
                                    <div class="text-right">
                                        <h5>0.000242 BTC</h5>
                                        <span>0.125 USD</span>
                                    </div>
                                </li>
                                <li class="media">
                                    <i class="cc LTC mr-3"></i>
                                    <div class="media-body">
                                        <h5 class="m-0">Litecoin</h5>
                                    </div>
                                    <div class="text-right">
                                        <h5>0.000242 LTC</h5>
                                        <span>0.125 USD</span>
                                    </div>
                                </li>
                                <li class="media">
                                    <i class="cc XRP mr-3"></i>
                                    <div class="media-body">
                                        <h5 class="m-0">Ripple</h5>
                                    </div>
                                    <div class="text-right">
                                        <h5>0.000242 XRP</h5>
                                        <span>0.125 USD</span>
                                    </div>
                                </li>
                                <li class="media">
                                    <i class="cc DASH mr-3"></i>
                                    <div class="media-body">
                                        <h5 class="m-0">Dash</h5>
                                    </div>
                                    <div class="text-right">
                                        <h5>0.000242 XRP</h5>
                                        <span>0.125 USD</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-xl-6 col-lg-8 col-xxl-8">
                <div class="card profile_chart">
                    <div class="card-header py-0">
                        <div class="chart_current_data">
                            <h3>254856 <span>USD</span></h3>
                            <p class="text-success">125648 <span>USD (20%)</span></p>
                        </div>
                        <div class="duration-option">
                            <a v-for="(value, name, index) in durationOptions"
                               href="#"
                               :id="name"
                               :class="{ active: activeDurationOption === index }"
                               @click="selectDurationOption(index)"
                            >{{ value }}</a>
                        </div>
                    </div>
                    <div class="card-body">
                        <div id="timeline-chart"></div>
                        <div class="chart-content text-center">
                            <div class="row">
                                <div class="col-xl-3 col-sm-6 col-6">
                                    <div class="chart-stat">
                                        <p class="mb-1">24hr Volume</p>
                                        <h5>$1236548.325</h5>
                                    </div>
                                </div>
                                <div class="col-xl-3 col-sm-6 col-6">
                                    <div class="chart-stat">
                                        <p class="mb-1">Market Cap</p>
                                        <h5>19B USD</h5>
                                    </div>
                                </div>
                                <div class="col-xl-3 col-sm-6 col-6">
                                    <div class="chart-stat">
                                        <p class="mb-1">Circulating Supply</p>
                                        <h5>29.4M BTC</h5>
                                    </div>
                                </div>
                                <div class="col-xl-3 col-sm-6 col-6">
                                    <div class="chart-stat">
                                        <p class="mb-1">All Time High</p>
                                        <h5>19.783.06 USD</h5>
                                    </div>
                                </div>
                                <div class="col-xl-3 col-sm-6 col-6">
                                    <div class="chart-stat">
                                        <p class="mb-1">Typical hold time </p>
                                        <h5>88 days</h5>
                                    </div>
                                </div>
                                <div class="col-xl-3 col-sm-6 col-6">
                                    <div class="chart-stat">
                                        <p class="mb-1">Trading activity </p>
                                        <h5>70% buy </h5>
                                    </div>
                                </div>
                                <div class="col-xl-3 col-sm-6 col-6">
                                    <div class="chart-stat">
                                        <p class="mb-1">Popularity </p>
                                        <h5>#1 most held </h5>
                                    </div>
                                </div>
                                <div class="col-xl-3 col-sm-6 col-6">
                                    <div class="chart-stat">
                                        <p class="mb-1">Popularity </p>
                                        <h5>#1 most held </h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xl-3 col-lg-12 col-xxl-12">
                <div class="card">
                    <div class="card-header border-0 py-0">
                        <h4 class="card-title">Follow</h4>
                    </div>
                    <div class="card-body">
                        <div class="row">
                            <div class="col-xl-12 col-lg-6 col-xxl-6">
                                <div class="widget-card">
                                    <div class="d-flex justify-content-between align-items-center">
                                        <div class="widget-stat">
                                            <div class="coin-title">
                                                <span><i class="cc BTC-alt"></i></span>
                                                <h5 class="d-inline-block ml-2 mb-3">Bitcoin <span>(24h)</span>
                                                </h5>
                                            </div>
                                            <h4>USD 1254.36 <span class="badge badge-success ml-2">+ 06%</span>
                                            </h4>
                                        </div>
                                        <div id="btcChart"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-12 col-lg-6 col-xxl-6">
                                <div class="widget-card">
                                    <div class="d-flex justify-content-between align-items-center">
                                        <div class="widget-stat">
                                            <div class="coin-title">
                                                <span><i class="cc ETH-alt"></i></span>
                                                <h5 class="d-inline-block ml-2 mb-3">Ethereum <span>(24h)</span>
                                                </h5>
                                            </div>
                                            <h4>USD 1254.36 <span class="badge badge-danger ml-2">- 06%</span>
                                            </h4>
                                        </div>
                                        <div id="ltcChart"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-12 col-lg-6 col-xxl-6">
                                <div class="widget-card">
                                    <div class="d-flex justify-content-between align-items-center">
                                        <div class="widget-stat">
                                            <div class="coin-title">
                                                <span><i class="cc LTC-alt"></i></span>
                                                <h5 class="d-inline-block ml-2 mb-3">Litecoin <span>(24h)</span>
                                                </h5>
                                            </div>
                                            <h4>USD 1254.36 <span class="badge badge-primary ml-2"> 06%</span>
                                            </h4>
                                        </div>
                                        <div id="xrpChart"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-12 col-lg-6 col-xxl-6">
                                <div class="widget-card">
                                    <div class="d-flex justify-content-between align-items-center">
                                        <div class="widget-stat">
                                            <div class="coin-title">
                                                <span><i class="cc XRP-alt"></i></span>
                                                <h5 class="d-inline-block ml-2 mb-3">Ripple <span>(24h)</span>
                                                </h5>
                                            </div>
                                            <h4>USD 1254.36 <span class="badge badge-danger ml-2">- 06%</span>
                                            </h4>
                                        </div>
                                        <div id="dashChart"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-xl-3 col-lg-4 col-xxl-4">
                <div class="card">
                    <div class="card-header border-0 py-0">
                        <h4 class="card-title">Exchange</h4>
                    </div>
                    <div class="card-body">
                        <div class="buy-sell-widget">
                            <currency-form/>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xl-9 col-lg-8 col-xxl-8">
                <div class="card">
                    <div class="card-header border-0 py-0">
                        <h4 class="card-title">Recent Activities</h4>
                        <a href="#">View More </a>
                    </div>
                    <div class="card-body">
                        <div class="transaction-table">
                            <div class="table-responsive">
                                <table class="table mb-0 table-responsive-sm">
                                    <tbody>
                                    <tr>
                                        <td><span class="sold-thumb"><i class="la la-arrow-down"></i></span>
                                        </td>

                                        <td>
                                            <span class="badge badge-danger">Sold</span>
                                        </td>
                                        <td>
                                            <i class="cc BTC"></i> Bitcoin
                                        </td>
                                        <td>
                                            Using - Bank *******5264
                                        </td>
                                        <td class="text-danger">-0.000242 BTC</td>
                                        <td>-0.125 USD</td>
                                    </tr>
                                    <tr>
                                        <td><span class="buy-thumb"><i class="la la-arrow-up"></i></span>
                                        </td>
                                        <td>
                                            <span class="badge badge-success">Buy</span>
                                        </td>
                                        <td>
                                            <i class="cc LTC"></i> Litecoin
                                        </td>
                                        <td>
                                            Using - Card *******8475
                                        </td>
                                        <td class="text-success">-0.000242 BTC</td>
                                        <td>-0.125 USD</td>
                                    </tr>
                                    <tr>
                                        <td><span class="sold-thumb"><i class="la la-arrow-down"></i></span>
                                        </td>
                                        <td>
                                            <span class="badge badge-danger">Sold</span>
                                        </td>
                                        <td>
                                            <i class="cc XRP"></i> Ripple
                                        </td>
                                        <td>
                                            Using - Card *******8475
                                        </td>
                                        <td class="text-danger">-0.000242 BTC</td>
                                        <td>-0.125 USD</td>
                                    </tr>
                                    <tr>
                                        <td><span class="buy-thumb"><i class="la la-arrow-up"></i></span>
                                        </td>
                                        <td>
                                            <span class="badge badge-success">Buy</span>
                                        </td>
                                        <td>
                                            <i class="cc DASH"></i> Dash
                                        </td>
                                        <td>
                                            Using - Card *******2321
                                        </td>
                                        <td class="text-success">-0.000242 BTC</td>
                                        <td>-0.125 USD</td>
                                    </tr>
                                    <tr>
                                        <td><span class="sold-thumb"><i class="la la-arrow-down"></i></span>
                                        </td>
                                        <td>
                                            <span class="badge badge-danger">Sold</span>
                                        </td>
                                        <td>
                                            <i class="cc BTC"></i> Bitcoin
                                        </td>
                                        <td>
                                            Using - Card *******2321
                                        </td>
                                        <td class="text-danger">-0.000242 BTC</td>
                                        <td>-0.125 USD</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <b-toast id="my-toast" variant="warning" toaster="b-toaster-top-center" solid>
            <template v-slot:toast-title>
                <div class="d-flex flex-grow-1 align-items-baseline">
                    <b-img blank blank-color="#ff5555" class="mr-2" width="12" height="12"></b-img>
                    <strong class="mr-auto">Complete your payment!</strong>
                    <small class="text-muted mr-2">42 seconds ago</small>
                </div>
            </template>
            Complete your payment to make it easier to exchange.
            It is short and to the point.
        </b-toast>
    </content-body>
</template>

<script>
    import contentBody from '@app/components/dashboard/ContentBody.vue';
    import currencyForm from '@app/components/CurrencyForm.vue';
    import ApexCharts from 'apexcharts';
    import app from '@app/App.vue';

    export default {
        extends: app,
        components: {contentBody, currencyForm},

        data() {
            return {
                activeDurationOption: 0,

                durationOptions: {
                    'all': 'ALL',
                    'one_month': '1M',
                    'six_months': '6M',
                    'one_year': '1Y',
                    'ytd': 'YTD'
                },
            }
        },

        mounted() {
            this.$bvToast.show('my-toast');
            this.initTimelineChart();
            this.initCurrencyChart('#btcChart');
            this.initCurrencyChart('#ltcChart');
            this.initCurrencyChart('#xrpChart');
            this.initCurrencyChart('#dashChart');
        },

        methods: {
            selectDurationOption(index) {
                this.activeDurationOption = index;
            },

            initCurrencyChart(id) {
                let chart = new ApexCharts(
                    document.querySelector(id),
                    {
                        chart: {
                            height: 100,
                            type: 'line',
                            zoom: {enabled: false},
                            toolbar: {show: false}
                        },
                        series: [{
                            name: "Desktops",
                            data: [10, 41, 35, 51, 49, 62, 69, 91, 80, 10, 41, 35, 51, 49, 62, 69, 91, 80]
                        }],
                        dataLabels: {enabled: false},
                        stroke: {
                            curve: 'smooth',
                            width: 2,
                            colors: ["#7391FF"],
                        },
                        grid: {show: false},
                        tooltip: {
                            enabled: false,
                            x: {format: "dd MMM yyyy"},
                        },
                        xaxis: {
                            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
                            axisBorder: {show: false},
                            labels: {show: false}
                        },
                        yaxis: {show: false}
                    }
                );

                chart.render();
            },

            initTimelineChart() {
                let options = {
                    chart: {
                        type: "area",
                        height: 300,
                        foreColor: "#8C87C2",
                        fontFamily: 'Rubik, sans-serif',
                        stacked: true,
                        dropShadow: {
                            enabled: true,
                            enabledSeries: [0],
                            top: -2,
                            left: 2,
                            blur: 5,
                            opacity: 0.06
                        },
                        toolbar: {show: false}
                    },
                    colors: ['#7B6FFF', '#7395FF'],
                    stroke: {
                        curve: "smooth",
                        width: 3
                    },
                    dataLabels: {enabled: false},
                    series: [{
                        name: 'Buy',
                        data: this.generateDayWiseTimeSeries(0, 30),
                    }, {
                        name: 'Sell',
                        data: this.generateDayWiseTimeSeries(1, 30)
                    }],
                    markers: {
                        size: 0,
                        strokeColor: "#fff",
                        strokeWidth: 3,
                        strokeOpacity: 1,
                        fillOpacity: 1,
                        hover: {size: 6}
                    },
                    xaxis: {
                        type: "datetime",
                        axisBorder: {show: false},
                        axisTicks: {show: false}
                    },
                    yaxis: {
                        show: false,
                        labels: {
                            offsetX: -10,
                            offsetY: 0
                        },
                        tooltip: {enabled: true}
                    },
                    grid: {
                        show: false,
                        padding: {
                            left: -5,
                            right: 5
                        }
                    },
                    tooltip: {
                        x: {format: "dd MMM yyyy"},
                    },
                    legend: {
                        position: 'top',
                        horizontalAlign: 'left'
                    },
                    fill: {
                        type: 'gradient',
                        gradient: {
                            shadeIntensity: 1,
                            opacityFrom: 0.5,
                            opacityTo: 0,
                            stops: [0, 100, 100]
                        }
                    },
                };

                let chart = new ApexCharts(
                    document.querySelector("#timeline-chart"),
                    options
                );

                chart.render();
            },

            generateDayWiseTimeSeries(s, count) {
                let values = [[
                    274, 248, 273, 48, 285, 229, 69, 51, 16, 141, 388, 325, 333, 220, 333, 376, 213, 97, 90, 255, 172, 205, 117, 16, 247, 85, 392, 66, 278, 373, 224, 37, 139, 89, 280, 150, 134, 325, 195, 279, 242, 62, 72, 239, 131, 376, 71, 231, 148, 264, 214, 300, 380, 326, 67, 150, 114, 258, 379, 176, 310, 47, 371, 29, 311, 90, 270, 173, 237, 281, 93, 33, 384, 189, 180, 379, 203, 220, 1, 299, 203, 393, 227, 381, 225, 71, 219, 312, 342, 338, 247, 293, 374, 295, 390, 320, 237, 109, 28, 45, 137, 218, 26, 24, 234, 192, 130, 302, 260, 112, 349, 84, 7, 161, 331, 179, 190, 72, 41, 108, 329, 331, 157, 43, 260, 228, 264, 229, 264, 181, 314, 397, 167, 137, 111, 386, 158, 242, 235, 126, 83, 374, 149, 395, 124, 225, 246, 16, 326, 90, 66, 167, 144, 57, 293, 137, 102, 260, 336, 129, 25, 249, 183, 263, 274, 357, 275, 335, 221, 344, 226, 5, 251, 28, 214, 67, 189, 243, 251, 112, 326, 277, 53, 262, 18, 353, 112, 96, 237, 320, 129, 309, 285, 306, 103, 214, 296, 380, 377, 389, 195, 343, 232, 136, 348, 39, 341, 148, 171, 176, 325, 380, 334, 389, 398, 288, 217, 257, 388, 17, 24, 364, 380, 269, 267, 220, 180, 227, 249, 165, 243, 2, 95, 319, 355, 327, 35, 84, 225, 260, 366, 270, 185, 148, 174, 276, 208, 175, 355, 40, 276, 348, 206, 273, 286, 363, 196, 68, 37, 136, 40, 282, 150, 293, 203, 219, 265, 328, 203, 361, 281, 188, 144, 351, 98, 31, 394, 340, 53, 367, 326, 316, 114, 358, 374, 151, 367, 167, 82, 230, 14, 98, 223, 118, 89, 279, 312, 61, 317, 38, 135, 75, 42, 338, 296, 256, 263, 381, 221, 112, 175, 77, 151, 367, 108, 337, 297, 185, 309, 286, 133, 41, 269, 358, 222, 351, 321, 302, 310, 89, 199, 309, 79, 26, 78, 290, 162, 290, 245, 88, 32, 243, 27, 206, 11, 100, 389, 317, 1, 9, 96, 9, 195, 390, 341, 20, 90, 64, 118, 262, 246, 42, 394, 93, 138, 283, 232, 208, 249, 95
                ], [
                    133, 327, 59, 94, 62, 378, 229, 98, 103, 256, 257, 315, 118, 114, 295, 118, 142, 301, 256, 101, 87, 289, 43, 287, 173, 350, 254, 199, 224, 44, 155, 111, 97, 344, 334, 5, 96, 306, 60, 62, 39, 373, 27, 196, 316, 362, 31, 339, 180, 97, 71, 235, 45, 93, 76, 261, 170, 151, 140, 198, 197, 69, 2, 291, 272, 42, 229, 140, 279, 350, 329, 254, 315, 315, 6, 341, 6, 344, 231, 13, 65, 300, 24, 331, 311, 110, 85, 5, 191, 273, 146, 200, 171, 190, 225, 387, 4, 104, 167, 366, 4, 325, 168, 118, 396, 24, 161, 385, 167, 345, 41, 2, 86, 82, 258, 397, 317, 58, 159, 252, 254, 200, 214, 64, 376, 37, 90, 87, 98, 35, 304, 118, 194, 199, 146, 100, 171, 302, 159, 361, 158, 331, 374, 268, 155, 310, 72, 74, 28, 18, 120, 254, 93, 77, 362, 121, 241, 297, 267, 24, 92, 61, 21, 123, 275, 79, 261, 201, 100, 346, 177, 50, 105, 80, 15, 333, 234, 47, 306, 75, 95, 243, 283, 150, 23, 237, 82, 46, 69, 182, 87, 109, 203, 264, 349, 323, 5, 350, 222, 75, 259, 355, 351, 175, 44, 265, 27, 231, 272, 102, 111, 178, 318, 360, 190, 132, 51, 347, 14, 130, 47, 41, 67, 308, 205, 366, 217, 94, 157, 218, 86, 358, 391, 300, 184, 306, 222, 54, 361, 18, 236, 310, 267, 27, 150, 292, 386, 298, 388, 282, 59, 220, 44, 276, 87, 160, 279, 85, 223, 260, 306, 125, 326, 332, 149, 274, 73, 138, 85, 144, 205, 281, 253, 282, 6, 47, 37, 244, 254, 59, 277, 257, 302, 236, 398, 72, 358, 224, 395, 310, 43, 398, 201, 275, 284, 240, 217, 335, 340, 130, 61, 185, 43, 101, 34, 351, 363, 85, 185, 256, 31, 369, 372, 328, 48, 121, 201, 20, 273, 232, 218, 387, 86, 231, 35, 323, 283, 391, 331, 99, 203, 204, 275, 397, 72, 151, 52, 385, 398, 256, 94, 92, 75, 75, 247, 56, 340, 103, 379, 327, 297, 287, 103, 337, 181, 90, 260, 57, 70, 370, 46, 175, 35, 301, 196, 340, 330, 272, 289, 221
                ]];
                let i = 0;
                let series = [];
                let x = new Date("19 Nov 2018").getTime();
                while (i < count) {
                    series.push([x, values[s][i]]);
                    x += 86400000;
                    i++;
                }
                return series;
            },
        }
    }
</script>