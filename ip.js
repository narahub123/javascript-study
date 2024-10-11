const getIP = async () => {
  const response = await fetch("https://api.ipify.org?format=json");

  if (!response.ok) {
    // error handling
  }

  const data = await response.json();

  const ip = data.ip;

  return ip;
};

getIP()
  .then((res) => {
    console.log(res);
  })
  .catch((err) => console.log(err));
