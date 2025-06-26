import React, { useEffect, useState } from "react";
import "./Projects.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import movieexplorer from "../../images/movieexplorer.png";
import notesapp from "../../images/notesapp.png";
import idcard from "../../images/idcard.png";
import weather from "../../images/weather.png";

const Projects = () => {
  const [size, setSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setSize(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const settings = {
    slidesToShow: size > 480 ? 2 : 1,
    slidesToScroll: size > 480 ? 1 : 1,
    infinite: true,
    dots: true,
    autoplay: false, // Optional: Auto scroll for better UX
    autoplaySpeed: 3000, // Speed in milliseconds
  };

  const projects = [
    {
      title: "Weather Application",
      description:
        "This Weather Application allows users to search for current weather conditions by city name. The app provides information such as temperature, humidity, wind speed, and forecasts using the OpenWeatherMap API.",
      image: weather, // Placeholder image
      created: "January 2023",
      github: "https://github.com/Manikandan-M-45/weather-app",
      live: "https://rtweatherapp.netlify.app/",
      disabled: false,
      technologies: ["React", "Bootstrap", "CSS", "JavaScript"],
    },
    {
      title: "Movie Explorer",
      description:
        "Movie Explorer is a web application where users can search and explore movie details, including release dates, ratings, and descriptions. This app uses the Movie Database (TMDb) API to fetch movie data and display it in a user-friendly interface.",
      image: movieexplorer,
      created: "February 2023",
      github: "https://github.com/Manikandan-M-45/movie-explorer",
      live: "https://rtmovieexplorer.netlify.app/",
      disabled: false,
      technologies: ["React", "Bootstrap", "CSS", "JavaScript"],
    },
    {
      title: "Notes App",
      description:
        "A full-stack Notes Application that allows users to create, update, delete, and organize their notes. Built using React for the frontend and ExpressJS with MongoDB for the backend, this app features user authentication and data storage, allowing for persistent note-taking across sessions.",
      image: notesapp,
      created: "March 2023",
      github: "https://github.com/Manikandan-M-45/NoteApp",
      live: "",
      disabled: true,
      technologies: [
        "ExpressJS",
        "MongoDB",
        "NodeJS",
        "React",
        "Bootstrap",
        "CSS",
        "JavaScript",
      ],
    },
    {
      title: "ID Card Generator",
      description:
        "This ID Card Generator lets users create customizable ID cards by entering personal details. It dynamically generates the ID card with user data and allows for downloading the result as an image. Built with a modern frontend stack and focused on user interactivity.",
      image: idcard,
      created: "April 2023",
      github: "https://github.com/Manikandan-M-45/Idcard-generator",
      live: "",
      disabled: true,
      technologies: [
        "ExpressJS",
        "MongoDB",
        "NodeJS",
        "React",
        "Bootstrap",
        "CSS",
        "JavaScript",
      ],
    },
  ];

  return (
    <div className="container-fluid bg-dark text-white ">
      <div className="container">
        <h1>Projects</h1>
        <Slider {...settings}>
          {projects.map((project, index) => (
            <div key={index} className="slides">
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />

              <div className="project-detail text-white">
                <h3 className="fw-bolder fs-5 text-white">{project.title}</h3>
                <p className="fw-light fs-6">{project.description}</p>
                {project.technologies.map((tech, techIndex) => (
                  <span className="badge px-3 py-2 mx-2 text-bg-secondary" key={techIndex}>
                    {tech}
                  </span>
                ))}

                <div className="project-links mt-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-lg btn-warning text-decoration-none text-white"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-lg btn-outline-info text-decoration-none text-white outline-3 "
                    style={{
                      pointerEvents: project.disabled ? "none" : "auto",
                      color: project.disabled ? "gray" : "blue",
                    }}
                  >
                    {project.disabled ? "Live demo unavailable" : "Live Demo"}
                  </a>
                 
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Projects;
