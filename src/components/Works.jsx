import React from 'react';
import chr from '../assets/chr.png';
import cms from '../assets/cms.png';
import sq from '../assets/souqifyy.png';


const Work = () => {
  return (
    //       <div className='flex flex-col justify-center items-center w-full h-full'>

    <div name='works' className='w-full md:h-screen bg-[#000000]'>
     <div className='max-w-[2000px] mx-auto p-7 flex flex-col justify-center items-center w-full h-full pt-[50px]'>
     <div className='pl-10'>
              <p className='text-4xl font-bold inline border-b-4 border-[#76a2d8] text-gray-300'>My Works</p>
          </div>
    <div className="pl-10 w-full grid grid-cols-1 sm:grid-cols-3 gap-10 text-center py-8">
    <a className="rounded overflow-hidden shadow-md shadow-[#76a2d8] hover:scale-110 duration-500" href='https://github.com/suzanayesh/SouqifyBackEnd' target='_blank' rel="noreferrer">
  <img className="w-[200px] h-[200px] object-cover mx-auto px-5 pt-5 pb-10" src={sq} alt="Souqify"/>
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2 text-[#ccd6f6]">Souqify</div>
    <p className="text-base text-[#8892b0]">
      Souqify (Web and Mobile app)  B2B digital communication platform tailored for the fashion retail industry. It bridges Palestinian retailers with Turkish suppliers, streamlining the ordering process for high-quality products. Souqify enhances the supply chain, simplifying connections, orders, and inventory management for businesses.</p>
  </div>
  <div className="px-6 pt-4 pb-2">
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Angular</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#SpringBoot</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Railway</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#PostGreSql</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Ionic</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Capcitor</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Figma</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#WebScoket</span>
  </div>
</a>

   
    <a className="rounded overflow-hidden shadow-md shadow-[#76a2d8]  hover:scale-110 duration-500" href='https://github.com/salsabeel-alsahory/Content-Management-System-CMS-' target='_blank' rel="noreferrer">
      <img className="w-[200px] h-[200px] object-cover mx-auto px-5 pt-5 pb-10" src={cms} alt="Content Management System"/>
      <div className="px-6 py-4">
        <div className="pt-5 font-bold text-xl mb-2 text-[#ccd6f6]">Content Management System</div>
        <p className="text-base text-[#8892b0]">
        Content Management System (CMS) project, an initiative built after the training program with GSG (Gaza Sky Geeks),designed to handle digital content with ease and efficiency. It allows users to create, manage, and publish content without needing technical knowledge. </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Node.js</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#JavaScript</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Docker</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#XAMPP</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#MySQL</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#CI/CD</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#AWS</span>

        
      </div>
    </a>

    <a className="rounded overflow-hidden shadow-md shadow-[#76a2d8]  hover:scale-110 duration-500" target='_blank' rel="noreferrer">
      <img className="w-[200px] h-[200px] object-cover mx-auto px-5 pt-5 pb-10" src={chr} alt='Charegli'/>
      <div className="px-6 py-4">
        <div className="pt-4 font-bold text-xl mb-2 text-[#ccd6f6]">CHAREGLI</div>
        <p className="text-base text-[#8892b0]">
        I worked as a freelancer on the UX/UI design for Chareigli, a Lebanese company specializing in online game shipping through the purchase of shipping cards. My role involved updating all website screens to enhance user experience and streamline navigation.</p>
      </div>
      <div className="px-6 pt-9 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Figma</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#FigmaCommunity</span>
      </div>
    </a>
  </div>
  </div>
    </div>
  
  );
};

export default Work