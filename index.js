import express from 'express'
import cors from 'cors'

const app = express()
const port = 5001;

const townData = {
    town: "Perth",
    landfill: {
        address: "666 Wildlife Road, Perth, ON",
        hours: [
            "Tuesday, Wednesday and Friday - 8am to 16:30pm",
            "Saturday - 8am - 12pm",
            "If a holiday falls on a Monday, the landfill will be closed on the following Tuesday."
        ],
        notes: "Avilable to Town of Perth residents only. Proof of residency required.",
    },
    binContents: [
        {
            bin: "Green",
            contents: [
                "Any type of food waste – meat, bones, dairy, vegetables, fruits, breads, nuts, sauces, egg shells, expired foods, etc.",
                "Soiled paper products – paper towels, tissues, pizza boxes, coffee filters, tea bags",
                "Wood - toothpicks, popsicle sticks, skewers, sawdust, etc.",
                "Greenery - household plants",
                "Pet waste and cat litter (must be in a paperbag or wrapped newspaper)",
                "Floor sweepings",
                "Hair (human and pet)",
                "Dryer lint",
                "Ashes"
            ]
        },
        {
            bin: "Yellow",
            contents: [
                "Plastics - #1, #2, #5 and #6 (excluding #6 polystyrene)",
                "Food and berage jars (clean)",
                "Aluminum pop cans (clean)",
                "Steel food cans (clean)",
                "Aluminum foil and trays (clean and empty)",
                "Gable top and tetra pak cartons - includes milk and juice cartons, drinking boxes and spiral bound containers",
            ]
        },
        {
            bin: "Blue",
            contents: [
                "Paper - newspapers, magazines and telephone books",
                "Boxboard - ceral and other food boxes, tissues boxes, etc.",
                "Paper towel and toilet paper rolls",
                "Cardboard (flattened and bundled)",
                "Pizza boxes (clean)",
                "Books (remove covers first)",
                "Shredded paper accepted in clear plastic bags"
            ]
        }
    ],
    areas: [
      {
        name: "North",
        collectionSchedule: [
            {
                binColor: "Green",
                dates: [
                    "2025-01-07T00:00:00Z",
                    "2025-01-14T00:00:00Z",
                    "2025-01-21T00:00:00Z",
                    "2025-01-28T00:00:00Z",
                    "2025-02-04T00:00:00Z",
                    "2025-02-11T00:00:00Z",
                    "2025-02-18T00:00:00Z",
                    "2025-02-25T00:00:00Z",
                    "2025-03-04T00:00:00Z",
                    "2025-03-11T00:00:00Z",
                    "2025-03-18T00:00:00Z",
                    "2025-03-25T00:00:00Z",
                    "2025-04-01T00:00:00Z",
                    "2025-04-08T00:00:00Z",
                    "2025-04-15T00:00:00Z",
                    "2025-04-22T00:00:00Z",
                    "2025-04-29T00:00:00Z",
                    "2025-05-06T00:00:00Z",
                    "2025-05-13T00:00:00Z",
                    "2025-05-20T00:00:00Z",
                    "2025-05-27T00:00:00Z",
                    "2025-06-03T00:00:00Z",
                    "2025-06-10T00:00:00Z",
                    "2025-06-17T00:00:00Z",
                    "2025-06-24T00:00:00Z"
                ]
            },
            {
                binColor: "Yellow",
                dates: [
                    "2025-01-14T00:00:00Z",
                    "2025-01-28T00:00:00Z",
                    "2025-02-11T00:00:00Z",
                    "2025-02-25T00:00:00Z",
                    "2025-03-11T00:00:00Z",
                    "2025-03-25T00:00:00Z",
                    "2025-04-08T00:00:00Z",
                    "2025-04-22T00:00:00Z",
                    "2025-05-06T00:00:00Z",
                    "2025-05-20T00:00:00Z",
                    "2025-06-03T00:00:00Z",
                    "2025-06-17T00:00:00Z"
                ]
            },
            {
                binColor: "Blue",
                dates: [
                    "2025-01-07T00:00:00Z",
                    "2025-01-21T00:00:00Z",
                    "2025-02-04T00:00:00Z",
                    "2025-02-18T00:00:00Z",
                    "2025-03-04T00:00:00Z",
                    "2025-03-18T00:00:00Z",
                    "2025-04-01T00:00:00Z",
                    "2025-04-15T00:00:00Z",
                    "2025-04-29T00:00:00Z",
                    "2025-05-13T00:00:00Z",
                    "2025-05-27T00:00:00Z",
                    "2025-06-10T00:00:00Z",
                    "2025-06-24T00:00:00Z"
                ]
            },
            {
                binColor: "Black",
                dates: [
                    "2025-01-09T00:00:00Z",
                    "2025-01-23T00:00:00Z",
                    "2025-02-06T00:00:00Z",
                    "2025-02-20T00:00:00Z",
                    "2025-03-06T00:00:00Z",
                    "2025-03-20T00:00:00Z",
                    "2025-04-03T00:00:00Z",
                    "2025-04-17T00:00:00Z",
                    "2025-05-01T00:00:00Z",
                    "2025-05-15T00:00:00Z",
                    "2025-05-29T00:00:00Z",
                    "2025-06-12T00:00:00Z",
                    "2025-06-26T00:00:00Z"
                ]
            }
        ]
    },
    {
      name: "North",
      collectionSchedule: [
          {
              binColor: "Green",
              dates: [
                  "2025-01-02T00:00:00Z",
                  "2025-01-08T00:00:00Z",
                  "2025-01-15T00:00:00Z",
                  "2025-01-22T00:00:00Z",
                  "2025-01-29T00:00:00Z",
                  "2025-02-05T00:00:00Z",
                  "2025-02-12T00:00:00Z",
                  "2025-02-19T00:00:00Z",
                  "2025-02-26T00:00:00Z",
                  "2025-03-05T00:00:00Z",
                  "2025-03-12T00:00:00Z",
                  "2025-03-19T00:00:00Z",
                  "2025-03-26T00:00:00Z",
                  "2025-04-02T00:00:00Z",
                  "2025-04-09T00:00:00Z",
                  "2025-04-16T00:00:00Z",
                  "2025-04-23T00:00:00Z",
                  "2025-04-30T00:00:00Z",
                  "2025-05-07T00:00:00Z",
                  "2025-05-14T00:00:00Z",
                  "2025-05-21T00:00:00Z",
                  "2025-05-28T00:00:00Z",
                  "2025-06-04T00:00:00Z",
                  "2025-06-11T00:00:00Z",
                  "2025-06-18T00:00:00Z",
                  "2025-06-25T00:00:00Z"
              ]
          },
          {
              binColor: "Yellow",
              dates: [
                  "2025-01-02T00:00:00Z",
                  "2025-01-15T00:00:00Z",
                  "2025-01-29T00:00:00Z",
                  "2025-02-12T00:00:00Z",
                  "2025-02-26T00:00:00Z",
                  "2025-03-12T00:00:00Z",
                  "2025-03-26T00:00:00Z",
                  "2025-04-09T00:00:00Z",
                  "2025-04-23T00:00:00Z",
                  "2025-05-07T00:00:00Z",
                  "2025-05-21T00:00:00Z",
                  "2025-06-04T00:00:00Z",
                  "2025-06-18T00:00:00Z"
              ]
          },
          {
              binColor: "Blue",
              dates: [
                  "2025-01-08T00:00:00Z",
                  "2025-01-22T00:00:00Z",
                  "2025-02-05T00:00:00Z",
                  "2025-02-19T00:00:00Z",
                  "2025-03-05T00:00:00Z",
                  "2025-03-19T00:00:00Z",
                  "2025-04-02T00:00:00Z",
                  "2025-04-16T00:00:00Z",
                  "2025-04-30T00:00:00Z",
                  "2025-05-14T00:00:00Z",
                  "2025-05-28T00:00:00Z",
                  "2025-06-11T00:00:00Z",
                  "2025-06-25T00:00:00Z"
              ]
          },
          {
              binColor: "Black",
              dates: [
                  "2025-01-03T00:00:00Z",
                  "2025-01-16T00:00:00Z",
                  "2025-01-30T00:00:00Z",
                  "2025-02-13T00:00:00Z",
                  "2025-02-27T00:00:00Z",
                  "2025-03-13T00:00:00Z",
                  "2025-03-27T00:00:00Z",
                  "2025-04-10T00:00:00Z",
                  "2025-04-24T00:00:00Z",
                  "2025-05-08T00:00:00Z",
                  "2025-05-22T00:00:00Z",
                  "2025-06-05T00:00:00Z",
                  "2025-06-19T00:00:00Z"
              ]
          }
      ]
  }  
    ]
}

// Middleware to parse JSON
app.use(cors())
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