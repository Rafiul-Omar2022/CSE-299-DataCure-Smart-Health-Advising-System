import { useState } from "react";

export default function FindSpecialist() {
  const [searchQuery, setSearchQuery] = useState("");

  // Filter doctors based on the search query
  const filteredDoctors = doctors.filter((doctor) =>
    doctor.specialty.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      {/* Search Bar */}
      <div className="mt-6 mb-4">
        <input
          type="text"
          className="w-full p-3 border rounded-md shadow-md"
          placeholder="Search by specialty"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Doctor Profile Cards */}
      {filteredDoctors.length > 0 ? (
        filteredDoctors.map((specialist, index) => (
          <div key={index} className="bg-white p-6 mb-4 rounded-lg shadow-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <img
                  src={specialist.image}
                  alt={specialist.name}
                  className="w-20 h-20 rounded-full mr-4"
                />
                <div>
                  <h4 className="text-xl font-semibold text-blue-600">
                    {specialist.name}
                  </h4>
                  <p className="text-gray-600">{specialist.specialty}</p>
                  <p className="text-gray-500">{specialist.description}</p>
                </div>
              </div>
              <div className="flex flex-col items-end space-y-2">
                <button className="text-sm bg-red-100 text-red-800 px-6 py-2 rounded-full transition hover:bg-red-200">
                  Book Appointment
                </button>
                <a
                  href="docdetails.html"
                  className="text-blue-600 font-bold block mb-2 pt-5"
                >
                  More Details
                </a>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-500">
          No doctors found matching your search
        </p>
      )}
    </>
  );
}

// List of doctors
const doctors = [
  {
    name: "Dr. Vladimir Lenin",
    specialty: "MBBS, MS Neurologist",
    description:
      "Serves for: Insomnia, Multiple Sclerosis, Epilepsy, Neuropathic Pain, Dementia, Parkinson's Disease",
    image: "https://rafiulomar.sirv.com/CSE299-DataCure/images/lenin.jpg",
  },
  {
    name: "Dr. Che Guevara",
    specialty: "MBBS, PhD in Endocrinology",
    description:
      "Serves for: Diabetes, Obesity, Thyroid Disorders, Metabolic Syndrome",
    image: "https://rafiulomar.sirv.com/CSE299-DataCure/images/guevara.jpg",
  },
  {
    name: "Dr. Karl Marx",
    specialty: "MBBS, MD in Cardiology",
    description:
      "Serves for: Hypertension, Coronary Artery Disease, Heart Failure",
    image: "https://rafiulomar.sirv.com/CSE299-DataCure/images/marx.jpg",
  },
];
