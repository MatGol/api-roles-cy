export function attachDetailsToUrl(path: string, variableName: string) {
  const variableToBeReplaced = `%${variableName}`;

  return `${path.replace(variableToBeReplaced, `${sessionStorage.getItem(variableName)}`)}`;
}

export function attachIdToUrl(path: string, variableName: string, id: string) {
  return `${path.replace(`%${variableName}`, `${id}`)}`;
}
