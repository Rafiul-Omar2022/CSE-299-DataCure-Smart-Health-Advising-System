import { useState } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import Swal from "sweetalert2";

function HospitalDoctorList() {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const [data, setData] = useState({
    fullName: "",
    gender: "",
    dob: "",
    photo: null,
    contact: "",
    email: "",
    specialization: "",
    degrees: "",
    license: "",
    board: "",
    experience: "",
    hospital: "",
    fees: "",
    availability: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "photo") {
      setData({ ...data, photo: files[0] });
    } else {
      setData({ ...data, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);

    const formData = new FormData(e.target);
    const doctorData = {
      fullName: formData.get("fullName"),
      gender: formData.get("gender"),
      dob: formData.get("dob"),
      photo: null,
      contact: formData.get("contact"),
      email: formData.get("email"),
      specialization: formData.get("specialization"),
      degrees: formData.get("degrees"),
      license: formData.get("license"),
      board: formData.get("board"),
      experience: formData.get("experience"),
      hospital: formData.get("hospital"),
      fees: formData.get("fees"),
      availability: formData.get("availability"),
    };

    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to add this doctor?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Confirm",
      theme: "dark",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Success!",
          text: "You Added A doctor",
          icon: "success",
          theme: "dark",
        });
        fetch("http://localhost:3000/hospital-dashboard/doctor/add-doctor", {
          // Updated the URL here
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ ...doctorData, photo: null }),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              e.target.reset();
            }
          });
      }
    });
  };

  return (
    <>
      <main className="ml-60 p-4 flex-1">
        {/* Assign Doctor Button */}
        <div className="my-6">
          <button
            onClick={onOpenModal}
            className="bg-blue-800 text-white py-2 px-6 rounded-full hover:bg-blue-900 transition-transform transform hover:translate-x-2"
          >
            Assign Doctor
          </button>
        </div>

        {/* Doctor List Section */}
        <section className="mt-6">
          <h5 className="text-xl font-semibold text-gray-800 mb-4">
            Doctor List
          </h5>
          <table className="w-full bg-white border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="text-left p-3 border-b">Doctor ID</th>
                <th className="text-left p-3 border-b">Doctor</th>
                <th className="text-left p-3 border-b">Speciality</th>
                <th className="text-left p-3 border-b">Add Report</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 border-b">#12033</td>
                <td className="p-3 border-b">Dr. Vladimir Lenin</td>
                <td className="p-3 border-b">Cardiology</td>
                <td className="p-3 border-b text-blue-700 font-bold">
                  <a href="#" className="hover:underline">
                    Upload
                  </a>
                </td>
              </tr>
              <tr>
                <td className="p-3 border-b">#12034</td>
                <td className="p-3 border-b">Dr. Che Guevara</td>
                <td className="p-3 border-b">Neurology</td>
                <td className="p-3 border-b text-blue-700 font-bold">
                  <a href="#" className="hover:underline">
                    Upload
                  </a>
                </td>
              </tr>
              <tr>
                <td className="p-3 border-b">#12035</td>
                <td className="p-3 border-b">Dr. Karl Marx</td>
                <td className="p-3 border-b">Surgery</td>
                <td className="p-3 border-b text-blue-700 font-bold">
                  <a href="#" className="hover:underline">
                    Upload
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>

      <Modal open={open} onClose={onCloseModal} center>
        <form
          onSubmit={handleSubmit}
          className="max-w-5xl mx-auto p-6 space-y-10"
        >
          {/* Personal Info */}
          <div>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Personal Information</h2>
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Update
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                name="fullName"
                onChange={handleChange}
                placeholder="Full Name"
                className="border p-2 rounded"
              />
              <input
                name="gender"
                onChange={handleChange}
                placeholder="Gender"
                className="border p-2 rounded"
              />
              <input
                type="date"
                name="dob"
                onChange={handleChange}
                placeholder="Date of Birth"
                className="border p-2 rounded"
              />
              <input
                type="file"
                name="photo"
                onChange={handleChange}
                className="border p-2 rounded"
              />
              <input
                name="contact"
                onChange={handleChange}
                placeholder="Contact Number"
                className="border p-2 rounded"
              />
              <input
                name="email"
                onChange={handleChange}
                placeholder="Email Address"
                className="border p-2 rounded"
              />
            </div>
          </div>

          {/* Professional Info */}
          <div>
            <h2 className="text-xl font-bold mb-4">Professional Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                name="specialization"
                onChange={handleChange}
                placeholder="Specialization(s)"
                className="border p-2 rounded"
              />
              <input
                name="degrees"
                onChange={handleChange}
                placeholder="Degrees"
                className="border p-2 rounded"
              />
              <input
                name="license"
                onChange={handleChange}
                placeholder="Medical License Number"
                className="border p-2 rounded"
              />
              <input
                name="board"
                onChange={handleChange}
                placeholder="Issuing Medical Board"
                className="border p-2 rounded"
              />
              <input
                name="experience"
                onChange={handleChange}
                placeholder="Years of Experience"
                className="border p-2 rounded"
              />
              <input
                name="hospital"
                onChange={handleChange}
                placeholder="Current Hospital/Clinic"
                className="border p-2 rounded"
              />
              <input
                name="fees"
                onChange={handleChange}
                placeholder="Consultation Fees"
                className="border p-2 rounded"
              />
              <input
                name="availability"
                onChange={handleChange}
                placeholder="Availability"
                className="border p-2 rounded"
              />
            </div>
          </div>
        </form>
      </Modal>
    </>
  );
}

export default HospitalDoctorList;
