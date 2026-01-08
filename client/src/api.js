const API_URL = import.meta.env.VITE_API_URL;

export const fetchProjects = () => {
  return fetch(`${API_URL}/api/projects`)
    .then((response) => response.json())
    .catch((error) => {
      console.error('Error fetching projects:', error);
      throw error;
    });
};

export const createProject = (projectData) => {
  return fetch(`${API_URL}/api/projects`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(projectData),
  })
    .then((response) => response.json())
    .catch((error) => {
      console.error('Error creating project:', error);
      throw error;
    });
};
