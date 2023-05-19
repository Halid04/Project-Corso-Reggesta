const yargs = require("yargs");

const elencoPredefinto = [
  (project = {
    id: 1,
    title: "title item 1",
  }),
  (project = {
    id: 2,
    title: "title item 2",
  }),
  (project = {
    id: 3,
    title: "title item 3",
  }),
  (project = {
    id: 4,
    title: "title item 4",
  }),
  (project = {
    id: 5,
    title: "title item 5",
  }),
  (project = {
    id: 6,
    title: "title item 6",
  }),
  (project = {
    id: 7,
    title: "title item 7",
  }),
  (project = {
    id: 8,
    title: "title item 8",
  }),
  (project = {
    id: 9,
    title: "title item 9",
  }),
  (project = {
    id: 10,
    title: "title item 10",
  }),
];

const array = [];

let item;
let actionCounter = 0;

const aggiunta = () => {
  const randomIndex = Math.floor(Math.random() * 10);
  const data = new Date();
  const oggi = data.getDay();
  const mese = data.getMonth() + 1;
  const year = data.getFullYear();

  item = {
    projectId: elencoPredefinto[randomIndex].id,
    projectTitle: "project title " + (randomIndex + 1),
    title: elencoPredefinto[randomIndex].title,
    description: "description item " + (randomIndex + 1),
    effort: parseFloat((Math.random() * 20).toFixed(1)),
    insertDate: year + "-" + mese + "-" + oggi,
  };

  array.push(item);
};

const cancellazione = () => {
  if (array.length < 1) {
    console.log("Array vuoto");
  } else {
    array.shift();
  }
};

const elenco = () => {
  if (array.length < 1) {
    console.log("Array vuoto");
  } else {
    console.log(array);
  }
};

yargs.command({
  command: "$0",
  builder: {
    action: {
      describe: "parametri",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    const actionSplitato = String(argv.action).split(",");

    for (i = 0; i < actionSplitato.length; i++) {
      actionCounter++;
      if (actionSplitato[i] == "P") {
        aggiunta();
      } else if (actionSplitato[i] == "D") {
        cancellazione();
      } else if (actionSplitato[i] == "G") {
        elenco();
      } else {
        console.log("invalid action " + actionSplitato[i]);
      }
    }
  },
});

console.log(yargs.argv);
console.log("Actions = " + actionCounter);
