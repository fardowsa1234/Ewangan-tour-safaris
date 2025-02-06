import TestimonialCard from "./TestimonialCard"

const testimonials = [
  {
    name: "Sarah Johnson",
    location: "Kisumu",
    rating: 5,
    comment:
      "Our safari experience with Ewang'an Tours was absolutely incredible. The guides were knowledgeable and friendly, and we saw amazing wildlife!",
    image: "/kamau.png",
  },
  {
    name: "David Kamau",
    location: "Nairobi",
    rating: 5,
    comment:
      "Perfect organization from start to finish. The beach extension in Zanzibar was the perfect way to end our African adventure.",
    image: "/david.png",
  },
  {
    name: "James Azurani",
    location: "Mombasa",
    rating: 5,
    comment:
      "A life-changing experience! The attention to detail and personalized service made our family trip unforgettable.",
    image: "/sahra.png",
  },
]

const TestimonialsSection = () => {
  return (
    <section className="bg-neutral py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-dark transition-colors mb-4">What Our Travelers Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Read about the experiences of our satisfied customers who have explored Kenya with us.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection

