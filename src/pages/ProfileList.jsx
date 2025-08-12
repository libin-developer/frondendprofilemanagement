import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import tampi from "../assets/tami.png";
import prime from "../assets/primes.png";
import acss from "../assets/Acss.png";

export default function ProfileList() {
  const [profiles, setProfiles] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://appforprofilemanagement.onrender.com")
      .then((res) => {
        const profileOne = res.data.find((p) => p.id === 1);
        if (profileOne) {
          setProfiles(Array(6).fill(profileOne));
        } else {
          setProfiles(res.data);
        }
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="min-h-screen bg-white p-8">
      <div className="flex justify-between items-center mb-14">
        <img src={tampi} alt="TAPMI" className="h-16 object-contain" />

        <div className="flex gap-6">
          <img src={prime} alt="PRME" className="h-12 object-contain" />
          <img src={acss} alt="AACSB" className="h-12 object-contain" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-12 justify-items-center">
        {profiles.map((profile, index) => (
          <div
            key={index}
            className="bg-white w-72 rounded-xl shadow-lg overflow-hidden cursor-pointer hover:scale-105 transform transition"
            onClick={() => navigate(`/profile/${profile.id}`)}
          >
            <div className="bg-orange-500 h-32 flex justify-center items-end">
              <img
                src={profile.avatar}
                alt={profile.name}
                className="w-24 h-24 rounded-full border-4 border-white -mb-12"
              />
            </div>

            <div className="pt-16 pb-6 text-center">
              <h2 className="text-xl font-bold">{profile.name}</h2>
              <p className="text-gray-600">
                {profile.gender} | {profile.age} | {profile.pronouns}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
