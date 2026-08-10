// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import ChartComponent from "./ChartComponents";
// import { useParams } from "react-router-dom";

// const PondGraph = () => {
//   // const { id } = useParams();
//   const id = localStorage.getItem('id');

//   const BASEURL = import.meta.env.VITE_BASE_URL;


//   const [activeChart, setActiveChart] = useState("divOne");
//   const [data, setData] = useState({});
//   const [selectedMonth, setSelectedMonth] = useState("");



//   const getChart = async () => {
//     try {
//       const monthNumber = selectedMonth ? parseInt(selectedMonth, 10) : null;

//       const res = await axios.post(`${BASEURL}/monthby/${id}/`, {
//         month: monthNumber,
//       });

//       console.log(res.data);
//       setData(res.data);
//     } catch (error) {
//       console.log("Data not found");
//       console.error(error);
//     }
//   };

//   const handleMonthChange = (e) => {
//     setSelectedMonth(e.target.value);
//   };

//   useEffect(() => {
//     if (selectedMonth) {
//       getChart();
//     }
//   }, [selectedMonth]);


//   const toggleTooltip = () => {
//     // Implement your tooltip toggle logic here
//   };

//   return (
//     <div>
//       <div className="relative inline-block text-left left-8 top-6">


//         <select
//           name="month"
//           id="month"
//           className="p-2 border-spacing-1 border-collapse"
//           value={selectedMonth}
//           onChange={handleMonthChange}
//         >
//           <option value="1">January</option>
//           <option value="2">February</option>
//           <option value="3">March</option>
//           <option value="4">April</option>
//           <option value="5">May</option>
//           <option value="6">June</option>
//           <option value="7">July</option>
//           <option value="8">August</option>
//           <option value="9">September</option>
//           <option value="10">October</option>
//           <option value="11">November</option>
//           <option value="12">December</option>
//         </select>
//       </div>

//       <div className='mt-4'>
//         {activeChart === 'divOne' ? (
//           <div className="max-w-full w-full lg:max-w-full lg:flex mt-4 md:p-8">
//             {/* <div className='p-4 w-full flex gap-4 justify-around flex-col md:flex-row' style={{ backgroundColor: 'rgb(238, 255, 239)' }}> */}
//             <div className='p-0 md:p-4 w-full flex gap-4 justify-around flex-col md:flex-row' style={{ backgroundColor: '#f2f2f2' }}>

//               <div className="flex flex-col w-full md:w-6/12 gap-4">

//                 <div className="flex flex-col w-full justify-between bg-gray-400 rounded-md">
//                   {/* <div className="flex w-full justify-between bg-gray-400 p-2 rounded-md shadow-md text-white" style={{ backgroundColor: 'rgba(65, 148, 94, 1)' }}> */}

//                   {
//                     true ? <div className='p-3 shadow-lg shadow-gray-500/50 bg-gray-100'>
//                       {/* <h3 className='text-gray-500 text-xl'>Chart</h3> */}
//                       <hr className='w-full' />
//                       <ChartComponent title="AQUATIC MACROPHYTES Chart" data={data.AQUATIC_MACROPYTES} labels={data.week} />
//                       <div className="group relative flex">
//                         <svg data-tooltip-target="tooltip-hover" data-tooltip-trigger="click" className="h-6 w-8 text-red-400 ml-[85%] relative cursor-pointer inline" fill="none" viewBox="0 0 24 24" stroke="currentColor" onClick={toggleTooltip}>
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//                         </svg><p className='text-red-400  justify-center cursor-pointer inline'>Info</p>
//                         <span className="absolute top-10 scale-0 transition-all rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100">Aquatic macrophytes are large, visible, and often rooted plants that grow in bodies of water such as lakes, rivers, ponds, and wetlands. They are a diverse group of plants that can include various species of submerged, floating, and emergent plants.</span>
//                       </div>
//                     </div> : ""
//                   }
//                 </div>

//                 <div className="flex flex-col w-full justify-between   rounded-md">
//                   <div className="flex w-full justify-between  rounded-md shadow-md text-gray-700">

//                     {/* {
//                       CDOM ? <span className='text-2xl p-2 font-bold text-md cursor-pointer' onClick={() => toggleModel('CDOM')}>+</span> : <button className='p-3 bg-yellow-400 rounded-full px-8 text-gray-700 font-bold text-md curser-pointer' onClick={() => { paymentGateway(200000, 'CDOM') }}>PAY</button>
//                     } */}

//                   </div>
//                   {
//                     true ? <div className='p-3 bg-gray-100 shadow-lg shadow-gray-500/50'>
//                       {/* <h3 className='text-gray-500 text-xl'>Chart</h3> */}
//                       <hr className='w-full' />
//                       <ChartComponent title="Chlorophyll Chart" data={data.Chl_a} labels={data.week} />

//                       <div className="group relative flex">
//                         <svg data-tooltip-target="tooltip-hover" data-tooltip-trigger="click" className="h-6 w-8 text-red-400 ml-[85%] relative cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" onClick={toggleTooltip}>
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//                         </svg><p className='text-red-400 flex justify-center cursor-pointer'>info</p>
//                         <span className="absolute top-10 scale-0 transition-all rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100">Chlorophyll is a green pigment found in plants, algae, and cyanobacteria that's essential for photosynthesis. Chlorophyll absorbs red and blue light from the sun, which is why leaves appear green.</span>
//                       </div>
//                     </div> : ""
//                   }
//                 </div>
//               </div>

//               <div className="flex flex-col w-full md:w-6/12 gap-4">

//                 <div className="flex flex-col w-full justify-between bg-gray-400 rounded-md">
//                   <div className="flex w-full justify-between bg-gray-400 rounded-md shadow-md text-gray-700" style={{ backgroundColor: '#E9EEF6' }}>
//                     {/* <h2 className='h-full text-xl font-bold flex items-center text-center item-center'>Normalized Difference Water Index</h2> */}
//                     {/* {
//                       ndwi_values ? <span className='text-2xl p-2 font-bold text-md cursor-pointer' onClick={() => toggleModel('ndwi_values')}>+</span> : <button className='p-3 bg-yellow-400 rounded-full px-8 text-gray-700 font-bold text-md curser-pointer' onClick={() => { paymentGateway(900000, 'NDWI') }}>PAY</button>
//                     } */}
//                     {/* <span className='text-2xl p-2 font-bold text-md cursor-pointer' onClick={() => toggleModel('ndwi_values')}>+</span> */}
//                   </div>
//                   {
//                     true ? <div className='p-3 bg-gray-100 shadow-lg shadow-gray-500/50'>
//                       {/* <h3 className='text-gray-500 text-xl'>Chart</h3> */}
//                       <hr className='w-full' />
//                       <ChartComponent title="Phycocyanin Chart" data={data.Phycocyanin} labels={data.week} />
//                       <div className="group relative flex">
//                         <svg data-tooltip-target="tooltip-hover" data-tooltip-trigger="click" className="h-6 w-8 text-red-400 ml-[85%] relative cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" onClick={toggleTooltip}>
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//                         </svg><p className='text-red-400 flex justify-center cursor-pointer'>Info</p>
//                         <span className="absolute top-10 scale-0 transition-all rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100">Phycocyanin is a blue pigment-protein complex found in cyanobacteria, such as spirulina, and plays a role in capturing light for photosynthesis. It is valued for its antioxidant, anti-inflammatory, and immune-boosting properties, often used in food and health supplements.</span>
//                       </div>
//                     </div> : ""
//                   }
//                 </div>
//                 <div className="flex flex-col w-full justify-between bg-gray-400 rounded-md">
//                   <div className="flex w-full justify-between bg-gray-400 rounded-md shadow-md text-gray-700" style={{ backgroundColor: '#E9EEF6' }}>
//                     {/* <h2 className='h-full text-xl font-bold flex items-center text-center item-center'>Potential of Hydrogen</h2> */}
//                     {/* {
//                       ph_values ? <span className='text-2xl p-2 font-bold text-md cursor-pointer' onClick={() => toggleModel('ph_values')}>+</span> : <button className='p-3 bg-yellow-400 rounded-full px-8 text-gray-700 font-bold text-md curser-pointer' onClick={() => { paymentGateway(1000000, 'ph') }}>PAY</button>
//                     } */}
//                     {/* <span className='text-2xl p-2 font-bold text-md cursor-pointer' onClick={() => toggleModel('ph_values')}>+</span> */}
//                   </div>
//                   {
//                     true ? <div className='p-3 bg-gray-100 shadow-lg shadow-gray-500/50'>
//                       {/* <h3 className='text-gray-500 text-xl'>Chart</h3> */}
//                       <hr className='w-full' />
//                       <ChartComponent title="Dissolved Oxygen Chart" data={data.dissolved_oxygen} labels={data.week} />
//                       <div className="group relative flex">
//                         <svg data-tooltip-target="tooltip-hover" data-tooltip-trigger="click" className="h-6 w-8 text-red-400 ml-[85%] relative cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" onClick={toggleTooltip}>
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//                         </svg><p className='text-red-400 flex justify-center cursor-pointer'>Info</p>
//                         <span className="absolute top-10 scale-0 transition-all rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100">pH stands for "potential of hydrogen." It is a measure of the acidity or alkalinity of a solution, indicating the concentration of hydrogen ions (H+) present in the solution.</span>
//                       </div>
//                     </div> : ""
//                   }
//                 </div>
//               </div>
//             </div>
//           </div>
//         ) : (
//           <div className="max-w-full w-full lg:max-w-full lg:flex bg-white mt-4 md:p-8">
//             {/* <div className='p-4 w-full flex gap-4 justify-around flex-col md:flex-row' style={{ backgroundColor: 'rgb(238, 255, 239)' }}> */}
//             <div className='p-0 md:p-4 w-full flex gap-4 justify-around flex-col md:flex-row' style={{ backgroundColor: '#f2f2f2' }}>

//               <div className="flex flex-col w-full md:w-6/12 gap-4">

//                 <div className="flex flex-col w-full justify-between  rounded-md">
//                   <div className="flex w-full justify-between  rounded-md shadow-md text-gray-700" style={{ backgroundColor: '#E9EEF6' }}>


//                     {/* <h2 className='h-full text-xl font-bold flex items-center text-center item-center'>Green Chlorophyll Index</h2> */}
//                     {/* {
//                     GCI ? <span className='text-2xl p-2 font-bold text-md cursor-pointer' onClick={() => toggleModel('GCI')}>+</span> : <button className='p-3 bg-yellow-400 rounded-full px-8 text-gray-700 font-bold text-md curser-pointer' onClick={() => { paymentGateway(300000, 'GCI') }}>PAY</button>
//                   } */}
//                     {/* <span className='text-2xl p-2 font-bold text-md cursor-pointer' onClick={() => toggleModel('GCI')}>+</span> */}
//                   </div>
//                   {
//                     true ? <div className='p-3 bg-gray-100 shadow-lg shadow-gray-500/50'>
//                       {/* <h3 className='text-gray-500 text-xl'>Chart</h3> */}
//                       <hr className='w-full' />
//                       <ChartComponent title="ORP Chart" data={data.GCI} labels={data.week} />
//                       <div className="group relative flex">
//                         <svg data-tooltip-target="tooltip-hover" data-tooltip-trigger="click" className="h-6 w-8 text-red-400 ml-[85%] relative cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" onClick={toggleTooltip}>
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//                         </svg><p className='text-red-400 flex justify-center cursor-pointer'>Info</p>
//                         <span className="absolute top-10 scale-0 transition-all rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100">It measures the ability of a lake or river to cleanse itself or break down waste products, such as contaminants and dead plants and animals. When the ORP value is high, there is lots of oxygen present in the water.</span>
//                       </div>
//                     </div> : ""
//                   }
//                 </div>



//               </div>

        
//             </div>
//           </div>)}
//       </div>
//     </div>
//   );
// };

// export default PondGraph;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import ChartComponent from "./ChartComponents";

// const PondGraph = () => {
//   // const id = localStorage.getItem('id');
//   const BASEURL = import.meta.env.VITE_BASE_URL;

//   const [activeChart, setActiveChart] = useState("divOne");
//   const [selectedMonth, setSelectedMonth] = useState("");
//   const [weekLabels, setWeekLabels] = useState([]);
//   const [alignedData, setAlignedData] = useState({
//     AQUATIC_MACROPYTES: [],
//     Chl_a: [],
//     Phycocyanin: [],
//     dissolved_oxygen: [],
//   });

//   // Helper to generate week labels for a month (assume 4 weeks)
//   const generateWeekLabels = (numWeeks = 4) => {
//     return Array.from({ length: numWeeks }, (_, i) => `Week ${i + 1}`);
//   };

//   // Align data to week labels
//   const alignDataToWeeks = (weekLabels, backendWeeks, backendData) => {
//     // Map week name to its index from backend
//     const weekIndexMap = {};
//     backendWeeks.forEach((w, idx) => {
//       // Normalize week label (e.g., "week 4" or "Week 4" to "Week 4")
//       const normalized = w.replace(/^\w/, c => c.toUpperCase());
//       weekIndexMap[normalized] = idx;
//     });

//     // Fill data array: if week exists in backend, use its value, else null
//     return weekLabels.map(label =>
//       weekIndexMap.hasOwnProperty(label) ? backendData[weekIndexMap[label]] : null
//     );
//   };

//   const getChart = async () => {
//     try {
//       const monthNumber = selectedMonth ? parseInt(selectedMonth, 10) : null;
//       const res = await axios.post(`${BASEURL}/monthby/`, {
//         month: monthNumber,
//       });

//       // Assume backend returns `week` as array of week labels (e.g., ["week 4"])
//       const backendWeeks = (res.data.week || []).map(w =>
//         w.replace(/^\w/, c => c.toUpperCase())
//       );

//       // Generate fixed week labels (e.g., Week 1 to Week 4)
//       const allWeekLabels = generateWeekLabels(5); // Adjust if you have more/fewer weeks
//       setWeekLabels(allWeekLabels);

//       // Align each dataset
//       setAlignedData({
//         AQUATIC_MACROPYTES: alignDataToWeeks(allWeekLabels, backendWeeks, res.data.AQUATIC_MACROPYTES || []),
//         Chl_a: alignDataToWeeks(allWeekLabels, backendWeeks, res.data.Chl_a || []),
//         Phycocyanin: alignDataToWeeks(allWeekLabels, backendWeeks, res.data.Phycocyanin || []),
//         dissolved_oxygen: alignDataToWeeks(allWeekLabels, backendWeeks, res.data.dissolved_oxygen || []),
//         GCI: alignDataToWeeks(allWeekLabels, backendWeeks, res.data.GCI || []),
//       });

//     } catch (error) {
//       console.log("Data not found");
//       setWeekLabels(generateWeekLabels(4));
//       setAlignedData({
//         AQUATIC_MACROPYTES: [null, null, null, null],
//         Chl_a: [null, null, null, null],
//         Phycocyanin: [null, null, null, null],
//         dissolved_oxygen: [null, null, null, null],
//         GCI: [null, null, null, null],
//       });
//     }
//   };

//   const handleMonthChange = (e) => {
//     setSelectedMonth(e.target.value);
//   };

//   useEffect(() => {
//     if (selectedMonth) {
//       getChart();
//     }
//   }, [selectedMonth]);

//   return (
//     <div>
//       <div className="relative inline-block text-left left-8 top-6">
//         <select
//           name="month"
//           id="month"
//           className="p-2 border-spacing-1 border-collapse"
//           value={selectedMonth}
//           onChange={handleMonthChange}
//         >
//           <option value="">Select Month</option>
//           {Array.from({ length: 12 }, (_, i) => (
//             <option key={i + 1} value={i + 1}>
//               {new Date(0, i).toLocaleString("default", { month: "long" })}
//             </option>
//           ))}
//         </select>
//       </div>

//       <div className="mt-4">
//         {activeChart === 'divOne' ? (
//           <div className="max-w-full w-full lg:max-w-full lg:flex mt-4">
//             <div className="p-0 md:p-4 w-full flex gap-4 justify-around flex-col md:flex-row" style={{ backgroundColor: '#f2f2f2' }}>
//               <div className="flex flex-col w-full md:w-6/12 gap-4">

//                 {/* AQUATIC MACROPHYTES */}
//                 <div className="p-3 shadow-lg shadow-gray-500/50 bg-gray-100">
//                   <hr className="w-full" />
//                   <ChartComponent title="AQUATIC MACROPHYTES Chart" data={alignedData.AQUATIC_MACROPYTES} labels={weekLabels} />
//                   <div className="group relative flex">
//                     {/* ... Info Tooltip ... */}
//                   </div>
//                 </div>

//                 {/* CHLOROPHYLL */}
//                 <div className="p-3 bg-gray-100 shadow-lg shadow-gray-500/50">
//                   <hr className="w-full" />
//                   <ChartComponent title="Chlorophyll Chart" data={alignedData.Chl_a} labels={weekLabels} />
//                   <div className="group relative flex">
//                     {/* ... Info Tooltip ... */}
//                   </div>
//                 </div>
//               </div>

//               <div className="flex flex-col w-full md:w-6/12 gap-4">

//                 {/* PHYCOCYANIN */}
//                 <div className="p-3 bg-gray-100 shadow-lg shadow-gray-500/50">
//                   <hr className="w-full" />
//                   <ChartComponent title="Phycocyanin Chart" data={alignedData.Phycocyanin} labels={weekLabels} />
//                   <div className="group relative flex">
//                     {/* ... Info Tooltip ... */}
//                   </div>
//                 </div>

//                 {/* DISSOLVED OXYGEN */}
//                 <div className="p-3 bg-gray-100 shadow-lg shadow-gray-500/50">
//                   <hr className="w-full" />
//                   <ChartComponent title="Dissolved Oxygen Chart" data={alignedData.dissolved_oxygen} labels={weekLabels} />
//                   <div className="group relative flex">
//                     {/* ... Info Tooltip ... */}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ) : (
//           <div className="max-w-full w-full lg:max-w-full lg:flex bg-white mt-4 md:p-8">
//             <div className="p-0 md:p-4 w-full flex gap-4 justify-around flex-col md:flex-row" style={{ backgroundColor: '#f2f2f2' }}>
//               <div className="flex flex-col w-full md:w-6/12 gap-4">
//                 {/* ORP */}
//                 <div className="p-3 bg-gray-100 shadow-lg shadow-gray-500/50">
//                   <hr className="w-full" />
//                   <ChartComponent title="ORP Chart" data={alignedData.GCI} labels={weekLabels} />
//                   <div className="group relative flex">
//                     {/* ... Info Tooltip ... */}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default PondGraph;




import React, { useState, useEffect } from "react";
import axios from "axios";
import ChartComponent from "./ChartComponents";

const PondGraph = () => {
  // const id = localStorage.getItem('id');
  const BASEURL = import.meta.env.VITE_BASE_URL;

  const [activeChart, setActiveChart] = useState("divOne");
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [weekLabels, setWeekLabels] = useState([]);
  const [alignedData, setAlignedData] = useState({
    AQUATIC_MACROPYTES: [],
    Chl_a: [],
    Phycocyanin: [],
    dissolved_oxygen: [],
  });

  // Helper to generate week labels for a month (assume 4 weeks)
  const generateWeekLabels = (numWeeks = 5) => {
    return Array.from({ length: numWeeks }, (_, i) => `Week ${i + 1}`);
  };

  // Align data to week labels
  const alignDataToWeeks = (weekLabels, backendWeeks, backendData) => {
    // Map week name to its index from backend
    const weekIndexMap = {};
    backendWeeks.forEach((w, idx) => {
      // Normalize week label (e.g., "week 4" or "Week 4" to "Week 4")
      const normalized = w.replace(/^\w/, c => c.toUpperCase());
      weekIndexMap[normalized] = idx;
    });

    // Fill data array: if week exists in backend, use its value, else null
    return weekLabels.map(label =>
      weekIndexMap.hasOwnProperty(label) ? backendData[weekIndexMap[label]] : null
    );
  };

  const getChart = async () => {
    try {
      const monthNumber = selectedMonth ? parseInt(selectedMonth, 10) : null;
      const yearNumber = selectedYear ? parseInt(selectedYear, 10) : null;
      const res = await axios.post(`${BASEURL}/monthby/`, {
        month: monthNumber,
        year: yearNumber,
      });

      console.log("Selected Month:", monthNumber, "Selected Year:", yearNumber);
console.log("API Response:", res.data);

      // Assume backend returns `week` as array of week labels (e.g., ["week 4"])
      const backendWeeks = (res.data.week || []).map(w =>
        w.replace(/^\w/, c => c.toUpperCase())
      );

      // Generate fixed week labels (e.g., Week 1 to Week 5)
      const allWeekLabels = generateWeekLabels(5); // Adjust if you have more/fewer weeks
      setWeekLabels(allWeekLabels);

      // Align each dataset
      setAlignedData({
        AQUATIC_MACROPYTES: alignDataToWeeks(allWeekLabels, backendWeeks, res.data.AQUATIC_MACROPYTES || []),
        Chl_a: alignDataToWeeks(allWeekLabels, backendWeeks, res.data.Chl_a || []),
        Phycocyanin: alignDataToWeeks(allWeekLabels, backendWeeks, res.data.Phycocyanin || []),
        dissolved_oxygen: alignDataToWeeks(allWeekLabels, backendWeeks, res.data.dissolved_oxygen || []),
        GCI: alignDataToWeeks(allWeekLabels, backendWeeks, res.data.GCI || []),
      });

    } catch (error) {
      console.log("Data not found");
      setWeekLabels(generateWeekLabels(5));
      setAlignedData({
        AQUATIC_MACROPYTES: [null, null, null, null],
        Chl_a: [null, null, null, null],
        Phycocyanin: [null, null, null, null],
        dissolved_oxygen: [null, null, null, null],
        GCI: [null, null, null, null],
      });
    }
  };

  const handleMonthChange = (e) => {
    setSelectedMonth(e.target.value);
  };

  const handleYearChange = (e) => {
    setSelectedYear(e.target.value);
  };

  useEffect(() => {
    if (selectedMonth && selectedYear) {
      getChart();
    }
  }, [selectedMonth, selectedYear]);

  return (
    <div>
      <div className="relative inline-block text-left left-8 top-6 flex gap-4 items-center">
        <select
          name="month"
          id="month"
          className="p-2 border-spacing-1 border-collapse"
          value={selectedMonth}
          onChange={handleMonthChange}
        >
          <option value="">Select Month</option>
          {Array.from({ length: 12 }, (_, i) => (
            <option key={i + 1} value={i + 1}>
              {new Date(0, i).toLocaleString("default", { month: "long" })}
            </option>
          ))}
        </select>

        <select
          name="year"
          id="year"
          className="p-2 border-spacing-1 border-collapse"
          value={selectedYear}
          onChange={handleYearChange}
        >
          <option value="">Select Year</option>
          {[2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030].map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-4">
        {activeChart === 'divOne' ? (
          <div className="max-w-full w-full lg:max-w-full lg:flex mt-4">
            <div className="p-0 md:p-4 w-full flex gap-4 justify-around flex-col md:flex-row" style={{ backgroundColor: '#f2f2f2' }}>
              <div className="flex flex-col w-full md:w-6/12 gap-4">

                {/* AQUATIC MACROPHYTES */}
                <div className="p-3 shadow-lg shadow-gray-500/50 bg-gray-100">
                  <hr className="w-full" />
                  <ChartComponent title="AQUATIC MACROPHYTES" data={alignedData.AQUATIC_MACROPYTES} labels={weekLabels} />
                  <div className="group relative flex">
                    {/* ... Info Tooltip ... */}
                  </div>
                </div>

                {/* CHLOROPHYLL */}
                <div className="p-3 bg-gray-100 shadow-lg shadow-gray-500/50">
                  <hr className="w-full" />
                  <ChartComponent title="Chlorophyll" data={alignedData.Chl_a} labels={weekLabels} />
                  <div className="group relative flex">
                    {/* ... Info Tooltip ... */}
                  </div>
                </div>
              </div>

              <div className="flex flex-col w-full md:w-6/12 gap-4">

                {/* PHYCOCYANIN */}
                <div className="p-3 bg-gray-100 shadow-lg shadow-gray-500/50">
                  <hr className="w-full" />
                  <ChartComponent title="Phycocyanin" data={alignedData.Phycocyanin} labels={weekLabels} />
                  <div className="group relative flex">
                    {/* ... Info Tooltip ... */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="max-w-full w-full lg:max-w-full lg:flex bg-white mt-4 md:p-8">
            <div className="p-0 md:p-4 w-full flex gap-4 justify-around flex-col md:flex-row" style={{ backgroundColor: '#f2f2f2' }}>
              <div className="flex flex-col w-full md:w-6/12 gap-4">
                {/* ORP */}
                <div className="p-3 bg-gray-100 shadow-lg shadow-gray-500/50">
                  <hr className="w-full" />
                  <ChartComponent title="ORP Chart" data={alignedData.GCI} labels={weekLabels} />
                  <div className="group relative flex">
                    {/* ... Info Tooltip ... */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PondGraph;