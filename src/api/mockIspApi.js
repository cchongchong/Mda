import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const isps = [
  {
    "Id": "isps-1",
    "Name": "ISP empty",
    "Part1": null
  },
  {
    "Id": "isps-2",
    "Name": "ISP without inner list",
    "Part1": {
      "ContactInformation": {
        "FirstName": "f1",
        "LastName": "l1"
      },
      "HealthInformation": {
        "ActiveMedicalAndBehavioralSupportNeeds": {
          "NeedsIdentified": false
        },
        "Medications": {
          "MedicationsRequired": true,
          "IsThereAnAdvancedDirective": false
        }
      }
    }
  },
  {
    "Id": "isps-3",
    "Name": "ISP with inner list",
    "Part1": {
      "ContactInformation": {
        "FirstName": "f2",
        "LastName": "l2"
      },
      "HealthInformation": {
        "ActiveMedicalAndBehavioralSupportNeeds": {
          "NeedsIdentified": false
        },
        "Medications": {
          "MedicationsRequired": true,
          "IsThereAnAdvancedDirective": false,
          "Medication": [
            {
              "Medication": "Medication 1",
              "Prescriber": "test"
            },
            {
              "Medication": "Medication 2",
              "Prescriber": "test"
            }
          ]
        }
      }
    }
  }
];

class ispApi {
  static getAllIsps() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], isps));
      }, delay);
    });
  }

  static saveIsp(isp) {
    isp = Object.assign({}, isp); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (isp.Id) {
          const existingIspIndex = isps.findIndex(a => a.Id == isp.Id);
          isps.splice(existingIspIndex, 1, isp);
        }

        resolve(isp);
      }, delay);
    });
  }
}

export default ispApi;
