import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Mike R.",
      title: "Graduate Student",
      text: "The courses at VFX Academy transformed my career. I'm now working on major film projects!",
      image: "/path/to/mike-image.jpg"
    },
    {
      name: "Sarah L.",
      title: "Senior VFX Designer",
      text: "The instructors are top-notch and the curriculum is cutting-edge. Highly recommended!",
      image: "/path/to/sarah-image.jpg"
    },
    {
      name: "Carlos M.",
      title: "Visual Effects Artist",
      text: "The hands-on training and real-world projects gave me a competitive edge in the industry.",
      image: "/path/to/carlos-image.jpg"
    },
    {
      name: "Elena G.",
      title: "VFX Supervisor",
      text: "VFX Academy provided me with the skills needed to advance in my career. Amazing experience!",
      image: "/path/to/elena-image.jpg"
    },
    {
      name: "David P.",
      title: "3D Animator",
      text: "The knowledge gained at VFX Academy helped me land my dream job at an animation studio.",
      image: "/path/to/david-image.jpg"
    }
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">What Our Students Say</h2>
        <div className="overflow-x-auto pb-8">
          <div className="flex space-x-6" style={{ width: `${testimonials.length * 480}px` }}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="flex-shrink-0 w-[460px] h-auto px-10 py-8 bg-[#d9d9d9] rounded-[20px] flex flex-col justify-start items-start gap-8">
                <div className="w-full h-20 relative bg-white flex items-center justify-start px-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="text-yellow-400" />
                  ))}
                </div>
                <div className="self-stretch flex-col justify-start items-start gap-[23px] flex">
                  <p className="text-black text-lg font-normal font-['Inter']">"{testimonial.text}"</p>
                  <div className="self-stretch justify-start items-center gap-8 inline-flex">
                    <div className="w-20 h-20 relative bg-white rounded-full overflow-hidden">
                      <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="grow shrink basis-0 flex-col justify-start items-start gap-[5px] inline-flex">
                      <div className="self-stretch text-black text-lg font-bold font-['Inter']">{testimonial.name}</div>
                      <div className="self-stretch text-black text-lg font-normal font-['Inter'] leading-normal">
                        {testimonial.title}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;