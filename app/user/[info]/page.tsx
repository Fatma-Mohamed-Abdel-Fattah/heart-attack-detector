import { UserInfo } from "@/app/models/UserInfo";
import "./info.css";
import { ReadingsResponseDto } from "@/app/models/ReadingsResponseDto";
import { Gender } from "@/app/models/Gender";
import NavBar from "@/app/NavBar/NavBar";

export default async function Info({ params: { info: userId } }: any) {
  const userInfo = await getUserInfo(userId);
  return (
    <div className="info-container">
      <NavBar></NavBar>
      <div className="card-container">
        <div className="card">
          {userInfo ? (
            <div className="card-body">
              <h5 className="card-title text-center">Information</h5>
              <p className="card-text">
                Name <i className="fa-solid fa-user"></i> : {userInfo?.name}
              </p>
              <p className="card-text">
                Age <i className="fa-solid fa-birthday-cake"></i> :{" "}
                {userInfo?.age}
              </p>
              <p className="card-text">
                Faint <i className="fa-solid fa-heartbeat"></i> :{" "}
                {userInfo?.faint.toFixed(2)}
              </p>
              <p className="card-text">
                Sleep <i className="fa-solid fa-moon"></i> :{" "}
                {userInfo?.sleep.toFixed(2)}
              </p>
              <p className="card-text">
                Gender <i className="fa-solid fa-venus-mars"></i> :{" "}
                {Gender[userInfo?.sex]}
              </p>
              <p className="card-text">
                Height <i className="fa-solid fa-arrows-alt-v"></i> :{" "}
                {userInfo?.height}
              </p>
              <p className="card-text">
                Weight <i className="fa-solid fa-weight"></i> :{" "}
                {userInfo?.weight}
              </p>
              <p className="card-text">
                Genetically diabetic{" "}
                <i className="fa-solid fa-notes-medical"></i> :{" "}
                {userInfo?.geneticDiabetes ? "Yes" : "No"}
              </p>
              <p className="card-text">
                Has Genetic Heart Disease <i className="fa-solid fa-heart"></i>{" "}
                : {userInfo?.geneticDiabetes ? "Yes" : "No"}
              </p>
              <p className="card-text">
                HR <i className="fa-solid fa-heartbeat"></i> :{" "}
                {userInfo?.HR.toFixed(2)}
              </p>
              <p className="card-text">
                HRV <i className="fa-solid fa-chart-line"></i> :{" "}
                {userInfo?.HRV.toFixed(2)}
              </p>
              <p className="card-text">
                Systolic Blood Pressure{" "}
                <i className="fa-solid fa-stethoscope"></i> :{" "}
                {userInfo?.systolic_BP.toFixed(2)}
              </p>
              <p className="card-text">
                Diastolic Blood Pressure{" "}
                <i className="fa-solid fa-stethoscope"></i> :{" "}
                {userInfo?.diastolic_BP.toFixed(2)}
              </p>
              <p className="card-text">
                Respiratory Rate <i className="fa-solid fa-lungs"></i> :{" "}
                {userInfo?.RR.toFixed(2)}
              </p>
              <p className="card-text">
                Oxygen saturation <i className="fa-solid fa-heartbeat"></i> :{" "}
                {userInfo?.SpO2.toFixed(2)}
              </p>
              <p className="card-text">
                Temperature <i className="fa-solid fa-thermometer-half"></i> :{" "}
                {userInfo?.temperature.toFixed(2)}
              </p>
            </div>
          ) : (
            <div className="card-body">
              <h5 className="card-title">
                There is no available data for this user
              </h5>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

async function getUserInfo(userId: string): Promise<UserInfo | null> {
  const response = await fetch(
    "https://heart-attack-detector.onrender.com/ai/logs",
    {
      next: { revalidate: 0 },
    }
  );
  const data = (await response.json()) as ReadingsResponseDto;
  const readings = data.logs.filter((r) => r.userId == userId);

  console.log(data);

  if (!readings?.length) return null;

  const info = {
    name: readings[0].name,
    age: getAverage(readings, "age"),
    faint: getAverage(readings, "faint"),
    sleep: getAverage(readings, "sleep"),
    sex: getAverage(readings, "sex"),
    height: getAverage(readings, "height"),
    weight: getAverage(readings, "weight"),
    geneticDiabetes: getAverage(readings, "geneticDiabetes"),
    geneticHeartDiseases: getAverage(readings, "geneticHeartDiseases"),
    HR: getAverage(readings, "HR"),
    HRV: getAverage(readings, "HRV"),
    systolic_BP: getAverage(readings, "systolic_BP"),
    diastolic_BP: getAverage(readings, "diastolic_BP"),
    RR: getAverage(readings, "RR"),
    SpO2: getAverage(readings, "SpO2"),
    temperature: getAverage(readings, "temperature"),
  };

  return info;
}

function getAverage(arr: any, prop: string) {
  return arr.reduce((total: number, a: any) => a[prop] + total, 0) / arr.length;
}
