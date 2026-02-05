import React from 'react'
import { Link } from 'react-router-dom';
import menCollectionImage from "../../assets/mens-collection.webp";
import womensCollectionImage from "../../assets/womens-collection.webp"
const GenderCollectionSection = () => {
  return (
    <section className='py-16 px-4 lg:px-0'>
        <div className='container mx-auto flex flex-col md:flex-row gap-8'>
          {/* women collection*/}
              <div className='relative flex-1'>
                <img src={womensCollectionImage} alt="women's collection" className='w-full h-[700px] object-cover' />
                <div className='absolute bottom-8 left-8 bg-white/60 rounded-2xl p-4'>
                <h2 className='text-2xl font-bold  text-gray-900 mb-1'>Women's Collections</h2>
                <Link to="/collections/all?gender=women" className="text-gray-900 underline">Shop Now</Link>
                </div>
              </div>
          {/* men */}
           <div className='relative flex-1'>
                <img src={menCollectionImage} alt="men's collection" className='w-full h-[700px] object-cover' />
                <div className='absolute bottom-8 left-8 bg-white/60 rounded-2xl p-4'>
                <h2 className='text-2xl font-bold  text-gray-900 mb-1'>men's Collections</h2>
                <Link to="/collections/all?gender=men" className="text-gray-900 underline">Shop Now</Link>
                </div>
              </div>
        </div>
            
    </section>
  )
}

export default GenderCollectionSection