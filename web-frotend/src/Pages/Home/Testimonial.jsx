// Testimonial data, for hardcoded, need to serve via server.
const testimonialData = [
  {
    id: 1,
    image: "https://rafiulomar.sirv.com/CSE299-DataCure/images/plath.png",
    name: "John Doe",
    text: "This service has been an absolute game-changer for me. The results were immediate and exceeded my expectations!",
    stars: "★★★★",
  },
  {
    id: 2,
    image: "https://rafiulomar.sirv.com/CSE299-DataCure/images/plath.png",
    name: "Jane Smith",
    text: "I couldn't be happier with the experience. The team was highly professional, and the process was seamless from start to finish.",
    stars: "★★★",
  },
  {
    id: 3,
    image: "https://rafiulomar.sirv.com/CSE299-DataCure/images/plath.png",
    name: "Alice Johnson",
    text: "Fantastic service! Highly recommend to anyone looking for reliable and top-quality solutions.",
    stars: "★★★★★",
  },
];

// Dependancy compoment
const TestimonialCard = ({ data }) => {
  const { id, image, name, text, stars } = data; // object destructing
  return (
    <div key={id} className="bg-white p-6 rounded-lg shadow-lg max-w-[250px]">
      <div className="flex items-center gap-4 mb-4">
        <img src={image} alt={name} className="w-12 h-12 rounded-full" />
        <h3 className="text-lg font-semibold text-blue-700">{name}</h3>
      </div>
      <p className="text-sm text-gray-600 mb-4">{text}</p>
      <div className="text-yellow-500">{stars}</div>
    </div>
  );
};

// Main compoment
export default function Testimonial() {
  return (
    <section className="text-center py-16 px-8 bg-gray-100">
      <h2 className="text-3xl font-semibold mb-6">Testimonials</h2>
      <div className="flex flex-col md:flex-row items-center md:justify-center gap-8">
        {
          // getting each object from testimonialData
          testimonialData.map((data) => (
            <TestimonialCard data={data} />
          ))
          //   Each card is passing as a data props
        }
      </div>
    </section>
  );
}
