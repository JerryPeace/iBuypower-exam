import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa6';
import { Computer } from 'types/computer';
import { NEXT_PUBLIC_BASE_PATH } from '@@configs';

const SliderComp = ({ data }: { data: Computer[] }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [viewSlidePerShow, setSlidePerShow] = useState(4);
  let sliderRef = useRef<Slider | null>(null);
  const next = () => sliderRef.current?.slickNext();
  const previous = () => sliderRef.current?.slickPrev();
  const settings = {
    centerPadding: '0',
    slidesToShow: viewSlidePerShow,
    initialSlide: 0,
    swipeToSlide: true,
    infinite: false,
  };

  useEffect(() => {
    const updateView = () => {
      setSlidePerShow(window.innerWidth <= 640 ? 1 : 4);
    };
    updateView();
    window.addEventListener('resize', updateView);
    return () => window.removeEventListener('resize', updateView);
  }, []);

  return (
    <div>
      <div className="text-right">
        <button
          disabled={currentSlide === 0}
          className="btn btn-outline mx-1 shadow-md border-gray-300"
          onClick={previous}
        >
          <FaAngleLeft className="text-2xl" />
        </button>
        <button
          disabled={currentSlide === (data.length - viewSlidePerShow)}
          className="btn btn-outline mx-1 shadow-md border-gray-300"
          onClick={next}
        >
          <FaAngleRight className="text-2xl" />
        </button>
      </div>
      <div className="slider-container">
        <Slider
          ref={(slider) => {
            sliderRef.current = slider;
          }}
          beforeChange={(_, nextSlide: number) => setCurrentSlide(nextSlide)}
          {...settings}
        >
          {data.map((computer: Computer, index) => (
            <div key={index}>
              <div className="card bg-white shadow-md rounded-lg border m-2 border-gray-200">
                <div className="p-5">
                  <div className="items-center mb-2">
                    <span className="border border-gray-400 text-gray-400 font-bold py-1 px-2 rounded-full text-xs mb-4">
                      {computer.type === 'prebuilt' ? 'Prebuilt PC' : 'Custom PC'}
                    </span>
                  </div>
                  <div className="w-auto h-60 my-5 relative">
                    <Image
                      src={NEXT_PUBLIC_BASE_PATH + computer.image}
                      alt={computer.name}
                      fill
                      priority
                      sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
                      style={{ objectFit: 'contain' }}
                    />
                  </div>
                  <h2 className="text-md font-bold mb-6 truncate">{computer.name}</h2>
                  <ul className="space-y-2 mb-1">
                    <li className="text-xs text-gray-500">{computer.os}</li>
                    <li className="text-xs text-gray-500">{computer.cpu}</li>
                    <li className="text-xs text-gray-500">{computer.gpu}</li>
                    <li className="text-xs text-gray-500">{computer.storage}</li>
                    <li className="text-xs text-gray-500">{computer.ram}</li>
                  </ul>
                </div>
                <div className="w-full bg-gray-100 p-5">
                  <div className="mb-4">
                    <span className="text-sm text-white bg-red-500 p-2 rounded-2xl">
                      SAVE ${computer.oldPrice - computer.price}
                    </span>
                  </div>
                  <div className="mb-2">
                    <span className="text-2xl font-bold mr-2">${computer.price}</span>
                    <span className="line-through text-gray-400">${computer.oldPrice}</span>
                  </div>
                  <div className="flex text-sm text-blue-500 mb-6">
                    <span>{`Starting at ${computer.startingAt}/mo with`}</span>
                    <div className="h-5 w-12 mx-1 relative">
                      <Image
                        src={`${NEXT_PUBLIC_BASE_PATH}/svgs/icon-affirm.svg`}
                        alt={'affirm logo'}
                        fill
                        priority
                        style={{ objectFit: 'cover' }}
                        className="rounded"
                      />
                    </div>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <div>
                      <p className="text-sm text-gray-600 font-bold">Free Shipping</p>
                      <p className="text-sm text-gray-600">
                        {`Delivery By ${new Date().toLocaleDateString('en-US', {
                          month: 'long',
                          day: 'numeric',
                        })}`}
                      </p>
                    </div>
                    <button className="border border-red-500 text-red-500 font-bold py-1 px-2 rounded-full hover:bg-red-500 hover:text-white transition duration-300 text-sm">
                      {computer.type === 'prebuilt' ? 'Buy Now' : 'Customize'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SliderComp;
