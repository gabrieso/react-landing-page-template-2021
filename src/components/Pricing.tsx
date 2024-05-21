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
      className="max-w-6xl mx-auto my-16 p-8 bg-white shadow-2xl rounded-lg border border-border transition-shadow duration-300 ease-in-out hover:shadow-3xl"
      id="Pricing"
    >
      <h1 className="text-4xl font-bold text-center text-primary my-8">
        {title}
      </h1>

      <div className="overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-white  text-left">
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
            className="bg-white p-6 rounded-lg shadow-lg border border-tertiary hover:shadow-2xl transition-shadow duration-300 ease-in-out"
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
