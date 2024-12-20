import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faUsers } from "@fortawesome/free-solid-svg-icons";

function WhoWeAreSection() {
  return (
    <div className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        {/* WHO WE ARE Section */}
        <div className="mb-16">
          <h1 className="text-4xl font-bold mb-8 border-b-4 border-red-600 inline-block">
            WHO WE ARE
          </h1>
          <div className="grid gap-8 md:grid-cols-2">
            {/* Who We Are */}
            <div className="flex items-start space-x-4">
              <div className="text-red-600 text-4xl flex-shrink-0">
                <FontAwesomeIcon icon={faUser} />
              </div>
              <div>
                <h2 className="text-2xl font-bold">Who We Are</h2>
                <p className="mt-2 text-gray-300">
                  We are the Manufacturer of Roll cutting machines, Jari machine
                  parts, Repairing other machine parts. Today, our brands, M&D
                  Engineering work ⚙️🛠️ are the most trusted in the Industries.
                </p>
              </div>
            </div>

            {/* Management Team */}
            <div className="flex items-start space-x-4">
              <div className="text-red-600 text-4xl flex-shrink-0">
                <FontAwesomeIcon icon={faUsers} />
              </div>
              <div>
                <h2 className="text-2xl font-bold">Management Team</h2>
                <p className="mt-2 text-gray-300">
                  We have a powerful management team of 10 highly dedicated and
                  educated personalities, including Mr. Dinesh Bhandari, who is
                  the owner of the Industries.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* MISSION AND VISION Section */}
        <div>
          <h1 className="text-4xl font-bold mb-8 border-b-4 border-red-600 inline-block">
            MISSION AND VISION
          </h1>
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Mission */}
            <div className="flex items-start space-x-4">
              <div>
                <h2 className="text-2xl font-bold">OUR MISSION</h2>
                <p className="mt-2 text-gray-300">
                  We aim to manufacture all the Roll cutting machines machines
                  with a fully equipped workshop to produce the best quality
                  machines with cost-effectiveness.
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="flex items-start space-x-4">
              <div>
                <h2 className="text-2xl font-bold">OUR VISION</h2>
                <p className="mt-2 text-gray-300">
                  Our vision is to become a leader in manufacturing all types of
                  quality machines at affordable prices and ensure complete
                  satisfaction for our customers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhoWeAreSection;
