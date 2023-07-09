import NavBar from "../NavBar/NavBar";
import { Diagnose } from "../models/Diagnose";
import { DiagnosesResponseDto } from "../models/DiagnosesResponseDto";
import { Gender } from "../models/Gender";
import { Reading } from "../models/Reading";
import { ReadingsResponseDto } from "../models/ReadingsResponseDto";
import { UserInfo } from "../models/UserInfo";
import "./framework.css";
import "./master.css";
export default async function Dashboard() {
  const allDiagnoses = await getData<DiagnosesResponseDto>(
    "https://heart-attack-detector.onrender.com/diagnoses"
  );

  const readings = await getData<ReadingsResponseDto>(
    "https://heart-attack-detector.onrender.com/ai/logs"
  );

  const averageReadings = getAverageReadings(readings.logs);

  return (
    <>
      <NavBar></NavBar>
      <div className="page d-flex">
        <div className="sidebar bg-white p-20 p-relative">
          <h3 className="p-relative txt-c mt-0">Dashbord</h3>
          <ul>
            <li>
              <a
                className="active d-flex align-center fs-14 c-black rad-6 p-10"
                href="index.html"
              >
                <i className="fa-regular fa-chart-bar fa-fw"></i>
                <span>Dashboard</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="content w-full">
          <div className="head bg-white p-15 between-flex">
            <h3>Welcome back admin page</h3>
            <div className="icons d-flex align-center">
              <span className="notification p-relative">
                <i className="fa-regular fa-bell fa-lg"></i>
              </span>
              <img src="./images/avatar-05.png" alt="" />
            </div>
          </div>
          <h1 className="p-relative">Dashboard</h1>
          <div className="wrapper w-100">
            <div className="welcome bg-white rad-10 txt-c-mobile block-mobile">
              <div className="intro p-20 bg-eee">
                <div>
                  <h2 className="m-0">Welcome</h2>
                </div>
              </div>
              <div className="w-75 mx-auto py-4">
                <h2 className="fw-bolder py-3">Hospital Management</h2>
              </div>
              <div className="w-75 mx-auto py-5 overflow-auto">
                <table className="table text-center">
                  <thead>
                    <tr>
                      <th>Index</th>
                      <th>Name</th>
                      <th>Diagnose</th>
                      <th>Age</th>
                      <th>Faint</th>
                      <th>Sleep</th>
                      <th>Sex</th>
                      <th>Height</th>
                      <th>Weight</th>
                      <th>GeneticDiabetes</th>
                      <th>GeneticHeartDiseases</th>
                      <th>HR</th>
                      <th>HRV</th>
                      <th>Systolic_BP</th>
                      <th>Diastolic_BP</th>
                      <th>RR</th>
                      <th>SpO2</th>
                      <th>temperature</th>
                    </tr>
                  </thead>
                  <tbody id="tableBody">
                    {allDiagnoses.diagnose.map((diagnose, index) => (
                      <tr
                        style={{
                          backgroundColor: getBgColorBasedOnDiagnose(
                            diagnose.diagnose
                          ),
                        }}
                      >
                        <td>{index}</td>
                        <td>{averageReadings.get(diagnose.userId)?.name}</td>
                        <td>{diagnose.diagnose}</td>
                        <td>{averageReadings.get(diagnose.userId)?.age}</td>
                        <td>
                          {averageReadings
                            .get(diagnose.userId)
                            ?.faint.toFixed(2)}
                        </td>
                        <td>
                          {averageReadings
                            .get(diagnose.userId)
                            ?.sleep.toFixed(2)}
                        </td>
                        <td>
                          {
                            Gender[
                              averageReadings.get(diagnose.userId)?.sex ?? 0
                            ]
                          }
                        </td>
                        <td>{averageReadings.get(diagnose.userId)?.height}</td>
                        <td>{averageReadings.get(diagnose.userId)?.weight}</td>
                        <td>
                          {
                            averageReadings.get(diagnose.userId)
                              ?.geneticDiabetes
                          }
                        </td>
                        <td>
                          {
                            averageReadings.get(diagnose.userId)
                              ?.geneticHeartDiseases
                          }
                        </td>
                        <td>
                          {averageReadings.get(diagnose.userId)?.HR.toFixed(2)}
                        </td>
                        <td>
                          {averageReadings.get(diagnose.userId)?.HRV.toFixed(2)}
                        </td>
                        <td>
                          {averageReadings
                            .get(diagnose.userId)
                            ?.systolic_BP.toFixed(2)}
                        </td>
                        <td>
                          {averageReadings
                            .get(diagnose.userId)
                            ?.diastolic_BP.toFixed(2)}
                        </td>
                        <td>
                          {averageReadings.get(diagnose.userId)?.RR.toFixed(2)}
                        </td>
                        <td>
                          {averageReadings
                            .get(diagnose.userId)
                            ?.SpO2.toFixed(2)}
                        </td>
                        <td>
                          {averageReadings
                            .get(diagnose.userId)
                            ?.temperature.toFixed(2)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function getBgColorBasedOnDiagnose(diagnose: string) {
  return ["healthy", "Not diagnosed yet"].includes(diagnose)
    ? "none"
    : "rgba(220,53,69, 0.3)";
}

async function getData<T>(url: string): Promise<T> {
  const response = await fetch(url, {
    next: { revalidate: 0 },
  });
  const data = await response.json();
  return data;
}

function getAverageReadings(readings: Reading[]) {
  const groupsByUserId = readings.reduce((group: any, log) => {
    const { userId } = log;
    group[userId] = group[userId] ?? [];
    group[userId].push(log);
    return group;
  }, {});

  const usersMap = new Map<string, UserInfo>();
  for (const userId in groupsByUserId) {
    console.log(userId);
    usersMap.set(userId, {
      name: groupsByUserId[userId][0].name,
      age: getAverage(groupsByUserId[userId], "age"),
      faint: getAverage(groupsByUserId[userId], "faint"),
      sleep: getAverage(groupsByUserId[userId], "sleep"),
      sex: getAverage(groupsByUserId[userId], "sex"),
      height: getAverage(groupsByUserId[userId], "height"),
      weight: getAverage(groupsByUserId[userId], "weight"),
      geneticDiabetes: getAverage(groupsByUserId[userId], "geneticDiabetes"),
      geneticHeartDiseases: getAverage(
        groupsByUserId[userId],
        "geneticHeartDiseases"
      ),
      HR: getAverage(groupsByUserId[userId], "HR"),
      HRV: getAverage(groupsByUserId[userId], "HRV"),
      systolic_BP: getAverage(groupsByUserId[userId], "systolic_BP"),
      diastolic_BP: getAverage(groupsByUserId[userId], "diastolic_BP"),
      RR: getAverage(groupsByUserId[userId], "RR"),
      SpO2: getAverage(groupsByUserId[userId], "SpO2"),
      temperature: getAverage(groupsByUserId[userId], "temperature"),
    });
  }
  return usersMap;
}

function getAverage(arr: any, prop: string) {
  return arr.reduce((total: number, a: any) => a[prop] + total, 0) / arr.length;
}
