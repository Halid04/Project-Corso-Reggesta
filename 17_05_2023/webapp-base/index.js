postData = (e) => {
  console.log("heyy");
  const title = document.getElementById("title");
  const description = document.getElementById("description");
  const effort = document.getElementById("effort");

  const item = {
    title: title.value,
    description: description.value,
    effort: effort.value,
  };

  axios.post("http://localhost:3000/add", item);
};

getData = (e) => {
  axios.get("http://localhost:3000/all").then((items) => {
    const titles = items.data.map((x) => x.title);
    const description = items.data.map((x) => x.description);
    const effort = items.data.map((x) => x.effort);

    document.getElementById("text").innerHTML =
      titles + "<br />" + description + "<br />" + effort;
  });
};
