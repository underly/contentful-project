import React from 'react';
import '../fetchProjects';
import useFetchProjects from '../fetchProjects';

const Projects = () => {
	const { loading, projects } = useFetchProjects();

	if (loading) {
		return (
			<section className="projects">
				<h2>Loading</h2>
			</section>
		);
	}
	return (
		<section className="projects">
			<div className="title">
				<h2>Projects</h2>
				<div className="title-underline"></div>
				<div className="projects-center">
					{projects.map((item) => {
						const { id, img, title, url } = item;
						return (
							<a
								key={url}
								href={url}
								target="_blank"
								rel="noreferrer"
								className="project"
							>
								<img src={img} alt={title} className="img" />
								<h5>{title}</h5>
							</a>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default Projects;
