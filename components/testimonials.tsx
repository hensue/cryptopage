// import Image from 'next/image'
// import TestimonialImage from '@/public/images/testimonial.jpg'

// export default function Testimonials() {
//   return (
{/* <section className="relative">
  <div id="sponsors">

    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <div className="py-12 md:py-20"> */}

{/* Section header */ }
{/* <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
          <h2 className="h2 mb-4">Our Sponsors</h2>

        </div>



      </div>
    </div>
  </div>
</section> */}
//   )
// }

import React from 'react';
import './flashCard.css'
import Flashcard from './ui/FlashCard';

const Testimonials: React.FC = () => {
  return (
    <section className="relative bg-color">
      <div id="sponsors">

        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pb-12 md:py-20">

            {/* Section header */}
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
              <h2 className="h2 mb-4">Our Sponsors</h2>
            </div>

            <div className="flex flex-wrap justify-center">
              <Flashcard imageSrc="/images/sponsors/1)Woodstock Fund.png" buttonText="https://woodstockfund.com" title='Woodstock' />
              <Flashcard imageSrc="/images/sponsors/2)C3.png" buttonText="https://wegrowwithc3.com" title='C3' />
              <Flashcard imageSrc="/images/sponsors/3)Annex-Investments.png" buttonText="https://annexinvestments.com" title='Annex' />
              <Flashcard imageSrc="/images/sponsors/4)Momentum6.png" buttonText="https://momentum6.com" title='Momentum6' />
              <Flashcard imageSrc="/images/sponsors/5)888vc.png" buttonText="https://888vc.co" title='888vc' />
              <Flashcard imageSrc="/images/sponsors/6)DSA-Investments.png" buttonText="https://dsainvestments.com" title='DSA-Investments' />
              <Flashcard imageSrc="/images/sponsors/7)Tykhe Block Ventures.png" buttonText="https://tykheblock.ventures" title='Tykhe Block' />
              <Flashcard imageSrc="/images/sponsors/8)18 Ventures.png" buttonText="https://18ventures.co" title='18 Ventures' />
            </div>

          </div>
        </div>
      </div>
    </section>

  );
};

export default Testimonials;