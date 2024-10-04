import React from 'react';
import StudentProjectCard from './StudentProjectCard';
const StudentProjects = () => {
    const projects = [
        { title: "Project 1" },
        { title: "Project 2" },
        { title: "Project 3" },
        { title: "Project 4" },
        { title: "Project 5" },
        { title: "Project 6" }
    ];
    return (<section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Student Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (<StudentProjectCard key={index} title={project.title}/>))}
        </div>
      </div>
    </section>);
};
export default StudentProjects;
