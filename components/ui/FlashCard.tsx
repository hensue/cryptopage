'use client'
// import React, { useState } from 'react';

// interface FlashcardProps {
//     question: string;
//     answer: string;
//     imageUrl: string;
//     buttonText: string;
// }

// const Flashcard: React.FC<FlashcardProps> = ({ question, answer, imageUrl, buttonText }) => {
//     const [isFlipped, setIsFlipped] = useState(false);

//     const flipCard = () => {
//         setIsFlipped(!isFlipped);
//     };

//     return (
//         <div className="w-64 h-40 bg-white rounded-lg shadow-md cursor-pointer transform hover:rotate-y-180 transition duration-300">
//             <div className={`h-full flex items-center justify-center backface-hidden ${isFlipped ? 'rotate-y-180' : ''}`}>
//                 <img className="w-48 h-48 object-cover rounded-full" src={imageUrl} alt="Card Image" />
//             </div>
//             <div className={`h-full flex items-center justify-center backface-hidden ${isFlipped ? 'rotate-y-180' : ''}`}>
//                 <div className="text-gray-800 font-bold text-lg">{question}</div>
//                 <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">{buttonText}</button>
//             </div>
//             <div className={`h-full flex items-center justify-center backface-hidden ${isFlipped ? '' : 'rotate-y-180'}`}>
//                 <div className="text-gray-800 font-bold text-lg">{answer}</div>
//             </div>
//         </div>
//     );
// };

// export default Flashcard;

// import React, { useState } from 'react';
// import ReactCardFlip from 'react-card-flip';

// interface FlashcardProps {
//     question: string;
//     answer: string;
//     imageUrl: string;
//     buttonText: string;
// }

// const Flashcard: React.FC<FlashcardProps> = ({ question, answer, imageUrl, buttonText }) => {
//     const [isFlipped, setIsFlipped] = useState(false);

//     const flipCard = () => {
//         setIsFlipped(!isFlipped);
//     };

//     return (
//         <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
//             <div
//                 className="w-64 h-40 bg-white rounded-lg shadow-md cursor-pointer transform hover:rotate-y-180 transition duration-300"
//                 onClick={flipCard}
//             >
//                 <div className="h-full flex items-center justify-center backface-hidden">
//                     <img className="w-48 h-48 object-cover rounded-full" src={imageUrl} alt="Card Image" />
//                 </div>
//                 <div className="h-full flex items-center justify-center backface-hidden">
//                     <div className="text-gray-800 font-bold text-lg">{question}</div>
//                     <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">{buttonText}</button>
//                 </div>
//             </div>
//             <div
//                 className="w-64 h-40 bg-white rounded-lg shadow-md cursor-pointer transform hover:rotate-y-180 transition duration-300"
//                 onClick={flipCard}
//             >
//                 <div className="h-full flex items-center justify-center backface-hidden">
//                     <div className="text-gray-800 font-bold text-lg">{answer}</div>
//                 </div>
//             </div>
//         </ReactCardFlip>
//     );
// };

// export default Flashcard;

// import React, { useState } from 'react';

// interface FlashcardProps {
//     question: string;
//     answer: string;
//     imageUrl: string;
//     buttonText: string;
// }

// const Flashcard: React.FC<FlashcardProps> = ({ question, answer, imageUrl, buttonText }) => {
//     const [isFlipped, setIsFlipped] = useState(false);

//     const flipCard = () => {
//         setIsFlipped(!isFlipped);
//     };

//     return (
//         <div
//             className="w-64 h-40 bg-white rounded-lg shadow-md cursor-pointer perspective"
//             onClick={flipCard}
//         >
//             <div
//                 className={`flip-card ${isFlipped ? 'flipped' : ''}`}
//                 style={{ transformStyle: 'preserve-3d', transition: 'transform 0.5s' }}
//             >
//                 <div className="flip-card-front">
//                     <img className="w-48 h-48 object-cover rounded-full" src={imageUrl} alt="Card Image" />
//                 </div>
//                 <div className="flip-card-back">
//                     <div className="text-gray-800 font-bold text-lg">{answer}</div>
//                     <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">{buttonText}</button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Flashcard;

import React from 'react';
import Link from 'next/link'
import '../flashCard.css'

interface FlashcardProps {
    imageSrc: string;
    buttonText: string;
    title: string;
}

const Flashcard: React.FC<FlashcardProps> = ({ imageSrc, buttonText, title }) => {
    return (

        <div className="card m-4 rounded-lg overflow-hidden flex-shrink-0 w-1/4">
            <div className="card-inner">
                <div className="card-front flex items-center">
                    <img src={imageSrc} width="" alt="Flashcard" className="md:w-32 lg:w-48 object-cover" />
                </div>
                <div className="card-back flex flex-col justify-center items-center bg-gray-200 rounded-lg">
                    <h2 className="text-2xl mb-4 text-white">{title}</h2>
                    <button className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-full shadow-md transition-colors duration-300 ease-in-out">
                        <Link href={buttonText}>View Website</Link>
                    </button>
                </div>
            </div>
        </div>

    );
};

export default Flashcard;