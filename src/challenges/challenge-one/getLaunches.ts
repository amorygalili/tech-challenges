export const getLaunches = async () => {
  const json = localStorage.getItem("launches");
  if (json) {
    return JSON.parse(json);
  }

  const res = await fetch(
    "https://ll.thespacedevs.com/2.2.0/launch/?limit=100"
  );
  const launches = await res.json();
  const launchResults = launches.results;
  localStorage.setItem("launches", JSON.stringify(launchResults));
  return launchResults;
};
