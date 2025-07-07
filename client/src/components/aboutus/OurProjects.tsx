import React from 'react'
import { ExternalLink } from 'lucide-react'
import vulcan from "../../assets/vulcan.png"
import kkra from "../../assets/kkra.png"
import saloon from "../../assets/saloon.png"
import bnbyond from "../../assets/bnbyond.png"
import musafer from "../../assets/musafer.png"
// Dummy project data
const projects = [
  {
    id: 1,
    title: "KKRA Travel Tours",
    description: "The KKRA Travel Tours website was developed as a comprehensive digital platform to serve travelers worldwide. The website focuses on delivering a user-friendly experience, showcasing premium travel services, and enabling seamless bookings for tours and packages.",
    image: kkra,
    website: "https://www.kkratraveltours.com/"
  },
  
  {
    id: 2,
    title: "Salloon App",
    description: "A salon management application that helps businesses streamline appointment scheduling, customer interactions, and service delivery through an intuitive interface.",
    image: saloon,
    website: "https://salloon-frontend.netlify.app/"
  },
  {
    id: 3,
    title: "Bnbyond",
    description: "A user-friendly platform for hospitality businesses, offering tools for seamless guest management, room booking, and personalized service delivery.",
    image: bnbyond,
    website: "https://bnbyond.com/"
  },
  {
    id: 4,
    title: "Vulcanweb Online Academy",
    description: "An innovative e-learning platform enabling educators to create engaging online courses, track progress, and connect with students globally.",
    image: vulcan,
    website: "https://vulcan-v1.netlify.app/"
  },
  {
    id: 5,
    title: "Mosafir",
    description: "A travel and tourism platform designed to simplify trip planning by offering curated travel packages, detailed itineraries, and an effortless booking experience for explorers in Pakistan.",
    image: musafer,
    website: "https://mosafir.pk/"
  }
]

const OurProjects = () => {
  const handleWebsiteClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className='max-w-7xl mx-auto px-6 lg:px-8 '>
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Projects</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Explore our portfolio of successful projects that showcase our expertise in delivering
          innovative solutions across various industries.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full"
          >
            <div className="aspect-w-16 aspect-h-9">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
            </div>

            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {project.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow">
                {project.description}
              </p>

              <button
                onClick={() => handleWebsiteClick(project.website)}
                className="flex items-center justify-center w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition-colors duration-200 group mt-auto"
              >
                <ExternalLink className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform duration-200" />
                Visit Website
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default OurProjects
