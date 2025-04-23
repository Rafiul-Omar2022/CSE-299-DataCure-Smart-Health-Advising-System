export default function UserMeet() {
  return (
    <>
      {/* Main Content */}
      <div className="w-full p-4">
        {/* Meeting Info */}
        <div className="text-center mt-8 space-y-4">
          <p className="text-lg">
            Your allocated Date: <strong>15/06/2023</strong> | Time:
            <strong> 10:30 AM</strong> | Serial No: <strong>2</strong>
          </p>
          <p className="space-x-4">
            Doctor Status:
            <span className="font-bold text-green-600">Available</span> |
            <span className="font-bold text-yellow-600">In Queue</span> |
            <span className="font-bold text-red-600">Closed</span>
          </p>
          <p>
            Doctor in Serial No: <strong>1</strong>
          </p>
          <a
            href="https://meet.google.com/example-room"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-lg transition-colors"
          >
            JOIN
          </a>
        </div>
      </div>
    </>
  );
}
