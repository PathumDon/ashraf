import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../utils/api";
import { toast } from "react-toastify";

const EditPersonalInfoPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [heading, setHeading] = useState("");
  const [hero_title, setHeroTitle] = useState("");
  const [tag_line, setTagLine] = useState("");
  const [logo, setLogo] = useState(null); // Store the file object
  const [hero_image, setHeroImage] = useState(null); // Store the file object
  const [full_name, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [about, setAbout] = useState("");
  const [about_image, setAboutImage] = useState(null); // Store the file object
  const [file, setDocument] = useState(null);
  const [loading, setLoading] = useState(true);

  const [old_hero_image, setOldHeroImage] = useState("");
  useEffect(() => {
    getPersonalInfo();
  }, []);
  const getPersonalInfo = () => {
    api.get(`api/personal-info/${id}/`).then((res) => {
      setHeading(res.data.heading);
      setHeroTitle(res.data.hero_title);
      setTagLine(res.data.tag_line);
      setFullName(res.data.heading);
      setPhone(res.data.phone);
      setEmail(res.data.email);
      setAbout(res.data.about);
      // setLogo(res.data.logo.name);
      // setHeroImage(res.data.hero_image.name);
      // setAboutImage(res.data.about_image.name);
      // setDocument(res.data.file.name);

      setLoading(false);
    });
  };

  const updatePersonalInfo = (e) => {
    e.preventDefault();

    api

      .put(
        `/api/personal-info/update/${id}/`,
        {
          heading,
          hero_title,
          tag_line,
          full_name,
          phone,
          email,
          about,
          logo,
          hero_image,
          about_image,
          file,
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((res) => {
        if (res.status === 200) {
          toast.success("Personal info updated successfully!");
          navigate("/backend/personal-info");
        } else {
          toast.error("Failed to update personal info.");
        }
      })
      .catch((err) => toast.error(err));
  };
  return (
    <>
      <section className="bg-indigo-50 ">
        <div className="flex flex-col items-center md:px-20 md:py-24">
          <div className="bg-white px-10 py-8 mb-4 shadow-md rounded-xl border md:m-0 w-full max-w-full md:max-w-3xl">
            <form onSubmit={updatePersonalInfo} className="space-y-4">
              <h1 className="text-3xl font-bold text-center mb-10">
                Personal Informations
              </h1>
              <div>
                <label
                  htmlFor="heading"
                  className="block text-lg font-medium text-gray-700"
                >
                  Heading
                </label>
                <input
                  type="text"
                  id="heading"
                  name="heading"
                  className="mt-2 py-2 px-2 block w-full rounded-md border shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  placeholder="Your heading"
                  onChange={(e) => setHeading(e.target.value)}
                  value={heading}
                />
              </div>

              <div>
                <label
                  htmlFor="hero-title"
                  className="block text-lg font-medium text-gray-700"
                >
                  Hero Title
                </label>
                <input
                  type="text"
                  id="hero-title"
                  name="hero-title"
                  className="mt-2 py-2 px-2 block w-full rounded-md border shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  placeholder="Your Hero Title"
                  onChange={(e) => setHeroTitle(e.target.value)}
                  value={hero_title}
                />
              </div>

              <div>
                <label
                  htmlFor="tag-line"
                  className="block text-lg font-medium text-gray-700"
                >
                  Tag Line
                </label>
                <textarea
                  id="tag-line"
                  name="tag-line"
                  rows="3"
                  className="mt-2 py-2 px-2 block w-full rounded-md border shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  placeholder="Your Tag Line"
                  onChange={(e) => setTagLine(e.target.value)}
                  value={tag_line}
                ></textarea>
              </div>
              <div>
                <label
                  htmlFor="full-name"
                  className="block text-lg font-medium text-gray-700"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="full-name"
                  name="full-name"
                  className="mt-2 py-2 px-2 block w-full rounded-md border shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  placeholder="Your Full Name"
                  onChange={(e) => setFullName(e.target.value)}
                  value={full_name}
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-lg font-medium text-gray-700"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="mt-2 py-2 px-2 block w-full rounded-md border shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  placeholder="Your Phone Number"
                  onChange={(e) => setPhone(e.target.value)}
                  value={phone}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-lg font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-2 py-2 px-2 block w-full rounded-md border shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  placeholder="Your Email Address"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </div>

              <div>
                <label
                  htmlFor="about"
                  className="block text-lg font-medium text-gray-700"
                >
                  About
                </label>
                <textarea
                  id="about"
                  name="about"
                  rows="6"
                  className="mt-2 py-2 px-2 block w-full rounded-md border shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  placeholder="Tell us about yourself"
                  onChange={(e) => setAbout(e.target.value)}
                  value={about}
                ></textarea>
              </div>
              <div>
                <label
                  htmlFor="logo"
                  className="block text-lg font-medium text-gray-700"
                >
                  Logo
                </label>
                <div className="mt-2 py-2 px-2 flex items-center">
                  <input
                    type="file"
                    id="logo"
                    name="logo"
                    accept="image/*"
                    className="sr-only"
                    onChange={(e) => setLogo(e.target.files[0])} // Save file
                  />
                  <label
                    htmlFor="logo"
                    className="cursor-pointer bg-white py-2 px-3 border rounded-md shadow-sm text-lg leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Choose file
                  </label>
                  <span
                    id="logoFileName"
                    className="ml-3 text-lg text-gray-500"
                  >
                    {logo ? logo.name : "No file chosen"}
                  </span>
                </div>
              </div>

              {/* Other Input Fields (same as before) */}
              <div>
                <label
                  htmlFor="hero-image"
                  className="block text-lg font-medium text-gray-700"
                >
                  Hero Image
                </label>
                <div className="mt-2 py-2 px-2 flex items-center">
                  <input
                    type="file"
                    id="hero-image"
                    name="hero-image"
                    accept="image/*"
                    className="sr-only"
                    onChange={(e) => {
                      setHeroImage(e.target.files[0]);
                      setOldHeroImage("");
                    }} // Save file
                  />
                  <label
                    htmlFor="hero-image"
                    className="cursor-pointer bg-white py-2 px-3 border rounded-md shadow-sm text-lg leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Choose file
                  </label>
                  <span
                    id="heroImageFileName"
                    className="ml-3 text-lg text-gray-500"
                  >
                    {hero_image ? hero_image.name : "No file chosen"}
                  </span>
                  <span>{old_hero_image}</span>
                </div>
              </div>

              {/* More Fields */}
              <div>
                <label
                  htmlFor="about-image"
                  className="block text-lg font-medium text-gray-700"
                >
                  About Image
                </label>
                <div className="mt-2 py-2 px-2 flex items-center">
                  <input
                    type="file"
                    id="about-image"
                    name="about-image"
                    accept="image/*"
                    className="sr-only"
                    onChange={(e) => setAboutImage(e.target.files[0])} // Save file
                  />
                  <label
                    htmlFor="about-image"
                    className="cursor-pointer bg-white py-2 px-3 border rounded-md shadow-sm text-lg leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Choose file
                  </label>
                  <span
                    id="aboutImageFileName"
                    className="ml-3 text-lg text-gray-500"
                  >
                    {about_image ? about_image.name : "No file chosen"}
                  </span>
                </div>
              </div>
              <div>
                <label
                  htmlFor="document-upload"
                  className="block text-lg font-medium text-gray-700"
                >
                  Upload CV
                </label>
                <div className="mt-2 py-2 px-2 flex items-center">
                  <input
                    type="file"
                    id="document-upload"
                    name="document-upload"
                    accept=".pdf, .doc, .docx"
                    className="sr-only"
                    onChange={(e) => setDocument(e.target.files[0])} // Save file
                  />
                  <label
                    htmlFor="document-upload"
                    className="cursor-pointer bg-white py-2 px-3 border rounded-md shadow-sm text-lg leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Choose file
                  </label>
                  <span
                    id="documentFileName"
                    className="ml-3 text-lg text-gray-500"
                  >
                    {file ? file.name : "No file chosen"}
                  </span>
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="justify-center py-2 px-3 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Update
                </button>

                <button
                  type="button"
                  onClick={() => navigate("/backend/personal-info")}
                  className="ml-4 justify-center py-2 px-3 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-gray-400 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default EditPersonalInfoPage;
