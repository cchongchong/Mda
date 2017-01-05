import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const mdas = [
  {
    "Id": "mdas-1",
    "Name": "ISP simple version",
    "Sections": [
      {
        "Level": 0,
        "Name": "Part1",
        "DisplayName": "Part I Essential Information",
        "Description": null,
        "MultiEntry": false,
        "Order": 0,
        "Sections": [
          {
            "Level": 1,
            "Name": "ContactInformation",
            "DisplayName": "Contact Information",
            "Description": null,
            "MultiEntry": false,
            "Order": 0,
            "Sections": [

            ],
            "Items": [
              {
                "Name": "FirstName",
                "DisplayName": "Legal First Name",
                "Description": "Person's First Name",
                "Type": "FreeText",
                "ContentType": "string",
                "Order": 0
              },
              {
                "Name": "LastName",
                "DisplayName": "Legal Last Name",
                "Description": "Person's Last Name",
                "Type": "FreeText",
                "ContentType": "string",
                "Order": 1
              }
            ]
          }
        ],
        "Items": [

        ]
      }
    ]
  },
  {
    "Id": "mdas-2",
    "Name": "ISP complex version",
    "Sections": [
      {
        "Level": 0,
        "Name": "Part1",
        "DisplayName": "Part I Essential Information",
        "Description": null,
        "MultiEntry": false,
        "Order": 0,
        "Sections": [
          {
            "Level": 1,
            "Name": "ContactInformation",
            "DisplayName": "Contact Information",
            "Description": null,
            "MultiEntry": false,
            "Order": 0,
            "Sections": [

            ],
            "Items": [
              {
                "Name": "FirstName",
                "DisplayName": "Legal First Name",
                "Description": "Person's First Name",
                "Type": "FreeText",
                "ContentType": "string",
                "Order": 0
              },
              {
                "Name": "LastName",
                "DisplayName": "Legal Last Name",
                "Description": "Person's Last Name",
                "Type": "FreeText",
                "ContentType": "string",
                "Order": 1
              }
            ]
          },
          {
            "Level": 1,
            "Name": "HealthInformation",
            "DisplayName": "Health Information",
            "Description": null,
            "MultiEntry": false,
            "Order": 1,
            "Sections": [
              {
                "Level": 2,
                "Name": "ActiveMedicalAndBehavioralSupportNeeds",
                "DisplayName": "Active Medical and Behavioral Support Needs",
                "Description": "All active needs related to health, mental health, or behavioral support needs, must be addressed in separate outcomes in the plan. When present, this includes the eight DBHDS-identified health risks: skin breakdown, aspiration pneumonia, falls, urinary tract infections, dehydration, constipation and bowel obstruction, sepsis, and seizures.",
                "MultiEntry": false,
                "Order": 0,
                "Sections": [

                ],
                "Items": [
                  {
                    "Name": "NeedsIdentified",
                    "DisplayName": "Active health or behavioral support needs identified on the Annual Support Needs Risk Assessment or elsewhere? ",
                    "Description": null,
                    "Type": "SingleChoice",
                    "ContentType": "bool",
                    "Order": 0
                  }
                ]
              },
              {
                "Level": 2,
                "Name": "Medications",
                "DisplayName": "Medications",
                "Description": null,
                "MultiEntry": false,
                "Order": 1,
                "Sections": [
                  {
                    "Level": 3,
                    "Name": "Medication",
                    "DisplayName": "Medication",
                    "Description": null,
                    "MultiEntry": true,
                    "Order": 0,
                    "Sections": [

                    ],
                    "Items": [
                      {
                        "Name": "Medication",
                        "DisplayName": "Medication",
                        "Description": null,
                        "Type": "FreeText",
                        "ContentType": "string",
                        "Order": 0
                      },
                      {
                        "Name": "Prescriber",
                        "DisplayName": "Prescriber",
                        "Description": null,
                        "Type": "FreeText",
                        "ContentType": "string",
                        "Order": 1
                      }
                    ]
                  }
                ],
                "Items": [
                  {
                    "Name": "MedicationsRequired",
                    "DisplayName": "Medications Required?",
                    "Description": null,
                    "Type": "SingleChoice",
                    "ContentType": "bool",
                    "Order": 0
                  },
                  {
                    "Name": "IsThereAnAdvancedDirective",
                    "DisplayName": "Is there an advanced directive?",
                    "Description": null,
                    "Type": "SingleChoice",
                    "ContentType": "bool",
                    "Order": 1
                  }
                ]
              }
            ],
            "Items": [

            ]
          }
        ],
        "Items": [

        ]
      }
    ]
  }
];

class MdaApi {
  static getAllMdas() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], mdas));
      }, delay);
    });
  }
}

export default MdaApi;
