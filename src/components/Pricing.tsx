// // import React from 'react';

// // import config from '../config/index.json';

// // const Pricing = () => {
// //   const { pricing } = config;
// //   const { items, title } = pricing;
// //   const [firstPlan, secondPlan, thirdPlan] = items;

// //   return (
// //     <section className={`bg-background py-8`} id="pricing">
// //       <div className={`container mx-auto px-2 pt-4 pb-12 text-primary`}>
// //         <h1
// //           className={`w-full my-2 text-5xl font-bold leading-tight text-center text-primary`}
// //         >
// //           {title}
// //         </h1>
// //         <div className={`w-full mb-4`}>
// //           <div
// //             className={`h-1 mx-auto bg-primary w-64 opacity-25 my-0 py-0 rounded-t`}
// //           ></div>
// //         </div>
// //         <div
// //           className={`flex flex-col sm:flex-row justify-center pt-12 my-12 sm:my-4`}
// //         >
// //           <div
// //             className={`flex flex-col w-5/6 lg:w-1/4 mx-auto lg:mx-0 rounded-none lg:rounded-l-lg bg-background mt-4`}
// //           >
// //             <div
// //               className={`flex-1 bg-background text-gray-600 rounded-t rounded-b-none overflow-hidden shadow`}
// //             >
// //               <div className={`p-8 text-3xl font-bold text-center border-b-4`}>
// //                 {firstPlan?.name}
// //               </div>
// //               <ul className={`w-full text-center text-sm`}>
// //                 {firstPlan?.features.map((feature) => (
// //                   <li
// //                     className={`border-b py-4`}
// //                     key={`${firstPlan.name}-${feature}`}
// //                   >
// //                     {feature}
// //                   </li>
// //                 ))}
// //               </ul>
// //             </div>
// //             <div
// //               className={`flex-none mt-auto bg-background rounded-b rounded-t-none overflow-hidden shadow p-6`}
// //             >
// //               <div
// //                 className={`w-full pt-6 text-3xl text-gray-600 font-bold text-center`}
// //               >
// //                 {firstPlan?.price}
// //                 <span className={`text-base`}> {firstPlan?.priceDetails}</span>
// //               </div>
// //             </div>
// //           </div>
// //           <div
// //             className={`flex flex-col w-5/6 lg:w-1/3 mx-auto lg:mx-0 rounded-lg bg-background mt-4 sm:-mt-6 shadow-lg z-10`}
// //           >
// //             <div
// //               className={`flex-1 bg-background rounded-t rounded-b-none overflow-hidden shadow`}
// //             >
// //               <div className={`w-full p-8 text-3xl font-bold text-center`}>
// //                 {secondPlan?.name}
// //               </div>
// //               <div
// //                 className={`h-1 w-full bg-primary my-0 py-0 rounded-t`}
// //               ></div>
// //               <ul className={`w-full text-center text-base font-bold`}>
// //                 {secondPlan?.features.map((feature) => (
// //                   <li
// //                     className={`border-b py-4`}
// //                     key={`${secondPlan?.name}-${feature}`}
// //                   >
// //                     {feature}
// //                   </li>
// //                 ))}
// //               </ul>
// //             </div>
// //             <div
// //               className={`flex-none mt-auto bg-background rounded-b rounded-t-none overflow-hidden shadow p-6`}
// //             >
// //               <div className={`w-full pt-6 text-4xl font-bold text-center`}>
// //                 {secondPlan?.price}
// //                 <span className={`text-base`}> {secondPlan?.priceDetails}</span>
// //               </div>
// //             </div>
// //           </div>
// //           <div
// //             className={`flex flex-col w-5/6 lg:w-1/4 mx-auto lg:mx-0 rounded-none lg:rounded-l-lg bg-primary mt-4`}
// //           >
// //             <div
// //               className={`flex-1 bg-background text-gray-600 rounded-t rounded-b-none overflow-hidden shadow`}
// //             >
// //               <div className={`p-8 text-3xl font-bold text-center border-b-4`}>
// //                 {thirdPlan?.name}
// //               </div>
// //               <ul className={`w-full text-center text-sm`}>
// //                 {thirdPlan?.features.map((feature) => (
// //                   <li
// //                     className={`border-b py-4`}
// //                     key={`${thirdPlan?.name}-${feature}`}
// //                   >
// //                     {feature}
// //                   </li>
// //                 ))}
// //               </ul>
// //             </div>
// //             <div
// //               className={`flex-none mt-auto bg-background rounded-b rounded-t-none overflow-hidden shadow p-6`}
// //             >
// //               <div
// //                 className={`w-full pt-6 text-3xl text-gray-600 font-bold text-center`}
// //               >
// //                 {thirdPlan?.price}
// //                 <span className={`text-base`}> {thirdPlan?.priceDetails}</span>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default Pricing;

// import React from 'react';

// import ReactGA from 'react-ga4';

// import config from '../config/index.json';

// const Pricing = () => {
//   const { packages } = config;
//   const { items, title } = packages;
//   const [firstPlan, secondPlan, thirdPlan] = items;

//   const handleClick = (platform) => {
//     ReactGA.event({
//       category: 'Social Links',
//       action: 'Click',
//       label: platform,
//     });
//   };

//   if (!firstPlan || !secondPlan || !thirdPlan) {
//     return <div>Loading plans...</div>;
//   }

//   return (
//     <div
//       className="max-w-4xl mx-auto my-10 p-5 bg-white shadow-lg rounded-lg"
//       id="Pricing"
//     >
//       <h1 className="text-3xl font-bold text-center text-gray-900 my-6">
//         {title}
//       </h1>

//       <table className="table-fixed w-full">
//         <thead>
//           <tr className="bg-gray-100">
//             <th className="w-1/4 py-3 px-2 text-left text-sm font-semibold text-gray-600 uppercase">
//               Attributes / Bundles
//             </th>
//             <th className="w-1/4 py-3 px-2 text-left text-sm font-semibold text-gray-600 uppercase">
//               {firstPlan.name}
//             </th>
//             <th className="w-1/4 py-3 px-2 text-left text-sm font-semibold text-gray-600 uppercase">
//               {secondPlan.name}
//             </th>
//             <th className="w-1/4 py-3 px-2 text-left text-sm font-semibold text-gray-600 uppercase">
//               {thirdPlan.name}
//             </th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td>Financial Support</td>
//             <td>{firstPlan.financialSupport}</td>
//             <td>{secondPlan.financialSupport}</td>
//             <td>{thirdPlan.financialSupport}</td>
//           </tr>
//           <tr>
//             <td>Commitment Period</td>
//             <td>{firstPlan.commitmentPeriod}</td>
//             <td>{secondPlan.commitmentPeriod}</td>
//             <td>{thirdPlan.commitmentPeriod}</td>
//           </tr>
//           <tr>
//             <td>Professional Opportunities</td>
//             <td>{firstPlan.professionalOpportunities.join(', ')}</td>
//             <td>{secondPlan.professionalOpportunities.join(', ')}</td>
//             <td>{thirdPlan.professionalOpportunities.join(', ')}</td>
//           </tr>
//           <tr>
//             <td>Academic Opportunities</td>
//             <td>{firstPlan.academicOpportunities.join(', ')}</td>
//             <td>{secondPlan.academicOpportunities.join(', ')}</td>
//             <td>{thirdPlan.academicOpportunities.join(', ')}</td>
//           </tr>
//           <tr>
//             <td>Additional Incentives</td>
//             <td>{firstPlan.additionalIncentives.join(', ')}</td>
//             <td>{secondPlan.additionalIncentives.join(', ')}</td>
//             <td>{thirdPlan.additionalIncentives.join(', ')}</td>
//           </tr>
//         </tbody>
//       </table>

//       <div className="mt-8">
//         {items.map((plan, index) => (
//           <div key={index} className="bg-white p-4 rounded-lg shadow-md mb-6">
//             <h3 className="font-semibold text-xl text-gray-800">
//               {plan.name} Details
//             </h3>
//             <p className="text-gray-600 mt-2">{plan.details}</p>
//             <a
//               href="#cvUploadForm"
//               className="inline-block mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300 ease-in-out"
//               onClick={() => handleClick('Apply Now')}
//             >
//               Apply Now
//             </a>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };
// export default Pricing;

import React from 'react';

import ReactGA from 'react-ga4';

import config from '../config/index.json';

const Pricing = () => {
  const { packages } = config;
  const { items, title } = packages;
  const [firstPlan, secondPlan, thirdPlan] = items;

  const handleClick = (platform) => {
    ReactGA.event({
      category: 'Social Links',
      action: 'Click',
      label: platform,
    });
  };

  if (!firstPlan || !secondPlan || !thirdPlan) {
    return <div>Loading plans...</div>;
  }

  return (
    <div
      className="max-w-6xl mx-auto my-16 p-8 bg-background shadow-2xl rounded-lg border border-border transition-shadow duration-300 ease-in-out hover:shadow-3xl"
      id="Pricing"
    >
      <h1 className="text-4xl font-bold text-center text-primary my-8">
        {title}
      </h1>

      <div className="overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-tertiary text-left">
              <th className="py-4 px-6 text-sm font-semibold text-secondary uppercase">
                Attributes / Bundles
              </th>
              <th className="py-4 px-6 text-sm font-semibold text-secondary uppercase">
                {firstPlan.name}
              </th>
              <th className="py-4 px-6 text-sm font-semibold text-secondary uppercase">
                {secondPlan.name}
              </th>
              <th className="py-4 px-6 text-sm font-semibold text-secondary uppercase">
                {thirdPlan.name}
              </th>
            </tr>
          </thead>
          <tbody className="bg-background divide-y divide-tertiary">
            <tr>
              <td className="py-4 px-6 font-medium text-secondary">
                Financial Support
              </td>
              <td className="py-4 px-6">{firstPlan.financialSupport}</td>
              <td className="py-4 px-6">{secondPlan.financialSupport}</td>
              <td className="py-4 px-6">{thirdPlan.financialSupport}</td>
            </tr>
            <tr>
              <td className="py-4 px-6 font-medium text-secondary">
                Commitment Period
              </td>
              <td className="py-4 px-6">{firstPlan.commitmentPeriod}</td>
              <td className="py-4 px-6">{secondPlan.commitmentPeriod}</td>
              <td className="py-4 px-6">{thirdPlan.commitmentPeriod}</td>
            </tr>
            <tr>
              <td className="py-4 px-6 font-medium text-secondary">
                Professional Opportunities
              </td>
              <td className="py-4 px-6">
                {firstPlan.professionalOpportunities.join(', ')}
              </td>
              <td className="py-4 px-6">
                {secondPlan.professionalOpportunities.join(', ')}
              </td>
              <td className="py-4 px-6">
                {thirdPlan.professionalOpportunities.join(', ')}
              </td>
            </tr>
            <tr>
              <td className="py-4 px-6 font-medium text-secondary">
                Academic Opportunities
              </td>
              <td className="py-4 px-6">
                {firstPlan.academicOpportunities.join(', ')}
              </td>
              <td className="py-4 px-6">
                {secondPlan.academicOpportunities.join(', ')}
              </td>
              <td className="py-4 px-6">
                {thirdPlan.academicOpportunities.join(', ')}
              </td>
            </tr>
            <tr>
              <td className="py-4 px-6 font-medium text-secondary">
                Additional Incentives
              </td>
              <td className="py-4 px-6">
                {firstPlan.additionalIncentives.join(', ')}
              </td>
              <td className="py-4 px-6">
                {secondPlan.additionalIncentives.join(', ')}
              </td>
              <td className="py-4 px-6">
                {thirdPlan.additionalIncentives.join(', ')}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((plan, index) => (
          <div
            key={index}
            className="bg-background p-6 rounded-lg shadow-lg border border-tertiary hover:shadow-2xl transition-shadow duration-300 ease-in-out"
          >
            <h3 className="font-semibold text-2xl text-secondary">
              {plan.name} Details
            </h3>
            <p className="text-tertiary mt-4">{plan.details}</p>
            <a
              href="#cvUploadForm"
              className="inline-block mt-6 bg-primary hover:bg-secondary text-white font-bold py-2 px-6 rounded transition-colors duration-300 ease-in-out"
              onClick={() => handleClick('Apply Now')}
            >
              Apply Now
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Pricing;

// return (
//   <section className="bg-background py-8" id="pricing">
//     <div className="container mx-auto px-2 pt-4 pb-12 text-primary">
//       <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-primary">
//         {title}
//       </h1>
//       <div className="w-full mb-4">
//         <div className="h-1 mx-auto bg-primary w-64 opacity-25 my-0 py-0 rounded-t"></div>
//       </div>
//       <div className="flex flex-col sm:flex-row justify-center pt-12 my-12 sm:my-4">
//         {items.map((plan, index) => (
//           <div key={index} className={`flex flex-col w-5/6 lg:w-1/${items.length + 1} mx-auto lg:mx-0 rounded-lg bg-background mt-4 sm:-mt-6 shadow-lg z-10`}>
//             <div className="flex-1 bg-background text-gray-600 rounded-t rounded-b-none overflow-hidden shadow">
//               <div className="p-8 text-3xl font-bold text-center">
//                 {plan.name}
//               </div>
//               <div className="h-1 w-full bg-primary my-0 py-0 rounded-t"></div>
//               <ul className="w-full text-center text-base font-bold">
//                 {Object.entries(plan).filter(([key, _]) => key !== 'name' && key !== 'details').map(([key, value]) => (
//                   <li key={`${plan.name}-${key}`} className="border-b py-4">
//                     {key.replace(/([A-Z])/g, ' $1').trim()}: {Array.isArray(value) ? value.join(', ') : value}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//             <div className="flex-none mt-auto bg-background rounded-b rounded-t-none overflow-hidden shadow p-6">
//               <div className="w-full pt-6 text-3xl text-gray-600 font-bold text-center">
//                 {/* Placeholder for potential pricing or details */}
//                 {plan.details}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   </section>
// );
// }
