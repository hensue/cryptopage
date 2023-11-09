import React from 'react';

interface CardProps {
    imageUrl: string;
    title: string;
    description: string;
}

const Card: React.FC<CardProps> = ({ imageUrl, title, description }) => {
    return (
        <div className="card-shadow w-64 rounded overflow-hidden bg-white m-2 transform hover:scale-105 transition duration-300">
            <div className="flex justify-center">
                <img className="w-36 h-36 object-cover rounded-full" src={imageUrl} alt="Card Image" />
            </div>
            <div className="px-6 py-4 flex flex-col items-center text-center">
                <div className="font-bold text-xl mb-2 w-40">{title}</div>
                <p className="text-gray-700 text-base">{description}</p>
            </div>
        </div>
    );
};

export default Card;