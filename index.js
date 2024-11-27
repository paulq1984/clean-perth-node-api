import express from 'express'
const app = express()
const port = 5001;

const townData = {
    town: "Perth",
    areas: [
        {
            name: "North",
            collectionSchedule: [
                {
                    binColor: "Yellow",
                    dates: ["2024-12-03", "2024-12-17", "2024-12-31"]
                },
                {
                    binColor: "Blue",
                    dates: ["2024-12-10", "2024-12-24"]
                },
                {
                    binColor: "Green",
                    dates: ["2024-12-03", "2024-12-10", "2024-12-17", "2024-12-24", "2024-12-31"]
                },
                {
                    binColor: "Black",
                    dates: ["2024-12-12", "2024-12-27"]
                }
            ]
        },
        {
            name: "South",
            collectionSchedule: [
                {
                    binColor: "Yellow",
                    dates: ["2024-12-04", "2024-12-18"]
                },
                {
                    binColor: "Blue",
                    dates: ["2024-12-11", "2024-12-26"]
                },
                {
                    binColor: "Green",
                    dates: ["2024-12-04", "2024-12-11", "2024-12-18", "2024-12-26"]
                },
                {
                    binColor: "Black",
                    dates: ["2024-12-05", "2024-12-19"]
                }
            ]
        }
    ]
}

// Middleware to parse JSON
app.use(express.json());

// Endpoint for North area's schedule
app.get("/schedule/north", (req, res) => {
  const northSchedule = townData.areas.find(area => area.name === "North");
  if (northSchedule) {
    res.json(northSchedule);
  } else {
    res.status(404).json({ message: "North area schedule not found." });
  }
});

// Endpoint for South area's schedule
app.get("/schedule/south", (req, res) => {
  const southSchedule = townData.areas.find(area => area.name === "South");
  if (southSchedule) {
    res.json(southSchedule);
  } else {
    res.status(404).json({ message: "South area schedule not found." });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Garbage Collection App listening on http://localhost:${port}`);
});