fetch("https://api.ipify.org?format=json")
  .then(res => res.json())
  .then(data => {
    const ip = data.ip;
    fetch("https://script.google.com/macros/s/AKfycbxyTpgnsMLuKJ2Ko0emkTI742OyZQpSkQa1QvAv8UJ4q4THsH4PC1nEGD9e8AT0h-ZY/exec?ip=" + ip)
      .then(() => console.log("IP envoyée : " + ip));
  });
