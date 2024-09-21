import React from 'react';

const Carousel = ({ data }) => {
    // console.log(data);

    const roomPhotos = data

    return (
        <div className="carousel w-full">
            {roomPhotos?.map((img, index) => (
                <div key={index} id={`slide${index + 1}`} className="carousel-item relative w-full">
                    <img src={img} className=" skeleton w-full h-80" alt={`Slide ${index + 1}`} />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        {/* Previous button */}
                        <a
                            href={`#slide${(index === 0 ? roomPhotos.length - 1 : index - 1) + 1}`}
                            className="btn btn-circle"
                        >
                            ❮
                        </a>
                        {/* Next button */}
                        <a
                            href={`#slide${(index === roomPhotos.length - 1 ? 0 : index + 1) + 1}`}
                            className="btn btn-circle"
                        >
                            ❯
                        </a>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Carousel;
