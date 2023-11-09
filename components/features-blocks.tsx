// export default function FeaturesBlocks() {
//   return (
//     <section className="relative">
//       <div id="speakers">
//         <div className="flex flex-wrap justify-center">
//           <div className="w-64 rounded overflow-hidden shadow-lg bg-white m-2 transform hover:scale-105 transition duration-300">
//             {/* <img className="w-full h-48 object-cover" src="image1.jpg" alt="Card Image"> */}
//               <div className="px-6 py-4">
//                 <div className="font-bold text-xl mb-2">Card Title 1</div>
//                 <p className="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//               </div>
//           </div>
//           <div className="w-64 rounded overflow-hidden shadow-lg bg-white m-2 transform hover:scale-105 transition duration-300">
//             {/* <img className="w-full h-48 object-cover" src="image2.jpg" alt="Card Image"> */}
//               <div className="px-6 py-4">
//                 <div className="font-bold text-xl mb-2">Card Title 2</div>
//                 <p className="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//               </div>
//           </div>
//           <div className="w-64 rounded overflow-hidden shadow-lg bg-white m-2 transform hover:scale-105 transition duration-300">
//             {/* <img className="w-full h-48 object-cover" src="image3.jpg" alt="Card Image"> */}
//               <div className="px-6 py-4">
//                 <div className="font-bold text-xl mb-2">Card Title 3</div>
//                 <p className="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//               </div>
//           </div>
//           <div className="w-64 rounded overflow-hidden shadow-lg bg-white m-2 transform hover:scale-105 transition duration-300">
//             {/* <img className="w-full h-48 object-cover" src="image4.jpg" alt="Card Image"> */}
//               <div className="px-6 py-4">
//                 <div className="font-bold text-xl mb-2">Card Title 4</div>
//                 <p className="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//               </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

import React from 'react';
import Card from './ui/Card';

const FeaturesBlocks: React.FC = () => {
  const cards = [
    {
      id: 1,
      imageUrl: '/images/speakers/3)Alex-Zinder.png',
      title: 'Alex Zinder',
      description: 'Ledger Enterprise'
    },
    {
      id: 2,
      imageUrl: '/images/speakers/9)Dina-Saman.png',
      title: "Dina Sam'an",
      description: 'CoinMENA'
    },
    {
      id: 3,
      imageUrl: '/images/speakers/4)Gracy-Chen.png',
      title: 'Gracy Chen',
      description: 'Bitget'
    },
    {
      id: 4,
      imageUrl: '/images/speakers/2)Helen-Hai.png',
      title: 'Helen Hai',
      description: 'Binance'
    },
    {
      id: 5,
      imageUrl: '/images/speakers/12)Jason-Allegrante.png',
      title: 'Jason Allegrante',
      description: 'Fireblocks'
    },
    {
      id: 6,
      imageUrl: '/images/speakers/10)Jean-Charles-Gaudechon.png',
      title: 'Jean Charles-Gaudechon',
      description: 'OneFootball Labs'
    },
    {
      id: 7,
      imageUrl: '/images/speakers/6)Max-Kordek.png',
      title: 'Max Kordek',
      description: 'Lisk'
    },
    {
      id: 8,
      imageUrl: '/images/speakers/5)Mohammed-Alblooshi.png',
      title: 'Mohammed Alblooshi',
      description: 'Dubai International Financial Centre Authority'
    },
    {
      id: 9,
      imageUrl: '/images/speakers/7)Nena-Dokuzov.png',
      title: 'Nena Dokuzov',
      description: 'Alserkal Group'
    },
    {
      id: 10,
      imageUrl: '/images/speakers/11)Nicole-Purin.png',
      title: 'Nicole Purin',
      description: 'OKX'
    },
    {
      id: 11,
      imageUrl: '/images/speakers/8)Reece-Merrick.png',
      title: 'Reece Merrick',
      description: 'Ripple'
    },
    {
      id: 12,
      imageUrl: '/images/speakers/1)Sunny-Lu.png',
      title: 'Sunny Lu',
      description: 'Vechain'
    },

  ];

  return (
    <div id="speakers">

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h2 className="h2 mb-4">Speakers</h2>
          </div>
          <div className="flex flex-wrap justify-center">
            {cards.map((card) => (
              <Card
                key={card.id}
                imageUrl={card.imageUrl}
                title={card.title}
                description={card.description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>

  );
};

export default FeaturesBlocks;