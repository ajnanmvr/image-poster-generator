"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const CreatePage = () => {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const [name, setName] = useState("");
  const [backgroundImage, setBackgroundImage] = useState("");
  const [size, setSize] = useState("");
  const [expiryDate, setExpiryDate] = useState("");

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
      setBackgroundImage(event.target.result);
    };

    reader.readAsDataURL(file);
  };

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const previousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform submission logic here
    // You can access all the collected data (name, backgroundImage, size, expiryDate)
    // and send it to your backend or perform any other required actions
    // For this example, we'll just log the data to the console
    console.log({
      name,
      backgroundImage,
      size,
      expiryDate,
    });

    // Reset the form
    setName("");
    setBackgroundImage("");
    setSize("");
    setExpiryDate("");

    // Redirect to a success page or perform any other desired actions
    //   router.push("/success");
  };

  const renderForm = () => {
    switch (currentPage) {
      case 1:
        return (
          <div className="flex flex-col items-center gap-4 w-full">
            <h1 className="text-3xl font-bold">Project Name</h1>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border border-gray-300 px-4 py-2 rounded-full w-96"
            />
            <button
              onClick={nextPage}
              className="px-8 py-3 text-white bg-gradient-to-r from-blue-600 via-blue-800 to-indigo-900 rounded-full hover:opacity-90 hover:shadow-lg transition duration-300"
            >
              Next
            </button>
          </div>
        );
        case 2:
          return (
            <div className="flex flex-col items-center gap-4">
              <h1 className="text-4xl font-bold">Page 2</h1>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="border border-gray-300 px-3 py-2 rounded-full"
              />
              {backgroundImage && (
                <img
                  src={backgroundImage}
                  alt="Background Preview"
                  className="max-w-sm mt-2 rounded-xl"
                />
              )}
              <button
                onClick={previousPage}
                className="px-8 py-4 text-white bg-gradient-to-r from-blue-600 via-blue-800 to-indigo-900 rounded-full hover:opacity-90 hover:shadow-lg transition duration-300"
              >
                Previous
              </button>
              <button
                onClick={nextPage}
                className="px-8 py-4 text-white bg-gradient-to-r from-blue-600 via-blue-800 to-indigo-900 rounded-full hover:opacity-90 hover:shadow-lg transition duration-300"
              >
                Next
              </button>
            </div>
          );
      case 3:
        return (
          <div className="flex flex-col items-center gap-4">
            <h1 className="text-3xl font-bold">Size Adjustment</h1>
            <div className="flex items-center gap-2">
              <input
                type="radio"
                name="size"
                value="Full Size"
                checked={size === "Full Size"}
                onChange={(e) => setSize(e.target.value)}
                className="mr-1"
              />
              <label>Full Size</label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="radio"
                name="size"
                value="Clip Size"
                checked={size === "Clip Size"}
                onChange={(e) => setSize(e.target.value)}
                className="mr-1"
              />
              <label>Clip Size</label>
            </div>
            <button
              onClick={previousPage}
              className="px-8 py-3 text-white bg-gradient-to-r from-blue-600 via-blue-800 to-indigo-900 rounded-full hover:opacity-90 hover:shadow-lg transition duration-300"
            >
              Previous
            </button>
            <button
              onClick={nextPage}
              className="px-8 py-3 text-white bg-gradient-to-r from-blue-600 via-blue-800 to-indigo-900 rounded-full hover:opacity-90 hover:shadow-lg transition duration-300"
            >
              Next
            </button>
          </div>
        );
      case 4:
        return (
          <div className="flex flex-col items-center gap-4">
            <h1 className="text-3xl font-bold">Expiry Date</h1>
            <input
              type="date"
              placeholder="Expiry Date"
              name="expire"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
              className="border border-gray-300 px-4 py-2 rounded-full w-96"
            />
            <button
              onClick={previousPage}
              className="px-8 py-3 text-white bg-gradient-to-r from-blue-600 via-blue-800 to-indigo-900 rounded-full hover:opacity-90 hover:shadow-lg transition duration-300"
            >
              Previous
            </button>
            <button
              onClick={handleSubmit}
              className="px-8 py-3 text-white bg-gradient-to-r from-blue-600 via-blue-800 to-indigo-900 rounded-full hover:opacity-90 hover:shadow-lg transition duration-300"
            >
              Submit
            </button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      {renderForm()}
    </div>
  );
};

export default CreatePage;
