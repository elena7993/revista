import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const SentimentGraph = ({ positive, negative }) => {
  console.log("Positive:", positive, "Negative:", negative);

  const data = {
    labels: ["Positive", "Negative"],
    datasets: [
      {
        data: [positive, negative],
        backgroundColor: ["#FFD700", "#FF4500"], // 노랑, 빨강
        borderWidth: 0,
      },
    ],
  };

  const options = {
    plugins: {
      legend: { display: false },
    },
    cutout: "70%",
    rotation: -90,
    circumference: 180,
  };

  return (
    <div style={{ width: "200px", height: "100px", margin: "0 auto" }}>
      <Doughnut data={data} options={options} />
      <div
        style={{
          textAlign: "center",
          marginTop: "-50px",
          fontSize: "16px",
          fontWeight: "bold",
        }}
      >
        {positive}% Positive
      </div>
    </div>
  );
};

export default SentimentGraph;
