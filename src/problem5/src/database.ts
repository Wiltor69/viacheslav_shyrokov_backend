export const resources: Resource[] = [
  // Add some initial resources here
];

export function getResourceById(id: number): Resource | undefined {
  return resources.find((resource) => resource.id === id);
}

export function createResource(resource: Resource): Resource {
  resource.id = resources.length + 1;
  resources.push(resource);
  return resource;
}

export function updateResource(
  id: number,
  updatedResource: Resource
): Resource | undefined {
  const index = resources.findIndex((resource) => resource.id === id);
  if (index !== -1) {
    resources[index] = { ...resources[index], ...updatedResource };
    return resources[index];
  }
  return undefined;
}

export function deleteResource(id: number): boolean {
  const index = resources.findIndex((resource) => resource.id === id);
  if (index !== -1) {
    resources.splice(index, 1);
    return true;
  }
  return false;
}

// Interface for Resource object
export interface Resource {
  id: number;
  name: string;
  
}
