import React from 'react';
import TestimonialCard from './TestimonialCard';
const Testimonials = () => {
    const testimonials = [
        {
            name: "Mike R.",
            title: "Graduate Student",
            text: "The courses at VFX Academy transformed my career. I'm now working on major film projects!",
            image: "/placeholder.svg"
        },
        {
            name: "Sarah L.",
            title: "Senior VFX Designer",
            text: "The instructors are top-notch and the curriculum is cutting-edge. Highly recommended!",
            image: "/placeholder.svg"
        },
        {
            name: "Carlos M.",
            title: "Visual Effects Artist",
            text: "The hands-on training and real-world projects gave me a competitive edge in the industry.",
            image: "/placeholder.svg"
        },
        // ... puedes agregar más testimonios aquí
    ];
    return (<section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">What Our Students Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (<TestimonialCard key={index} name={testimonial.name} title={testimonial.title} text={testimonial.text} imageUrl={testimonial.image}/>))}
        </div>
      </div>
    </section>);
};
export default Testimonials;
