import React from 'react';

import { Link } from 'react-scroll';

import Divider from './Divider';
import config from '../config/index.json';

const Product = () => {
  const { product } = config;
  const [firstItem, secondItem, thirdItem, fourthItem, fifthItem] =
    product.items;

  const renderProductItem = (item, isReversed) => (
    <div
      className={`flex flex-wrap ${
        isReversed ? 'flex-col-reverse sm:flex-row' : ''
      }`}
    >
      <div className={`w-full sm:w-1/2 p-6 ${!isReversed && 'mt-20'}`}>
        {isReversed ? (
          <img className="h-6/6" src={item.img} alt={item.title} />
        ) : (
          <>
            <h3
              className={`text-3xl text-gray-800 font-bold leading-none mb-3`}
            >
              {item.title}
            </h3>
            <p className={`text-gray-600 mb-8`}>{item.description}</p>
            <div className="mt-5">
              <Link
                to="form"
                smooth={true}
                duration={500}
                className={`w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-background bg-primary hover:bg-border hover:text-primary md:py-4 md:text-lg md:px-10`}
              >
                Tell me more
              </Link>
            </div>
          </>
        )}
      </div>
      <div className={`w-full sm:w-1/2 p-6 ${isReversed ? 'mt-20' : ''}`}>
        {!isReversed ? (
          <img className="h-6/6" src={item.img} alt={item.title} />
        ) : (
          <>
            <h3
              className={`text-3xl text-gray-800 font-bold leading-none mb-3`}
            >
              {item.title}
            </h3>
            <p className={`text-gray-600 mb-8`}>{item.description}</p>
            <div className="mt-5">
              <Link
                to="form"
                smooth={true}
                duration={500}
                className={`w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-background bg-primary hover:bg-border hover:text-primary md:py-4 md:text-lg md:px-10`}
              >
                Tell me more
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );

  return (
    <section className={`bg-background py-8`} id="product">
      <div className={`container max-w-5xl mx-auto m-8`}>
        <h1
          className={`w-full my-2 text-5xl font-bold leading-tight text-center text-primary`}
        >
          {product.title.split(' ').map((word, index) => (
            <span
              key={index}
              className={index % 2 ? 'text-primary' : 'text-border'}
            >
              {word}{' '}
            </span>
          ))}
        </h1>
        <Divider />
        {renderProductItem(firstItem, false)}
        {renderProductItem(secondItem, true)}
        {renderProductItem(thirdItem, false)}
        {renderProductItem(fourthItem, true)}
        {renderProductItem(fifthItem, false)}
      </div>
    </section>
  );
};

export default Product;
