import { useEffect, useState } from "react";
import axios from "axios";
import tampi from "../assets/tami.png";
import prime from "../assets/primes.png";
import acss from "../assets/Acss.png";
import resumeFile from "../assets/resume.pdf"; 

export default function ProfileDetails() {
  const id = window.location.pathname.split("/").pop();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    axios
      .get(`https://appforprofilemanagement.onrender.com/profiles/${id}`)
      .then((res) => setProfile(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!profile) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="bg-white min-h-screen">
      
      <div className="flex justify-between items-center px-6 py-4">
        <img src={tampi} alt="TAPMI" className="h-16" />
        <div className="flex gap-6">
          <img src={prime} alt="PRME" className="h-12" />
          <img src={acss} alt="AACSB" className="h-12" />
        </div>
      </div>

      
      <div className="bg-gradient-to-r from-orange-500 to-orange-400 text-white text-center py-12">
        <img
          src={profile.avatar}
          alt={profile.name}
          className="w-40 h-40 rounded-full border-8 border-white mx-auto mb-4"
        />
        <h1 className="text-3xl font-bold">{profile.name}</h1>
        <p className="text-lg">
          {profile.gender} | {profile.age} | {profile.pronouns}
        </p>

        
        <a
          href={resumeFile}
          download={`${profile.name}_Resume.pdf`}
          className="mt-4 inline-block px-6 py-2 border border-white rounded-full hover:bg-white hover:text-orange-500 transition"
        >
          Download My Resume
        </a>
      </div>

    
      <div className="max-w-4xl mx-auto py-8 px-6 text-center">
        <p className="text-lg text-gray-700 leading-relaxed">{profile.about}</p>
      </div>

      
      <div className="max-w-6xl mx-auto px-6 py-8">
        <h2 className="text-2xl font-bold mb-6">Case Insights & Key Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            { img: "/ondc.jpg", title: "ONDC Case Study" },
            { img: "/water.jpg", title: "Jal Jeevan Mission Case Study" },
            { img: "/finace.jpg", title: "FinEasy Case Study" },
          ].map((caseItem, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={caseItem.img} alt={caseItem.title} className="w-full h-40 object-cover" />
              <div className="p-4 text-center font-semibold">{caseItem.title}</div>
            </div>
          ))}
        </div>
      </div>

      
      <div className="bg-gradient-to-r from-orange-500 to-orange-400 text-center py-10 mt-10">
        <h2 className="text-2xl font-bold text-white mb-4">
          Connect with {profile.name}
        </h2>

        
        <a
          href={resumeFile}
          download={`${profile.name}_Resume.pdf`}
          className="px-6 py-2 border border-white rounded-full text-white hover:bg-white hover:text-orange-500 transition inline-block"
        >
          Download My Resume
        </a>

        <div className="flex justify-center gap-6 mt-6 text-white">
          <span>📧 {profile.email}</span>
          <span>📞 {profile.phone}</span>
          <a href={profile.github} className="hover:underline">
            GitHub
          </a>
          <a href={profile.linkedin} className="hover:underline">
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}
