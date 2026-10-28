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


import React, { useState, useEffect } from "react";
import axios from "axios";
import ChartComponent from "./ChartComponents";
// import { getMockGraphData } from "../utils/mockData";

const PondGraph = () => {
  const BASEURL = import.meta.env.VITE_BASE_URL;

  const now = new Date();
  const realCurrentMonth = now.getMonth() + 1; // e.g. 10 (October)
  const realCurrentYear = now.getFullYear();

  const [activeChart, setActiveChart] = useState("divOne");
  const [selectedYear, setSelectedYear] = useState(String(realCurrentYear));
  const [selectedMonth, setSelectedMonth] = useState(String(realCurrentMonth));
  const [weekLabels, setWeekLabels] = useState(["Week 1", "Week 2", "Week 3", "Week 4", "Week 5"]);
  const [alignedData, setAlignedData] = useState({
    AQUATIC_MACROPYTES: [],
    Chl_a: [],
    Phycocyanin: [],
  });

  // Available years: 2020 through 2030
  const availableYears = [2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030];

  // Available months: show all 12 months in the dropdown filter
  const availableMonths = Array.from({ length: 12 }, (_, i) => i + 1);

  const generateWeekLabels = (numWeeks = 5) => {
    return Array.from({ length: numWeeks }, (_, i) => `Week ${i + 1}`);
  };

  const alignDataToWeeks = (weekLabels, backendWeeks, backendData) => {
    if (!backendWeeks || !backendWeeks.length || !backendData || !backendData.length) {
      return null;
    }
    const weekIndexMap = {};
    backendWeeks.forEach((w, idx) => {
      const normalized = w.replace(/^\w/, c => c.toUpperCase());
      weekIndexMap[normalized] = idx;
    });

    return weekLabels.map(label =>
      weekIndexMap.hasOwnProperty(label) ? backendData[weekIndexMap[label]] : null
    );
  };

  const getChart = async () => {
    const monthNumber = selectedMonth ? parseInt(selectedMonth, 10) : realCurrentMonth;
    const yearNumber = selectedYear ? parseInt(selectedYear, 10) : realCurrentYear;

    // Check if selected month/year is in the future
    const isFuture = (yearNumber > realCurrentYear) || (yearNumber === realCurrentYear && monthNumber > realCurrentMonth);

    if (isFuture) {
      // Future/advance month: do not display graph lines until that month occurs
      setWeekLabels(generateWeekLabels(5));
      setAlignedData({
        AQUATIC_MACROPYTES: [null, null, null, null, null],
        Chl_a: [null, null, null, null, null],
        Phycocyanin: [null, null, null, null, null],
      });
      return;
    }

    // const mockFallback = getMockGraphData(monthNumber, yearNumber);

    try {
      const res = await axios.post(`${BASEURL}/monthby/`, {
        month: monthNumber,
        year: yearNumber,
      });

      // if (res.data && res.data.week && res.data.week.length > 0) {
      //   const backendWeeks = res.data.week.map(w => w.replace(/^\w/, c => c.toUpperCase()));
      //   const allWeekLabels = generateWeekLabels(5);
      //   setWeekLabels(allWeekLabels);

      //   setAlignedData({
      //     AQUATIC_MACROPYTES: alignDataToWeeks(allWeekLabels, backendWeeks, res.data.AQUATIC_MACROPYTES) || mockFallback.AQUATIC_MACROPYTES,
      //     Chl_a: alignDataToWeeks(allWeekLabels, backendWeeks, res.data.Chl_a) || mockFallback.Chl_a,
      //     Phycocyanin: alignDataToWeeks(allWeekLabels, backendWeeks, res.data.Phycocyanin) || mockFallback.Phycocyanin,
      //   });
      // } else {
      //   setWeekLabels(mockFallback.week);
      //   setAlignedData({
      //     AQUATIC_MACROPYTES: mockFallback.AQUATIC_MACROPYTES,
      //     Chl_a: mockFallback.Chl_a,
      //     Phycocyanin: mockFallback.Phycocyanin,
      //   });
      // }


      if (
        res.data &&
        Array.isArray(res.data.week) &&
        res.data.week.length > 0
      ) {
        const backendWeeks = res.data.week.map((week) =>
          week.replace(/^\w/, (char) => char.toUpperCase())
        );

        const allWeekLabels = generateWeekLabels(5);
        setWeekLabels(allWeekLabels);

        setAlignedData({
          AQUATIC_MACROPYTES: alignDataToWeeks(
            allWeekLabels,
            backendWeeks,
            res.data.AQUATIC_MACROPYTES
          ),
          Chl_a: alignDataToWeeks(
            allWeekLabels,
            backendWeeks,
            res.data.Chl_a
          ),
          Phycocyanin: alignDataToWeeks(
            allWeekLabels,
            backendWeeks,
            res.data.Phycocyanin
          ),
        });
      } else {
        setWeekLabels([]);
        setAlignedData({
          AQUATIC_MACROPYTES: null,
          Chl_a: null,
          Phycocyanin: null,
        });
      }

    }
    catch (error) {
      console.error("Failed to fetch graph data:", error);

      setWeekLabels([]);
      setAlignedData({
        AQUATIC_MACROPYTES: null,
        Chl_a: null,
        Phycocyanin: null,
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
    getChart();
  }, [selectedMonth, selectedYear]);

  return (
    <div>
      <div className="relative inline-block text-left left-8 top-6 flex gap-4 items-center">
        <select
          name="month"
          id="month"
          className="p-2 border-spacing-1 border-collapse bg-white shadow rounded"
          value={selectedMonth}
          onChange={handleMonthChange}
        >
          <option value="">Select Month</option>
          {availableMonths.map((mNum) => (
            <option key={mNum} value={mNum}>
              {new Date(0, mNum - 1).toLocaleString("default", { month: "long" })}
            </option>
          ))}
        </select>

        <select
          name="year"
          id="year"
          className="p-2 border-spacing-1 border-collapse bg-white shadow rounded"
          value={selectedYear}
          onChange={handleYearChange}
        >
          <option value="">Select Year</option>
          {availableYears.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-4">
        <div className="max-w-full w-full lg:max-w-full flex mt-4">
          <div className="p-0 md:p-4 w-full flex gap-4 justify-around flex-col" style={{ backgroundColor: '#f2f2f2' }}>
            <div className="p-0 md:p-4 w-full flex flex-col gap-6 bg-[#f2f2f2]">

              {/* TOP ROW (2 cards) */}
              <div className="flex flex-col md:flex-row gap-4">
                {/* AQUATIC MACROPHYTES */}
                <div className="w-full md:w-1/2 p-3 bg-gray-100 shadow-lg shadow-gray-500/50 rounded-md">
                  <hr className="mb-2" />
                  <ChartComponent
                    title="AQUATIC MACROPHYTES Chart"
                    data={alignedData.AQUATIC_MACROPYTES}
                    labels={weekLabels}
                  />
                </div>

                {/* PHYCOCYANIN */}
                <div className="w-full md:w-1/2 p-3 bg-gray-100 shadow-lg shadow-gray-500/50 rounded-md">
                  <hr className="mb-2" />
                  <ChartComponent
                    title="Phycocyanin Chart"
                    data={alignedData.Phycocyanin}
                    labels={weekLabels}
                  />
                </div>
              </div>

              {/* CENTER ROW (1 card - Chlorophyll) */}
              <div className="flex justify-center">
                <div className="w-full md:w-1/2 p-3 bg-gray-100 shadow-lg shadow-gray-500/50 rounded-md">
                  <hr className="mb-2" />
                  <ChartComponent
                    title="Chlorophyll Chart"
                    data={alignedData.Chl_a}
                    labels={weekLabels}
                  />
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PondGraph;
