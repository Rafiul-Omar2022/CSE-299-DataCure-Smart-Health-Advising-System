const howItWorksData = [
  {
    id: 1,
    text: "Login / Signup",
    image:
      "https://rafiulomar.sirv.com/CSE299-DataCure/images/loginsignupicon.png",
  },
  {
    id: 2,
    text: "Select Doctor",
    image:
      "https://rafiulomar.sirv.com/CSE299-DataCure/images/selectdoctoricon.png",
  },
  {
    id: 3,
    text: "Appointment",
    image:
      "https://rafiulomar.sirv.com/CSE299-DataCure/images/appointmenticon.png",
  },
  {
    id: 4,
    text: "Online Payment",
    image:
      "https://rafiulomar.sirv.com/CSE299-DataCure/images/onlinepaymenticon.png",
  },
  {
    id: 5,
    text: "Graph and Statistics",
    image:
      "https://rafiulomar.sirv.com/CSE299-DataCure/images/graphandstatisticsicon.png",
  },
  {
    id: 6,
    text: "Get Digital Health Report",
    image:
      "https://rafiulomar.sirv.com/CSE299-DataCure/images/getdigitalhealthreporticon.png",
  },
  {
    id: 7,
    text: "Medical Health Test",
    image:
      "https://rafiulomar.sirv.com/CSE299-DataCure/images/medicalhelathtesticon.png",
  },
  {
    id: 8,
    text: "Virtual Doctor Meeting",
    image:
      "https://rafiulomar.sirv.com/CSE299-DataCure/images/virtualdoctormeetingicon.png",
  },
];

export default function Feature() {
  return (
    <div>
      {/* How It Works Section */}
      <section className="bg-white py-20">
        <div className="mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-700">How It Works</h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-5">
            {
              // Mapping data from howitworks array of objects
              howItWorksData.map((data) => (
                <div key={data.id} className="flex flex-col items-center">
                  <img src={data.image} alt={data.text} className="w-16 h-16" />
                  <p className="text-lg mt-3">{data.text}</p>
                </div>
              ))
            }
          </div>
        </div>
      </section>
    </div>
  );
}
