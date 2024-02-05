import React, { useEffect, useState } from 'react'
import ReactApexChart from 'react-apexcharts';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { FaRegCirclePause } from "react-icons/fa6";
import { ImCancelCircle } from "react-icons/im";
import { FaRegCircleCheck } from "react-icons/fa6";



function Dashboard() {
  let { isLogin } = useSelector(state => state.adminReducer);
  let navigate = useNavigate()
  let [ isLoading , setIsLoading] = useState(true)

  const chartFirst = {

    series: [{
      name: 'Sales',
      data: [4, 3, 10, 9, 29, 19, 22, 9, 12, 7, 19, 5, 13, 9, 17, 2, 7, 5]
    }],
    options: {
      chart: {
        height: 350,
        type: 'line',
      },
      forecastDataPoints: {
        count: 7
      },
      stroke: {
        width: 5,
        curve: 'smooth'
      },
      xaxis: {
        type: 'datetime',
        categories: ['1/11/2000', '2/11/2000', '3/11/2000', '4/11/2000', '5/11/2000', '6/11/2000', '7/11/2000', '8/11/2000', '9/11/2000', '10/11/2000', '11/11/2000', '12/11/2000', '1/11/2001', '2/11/2001', '3/11/2001', '4/11/2001', '5/11/2001', '6/11/2001'],
        tickAmount: 10,
        labels: {
          formatter: function (value, timestamp, opts) {
            return opts.dateFormatter(new Date(timestamp), 'dd MMM')
          }
        }
      },
      title: {
        text: 'Total Orders',
        align: 'left',
        style: {
          fontSize: "17px",
          color: '#666'
        }
      },
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'dark',
          gradientToColors: ['#FDD835'],
          shadeIntensity: 1,
          type: 'horizontal',
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100, 100, 100]
        },
      },
      yaxis: {
        min: -10,
        max: 40
      }
    },


  };

  const ChartSecond = {

    series: [{
      name: 'series1',
      data: [31, 40, 28, 51, 42, 109, 100]
    }, {
      name: 'series2',
      data: [11, 32, 45, 32, 34, 52, 41]
    }],
    options: {
      chart: {
        height: 350,
        type: 'area'
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth'
      },
      xaxis: {
        type: 'datetime',
        categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
      },
      tooltip: {
        x: {
          format: 'dd/MM/yy HH:mm'
        },
      },
    },
  }

  const chartThird = {

    series: [{
      name: "Desktops",
      data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
    }],
    options: {
      chart: {
        height: 350,
        type: 'line',
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'straight'
      },
      title: {
        text: 'New customers',
        align: 'left',
        style: {
          fontSize: "17px",
          color: '#666'
        }
      },
      grid: {
        row: {
          colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
          opacity: 0.5
        },
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
      }
    },


  };

  const chartFive = {

    series: [14, 23, 21, 17, 15, 10, 12, 17, 21],
    options: {
      chart: {
        type: 'polarArea',
      },
      stroke: {
        colors: ['#fff']
      },
      fill: {
        opacity: 0.8
      },
      title: {
        text: 'Top coupons',
        align: 'left',
        style: {
          fontSize: "17px",
          color: '#666'
        }
      },
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'bottom'
          }
        }
      }]
    },


  };

  const chartFour = {

    series: [44, 55, 67, 83],
    options: {
      chart: {
        height: 350,
        type: 'radialBar',
      },
      title: {
        text: 'Top Revenue',
        align: 'left',
        style: {
          fontSize: "17px",
          color: '#666'
        }
      },
      plotOptions: {
        radialBar: {
          dataLabels: {
            name: {
              fontSize: '22px',
            },
            value: {
              fontSize: '16px',
            },
            total: {
              show: true,
              label: 'Total',
              formatter: function (w) {
                // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                return 249
              }
            }
          }
        }
      },
      labels: ['Apples', 'Oranges', 'Bananas', 'Berries'],
    },


  };

  setTimeout(()=>{
    setIsLoading(false)
  },[100])

  useEffect(() => {

    if (!isLogin) {
      navigate('/');
    }

  })
  if (isLoading) {
    return (
      <>
        <div className="d-flex align-items-center justify-content-center" style={{height : "100vh"}}>
          <div className="loader"></div>
        </div >

      </>
    )
  } else {
  return (
    <>
      <div className='d-flex flex-wrap'>

        <div className="col-12 d-flex flex-wrap pt-5 ps-lg-3 ps-1 border-bottom">
          <h2 className='text-black col-12 fw-bold pb-4'>Ecommerce Dashboard</h2>
          <div className="col-xl-2 col-lg-3 col-12 d-flex"><FaRegCircleCheck className='fs-3 mt-2 me-2 text-success' /><div><h5 className='mb-0'>57 new orders</h5><p className='fs-7 text-secondary'>Awating processing</p></div></div>
          <div className="col-xl-2 col-lg-3 col-12 d-flex"><FaRegCirclePause className='fs-3 mt-2 me-2 text-warning' /><div><h5 className='mb-0'>5 orders</h5><p className='fs-7 text-secondary'>On hold</p></div></div>
          <div className="col-xl-2 col-lg-3 col-12 d-flex"><ImCancelCircle className='fs-3 mt-2 me-2 text-danger' /><div><h5 className='mb-0'>16 products</h5><p className='fs-7 text-secondary'>Out of stock</p></div></div>
        </div>
        <div className="col-12 pt-3 ps-lg-3 ps-1">
          <h3 className='text-black fw-semibold pb-1'>Total Sells</h3>

        </div>
        <div className="col-12" id='chart'>
          <ReactApexChart options={ChartSecond.options} series={ChartSecond.series} type="area" height={350} />
        </div>
        <div className="col-12 ps-lg-3 d-lg-flex pt-4">
          <div className='col-lg-7 col-12 p-2'>

            <div className='col-12 border p-3 bg-white border-2 rounded-2'>
              <ReactApexChart options={chartFirst.options} series={chartFirst.series} type="line" height={350} />
            </div>
          </div>
          <div className='col-lg-5 col-12 p-2'>

            <div className="col-12 border p-3 bg-white border-2 rounded-2">
              <ReactApexChart options={chartThird.options} series={chartThird.series} type="line" height={350} />
            </div>
          </div>
        </div>
        <div className="col-12 ps-lg-3 d-lg-flex pt-2">
          <div className='col-lg-6  col-12 p-2'>

            <div className='col-12  border p-3 bg-white border-2 rounded-2'>
              <ReactApexChart options={chartFive.options} series={chartFive.series} type="polarArea" height={350} />
            </div>
          </div>
          <div className='col-lg-6 col-12 p-2'>

            <div className="col-12 border p-3 bg-white border-2 rounded-2">
              <ReactApexChart options={chartFour.options} series={chartFour.series} type="radialBar" height={350} />
            </div>
          </div>
        </div>
      </div>
    </>

  )
  }

}

export default Dashboard