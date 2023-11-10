import React from 'react';
import '../font.css'
import '../topicCard.css'
interface CardProps {
    imageUrl: string;
    name: string;
    description: string;
}

const TopicCard: React.FC<CardProps> = ({ imageUrl, name, description }) => {
    const styles = {
        fontFamily: 'Date, sans-serif',
        fontSize: '16px',
        // color: 'black'
      }
    return (
        <div className="topic_card p-4 space-around mr-6 mb-2 transform transition duration-300 hover:-translate-y-3 hover:shadow-lg">
            <div className='flex justify-center'>
                <div className="bg-green-100 w-16 h-16 flex rounded-full flex-col items-center shadow-md transform transition duration-300 hover:-translate-y-2 hover:shadow-lg">
                    <img className="w-16 h-16 object-cover rounded-full" src={imageUrl} alt="Card Image" />
                </div>
            </div>
            <div className="mt-2 text-center">
                <h3 className="text-lg font-semibold">{name}</h3>
                <p className="text-gray-500" style={styles}>{description}</p>
            </div>
        </div>
    );
};

export default TopicCard;