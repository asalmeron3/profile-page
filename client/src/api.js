const API_URL = import.meta.env.VITE_API_URL;

export const fetchProjects = () => {
  return fetch(`${API_URL}/api/projects`)
    .then((response) => response.json())
    .catch((error) => {
      console.error('Error fetching projects:', error);
      throw error;
    });
};