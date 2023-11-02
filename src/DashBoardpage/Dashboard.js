import React from 'react'
import axios from 'axios';
import ReactApexChart from 'react-apexcharts';
import { useState,useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsFillCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import './Dashboard.css'



function Dashboard() {
    const host = "43.205.196.66"

 
  //   assigning battery data
  const [battery,setBattery]=useState([])

  // assigning WMS data
  const [wmsData,setWmsData]=useState([])

  const [solarData,setSolarData]=useState([])

  //sensordata assigmenet
  const [sensor,setSensor]=useState([])

  // meterdata assigment
  const [meter,setMeter]=useState([])

  // acemeter assigment
  const [acenergy,setAcenergy]=useState([])

  // grid data assignment
  const [grid,setGrid]=useState([])

  const [batterygraph,setBatterygraph]=useState(null)


  const [temp,setTemp]=useState(null)


  const [avgMinpowerfactor,setAvgMinpowerfactor]=useState([])


  const [dieselEnergy,setDieselEnergy]=useState([])


   const [EvCharger,setEvCharger]=useState([])

   const [thermalOverviewData,setThermalOverviewData]=useState([])



   const wms=`http://${host}:5000/wms`
   const solarPerformance=`http://${host}:5000/solarPerformance`
   const sensorurl=`http://${host}:5000/sensorreadings`
   const meterData=`http://${host}:5000/meterdata`
   const acmeterenergy=`http://${host}:5000/acmeterenergy`
   const griddata= `http://${host}:5000/grid`
   const temparature=`http://${host}:5000/thermaltemp`
   const rooftopac = `http://${host}:5000/rooftop`
   const energysaved = `http://${host}:5000/peaksavings`
   const chillerstatus = `http://${host}:5000/chillerstatusd`
   const chillerstatusph2 = `http://${host}:5000/chillerstatuse`
   const powerFactor= `http://${host}:5000/schneider7230readings`
   const diesel=`http://${host}:5000/dashboard/Deisel`
   const chargerdate=`http://${host}:5000/dashboard/EvCharger`
   const thermalApi=`http://${host}:5000/thermal/summaryCard`


   var totalrooftopgeneration
   const Roof = () => {
     const [result, setResult] = useState([])
 
   
     const namelist = () =>{
      axios.get(rooftopac).then((res)=>setResult(res.data))
     }
 
 
   
     useEffect(()=>{ 
       namelist()
  
     },[])
     totalrooftopgeneration = result[0]
     // console.log("rooftop : ",totalrooftopgeneration)
   }
   Roof()
   // console.log("rooftop : ",totalrooftopgeneration)
 
   var energySaved = 0
   const Peaksave = () => {
     const [energy,setEnergysaved] = useState([])
 
     const namelist = () =>{
       axios.get(energysaved).then((res)=>setEnergysaved(res.data))
      }
 
      useEffect(()=>{ 
       namelist()
     },[])
 
     energySaved = energy[0]
   }
   Peaksave()
 
   // chiller status function
   var chillerval = []
   const Chillerstatus = () => {
     const [chiller, setChiller] = useState([])
 
     const namelist = () =>{
       axios.get(chillerstatus).then((res)=>setChiller(res.data))
      }
 
      useEffect(()=>{ 
       namelist()
     },[])
 
     chillerval = chiller 
   }
   console.log(chillerval)
   Chillerstatus()
 
   var chillerval2 = []
   const Chillerstatush2 = () => {
     const [chiller, setChiller] = useState([])
 
     const namelist = () =>{
       axios.get(chillerstatusph2).then((res)=>setChiller(res.data))
      }
 
      useEffect(()=>{ 
       namelist()
     },[])
 
     chillerval2 = chiller 
   }
   Chillerstatush2()
 
 
 
 
 
   const values=[]

 
  const WMSData=()=>{
     axios.get(wms).then((res)=>{
       const dataResponse=res.data
       setWmsData(dataResponse)
   
     }).catch((err)=>{
       console.log(err)
     })
   } 
 
 
   const solarfunction=()=>{
     axios.get(solarPerformance).then((res)=>{
       const dataresponse=res.data
       setSolarData(dataresponse)
     })
   }
 
   const sensorfunction=()=>{
     axios.get(sensorurl).then((res)=>{
       const dataresponse=res.data
       setSensor(dataresponse)
     })
   }
 
   const meterfunction=()=>{
     axios.get(meterData).then((res)=>{
       const dataresponse=res.data
       setMeter(dataresponse)
     })
   }
 
   const acmeterenergyfunction=()=>{
     axios.get(acmeterenergy).then((res)=>{
       const dataresponse=res.data
       setAcenergy(dataresponse)
     })
   }
 
 
   const gridfunction=()=>{
     axios.get(griddata).then((res)=>{
       const dataresponse=res.data
       setGrid(dataresponse)
     })
   }
  let gridunprocess='';
   for(let i=0;i<grid.length;i++){
     gridunprocess=(grid[i].cumulative_energy)
 
   }
   console.log(grid)
 
   const TempData=()=>{
     axios.get(temparature).then((res)=>{
       const dataResponse=res.data
       setTemp(dataResponse)
   
     }).catch((err)=>{
       console.log(err)
     })
   } 
 
   // powerfactor 
   const PowerFactor=()=>{
     axios.get(powerFactor).then((res)=>{
       const dataresponse=res.data
       console.log(dataresponse)
       setAvgMinpowerfactor(dataresponse)
      
     }).catch((err)=>{
       console.log(err)
     })
   }
 
 
     // powerfactor 
     const  PowerValue=()=>{
       axios.get(`http://${host}:5000/schneider7230readings`).then((res)=>{
         const dataresponse=res.data
         console.log(dataresponse)
        
        
       }).catch((err)=>{
         console.log(err)
       })
     }
 
   const DieselEnergyvalue=()=>{
     axios.get(diesel).then((res)=>{
       const dataresponse=res.data
       setDieselEnergy(dataresponse)
      
     }).catch((err)=>{
       console.log(err)
     })
   }
 
 
   
   const EvChargerData=()=>{
     axios.get(chargerdate).then((res)=>{
       const dataresponse=res.data
       setEvCharger(dataresponse)
      
     }).catch((err)=>{
       console.log(err)
     })
   }
 
  //thermal data
   const ThermalData=()=>{
     axios.get(thermalApi).then((res)=>{
       const dataResponse=res.data
       setThermalOverviewData(dataResponse)
   
     }).catch((err)=>{
       console.log(err)
     })
   } 
 
 
   // piedata()
   //   batterydata()
   //   WMSData()
   //   solarfunction()
   //   sensorfunction()
   //   meterfunction()
   //   acmeterenergyfunction()
   //   gridfunction()
 
 
 
 
   useEffect(()=>{ 
     WMSData()
     solarfunction()
     sensorfunction()
     meterfunction()
     acmeterenergyfunction()
     gridfunction()
     TempData()
     PowerFactor()
     DieselEnergyvalue()
     EvChargerData()
     PowerValue()
     ThermalData()
 
     const interval = setInterval(() => {
       WMSData();
       solarfunction();
       sensorfunction();
       meterfunction();
       acmeterenergyfunction();
       gridfunction();
       TempData()
       PowerFactor()
       DieselEnergyvalue()
       EvChargerData()
       ThermalData()
       console.log("running every 5min ............")
   }, 5 * 60 * 1000);
 
 
 
     // Clean up the interval when the component unmounts
     return () => clearInterval(interval);
    },[])

    //---------------------------wheeled in solar card (generation)---------------------------------------------------//

// loop over the array of data and perform subtraction
let totalsolargeneration=0
for (let i = 0; i < meter.length; i++) {
  totalsolargeneration=Math.trunc(meter[i].SolarEnergy)
}


//-----------------------end of calculation---------------------------------------

     //----------- for power factor card
 let  minimum_powerfactor=""
 let  average_powerfactor=""
 for(let i=0;i<avgMinpowerfactor.length;i++){
  minimum_powerfactor=(avgMinpowerfactor[i].minimum_powerfactor)
  average_powerfactor=(avgMinpowerfactor[i].average_powerfactor)
 }

 //---------for diesel card
 let dieselvalue=""
 for(let i=0;i<dieselEnergy.length;i++){
  dieselvalue=(Math.round(dieselEnergy[i].total_energy_difference))
  
 }


 values.push(Math.round(gridunprocess),Math.trunc(totalrooftopgeneration),Math.trunc(totalsolargeneration),dieselvalue)
 console.log(values)

 const state = {
    series: values.map((data) => data),
    options: {
      chart: {
        width: '100%',
        height: '100%',
        type: 'donut',
      },
      zoom: {
        enabled: true,
      },
      toolbar: {
        show: true,
      },
      labels: ['Grid', 'Rooftop', 'wheeled_in_solar', 'Diesel'],
      // title: {
      //   text: 'Fruit Sales',
      //   align: 'center',
      //   style: {
      //     fontSize: '20px',
      //     fontWeight: 'bold',
      //   }
      // },
      legend: {
        show: false,
        position: 'right',
        labels: {
          colors: 'black',
          useSeriesColors: false,
          horizontalAlign: 'left',
          fontSize: '27px',
          markers: {
            fillColors: ['#1fc270', '#FFAE42', '#FF5349', '#546E7A']
          }
        }
      },
      plotOptions: {
        pie: {
          customScale: 0.9, // adjust the size of the donut circle
          dataLabels: {
            enabled: true,
            position: 'center',
            offsetX: 0,
            offsetY: 0,
            style: {
              fontSize: '20px',
              fontWeight: 'bold',
              fontFamily: 'Helvetica, Arial, sans-serif',
              fill: 'black', // Set the text color to black
              textAnchor: 'middle',
            },
            formatter: function(val) {
              return '<tspan dy="0">' + state.options.title.text + '</tspan>';
            }
          }
        },
      },      
      colors: ['#1fc270', '#FFAE42', '#FF5349', '#546E7A'],
    },
  };

  const now = new Date();
  const local = now.toLocaleDateString(); // Use toLocaleDateString() instead of toLocaleString()
  const [month, day, year] = local.split("/"); // Split the date by "/"
  const currentdate = `${day}/${month}/${year}`; // Rearrange the day and month


  const calculatedHeight = `calc(100vh - 100px)`;


  return (
    <div>
        

         <div class="row">
      <div class="col-sm-12 mb-3 mb-sm-0">
  <div class="container-fluid">

  <div class="card1" style={{width: "100%", height: calculatedHeight,justifyContent: 'center', marginTop:0, background: 'white', color: "white"}} >
  <h3 style={{textAlign:"end",color:"#b03d2b",textAlign:"center",marginTop:"20px"}}><b>{currentdate}</b></h3>
<div   class="card-body d-flex flex-column justify-content-center">
<div class="row" >

<div class="col-sm-4 mb-3 mb-sm-0"  >
<div  style={{ position: 'relative' }}>

        <ReactApexChart options={state.options} series={state.series} type="donut" width={'100%'} height={'400px'}  />
        <p class="card-title" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'black', zIndex: 1 }}><b>Building Consumption</b></p>
      </div>
</div>
<div  class="col-sm-8 mb-3 mb-sm-0" >
<div style={{marginTop:"10px",textAlign:"center"}}> 
<div class="data-container-legends">
    <span>
    <span style={{ color: '#5e5d5c' }}><BsFillCircleFill color='#1fc270'/> &nbsp; <b style={{ color: 'black', textAlign: 'right',fontSize:"18px"}}>Grid</b> </span>
    </span>
    <span>
    <span style={{ color: '#5e5d5c' }}><BsFillCircleFill color='#FFAE42'/> &nbsp;<b style={{ color: 'black', textAlign: 'right',fontSize:"18px"}}>Rooftop</b> </span>

    </span>
    <span>
    <span style={{ color: '#5e5d5c' }}><BsFillCircleFill color='#FF5349'/>&nbsp;<b style={{ color: 'black', textAlign: 'right',fontSize:"18px"}}>Wheeled in  solar</b> </span>  

    </span>
    <span>
    <span style={{ color: '#5e5d5c' }}><BsFillCircleFill color='#546E7A'/>&nbsp;<b  style={{ color: 'black', textAlign: 'right',fontSize:"18px"}}>Diesel</b> </span>  

    </span>
  </div>
  
  <div style={{ color: '#5e5d5c', textAlign: 'right', fontSize: "22px",marginTop:"30px",marginRight:"80px"}}> 
 
 <h5><b>*Energy in kWh</b></h5>

</div>
</div>
<br/>

  <div class="container">
  <div class="row">
    <div class="col-6">
      <table> 
        <tr> 
          <td><b style={{ fontSize: "25px",color: '#5e5d5c',marginLeft:"50px"}}>Wheeled in solar:</b></td>
          <td style={{ fontSize: "25px",color:"black"}} >{Math.trunc(totalsolargeneration)}</td>
        </tr>
      </table>
    
    </div>
    <div class="col-6">
    <table style={{marginLeft:"50px"}}> 
        <tr> 
          <td><b style={{ fontSize: "25px",color: '#5e5d5c'}}>Diesel:</b></td>7
          <td style={{ fontSize: "25px",color:"black"}} >{dieselvalue}</td>
        </tr>
      </table>
    </div>
  </div>
  </div>
  <br/>
  <div class="container" style={{ marginTop:"10px"}}>
  <div class="row">
    <div class="col-6">
      <table> 
        <tr> 
          <td><b style={{ fontSize: "25px",color: '#5e5d5c',marginLeft:"50px"}}>Rooftop{' '} :</b></td> 
          <td style={{ fontSize: "25px",color:"black"}} >{Math.trunc(totalrooftopgeneration)}</td>
        </tr>
      </table>
    
    </div>
    <div class="col-6">
    <table style={{marginLeft:"50px"}}> 
        <tr> 
          <td><b style={{ fontSize: "25px",color: '#5e5d5c'}}>Grid{' '} :</b></td>
          <td style={{ fontSize: "25px",color:"black"}} >{Math.round(gridunprocess)}</td>
        </tr>
      </table>
    </div>
  </div>
  </div>

  <br/>
  <div class="container" style={{ marginTop:"10px"}}>
  <div class="row">
    <div class="col-6">
      <table > 
        <tr> 
          <td><b style={{ fontSize: "25px",color: '#5e5d5c',marginLeft:"50px"}}>Power Factor(Min){' '} :</b></td>
          <td style={{ fontSize: "25px",color:"black"}} > {minimum_powerfactor}</td>
        </tr>
      </table>
    
    </div>
    <div class="col-6">
    <table style={{marginLeft:"50px"}} > 
        <tr> 
          <td><b style={{ fontSize: "25px",color: '#5e5d5c'}}>Power Factor(Avg){' '} :</b></td>
          <td style={{ fontSize: "25px",color:"black"}} >{average_powerfactor}</td>
        </tr>
      </table>
    </div>
  </div>
  </div>

{/* <div class="data-container"style={{ marginTop:"10px",marginRight:"3%"}}>
    <span>
      <span style={{ color: '#5e5d5c' }}>
        <b style={{ fontSize: "22px"}}>Power Factor(Min):</b>
      </span>
      <span style={{ color: 'black', textAlign: 'right', fontSize: "22px" }}>
      {minimum_powerfactor}
      </span>
    </span>
   
  
    <span>
      <span style={{ color: '#5e5d5c' }}>
        <b style={{ fontSize: "22px"}}>Power Factor(Avg):</b>
      </span>
      <span style={{ color: 'black', textAlign: 'right', fontSize: "22px"}}>
      {average_powerfactor}
      </span>
    </span>
  </div> */}


<div>
{/* <table> 
  <tr> 
  <td style={{ color: '#5e5d5c'}}><h5><b style={{fontSize:"22px"}}>Min_powerfactor:</b></h5></td>
    <td style={{ color: 'black', textAlign: 'right' }}><h4>{minimum_powerfactor}</h4></td>
    <td style={{ width: '30px' }}></td>
    <td>   </td>
     <td>  </td>
    <td style={{ color: '#5e5d5c'}}><h5><b style={{fontSize:"22px"}}>Avg_powerfactor:</b></h5></td>
    <td style={{ color: 'black', textAlign: 'right' }}><h4>{average_powerfactor}</h4></td>
   
  </tr>
  
</table> */}

</div>
<br/>
{/* <div style={{ color: 'black', textAlign: 'right',justifyContent:"flex-end",justifyItems:"baseline" }}>
<Link to='/peakgraph'>
<button className="btn btn-primary">Analytics</button>
</Link>
</div> */}

</div>


</div>


</div>
</div>
</div>
  

 
  </div>
  </div>
  </div>

  )
}

export default Dashboard
