fetch("https://api.ipify.org?format=json")
  .then(res => res.json())
  .then(data => {
    const ip = data.ip;
    fetch("https://script.google.com/macros/s/TON_ID_DEPLOIEMENT/exec?ip=" + ip)
      .then(() => console.log("IP envoyée : " + ip));
  });
