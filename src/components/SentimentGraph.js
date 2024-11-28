import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const SentimentGraph = ({ positive, negative }) => {
  console.log("Positive:", positive, "Negative:", negative);

  const total = Math.max(positive + negative, 1);
  const adjustedPositive = (positive / total) * 100;
  const adjustedNegative = (negative / total) * 100;

  const data = {
    labels: ["Positive", "Negative"],
    datasets: [
      {
        data: [adjustedPositive, adjustedNegative],
        backgroundColor: ["#FFD700", "#FF4500"],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    plugins: {
      legend: { display: false },
    },
    cutout: "75%",
    rotation: -90,
    circumference: 180,
  };

  return (
    <div
      style={{
        width: "300px",
        height: "200px",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Doughnut data={data} options={options} />
      <div
        style={{
          textAlign: "center",
          fontSize: "30px",
          fontWeight: "bold",
          marginTop: "-140px",
        }}
      >
        {positive}% <br />
        Positive
      </div>
    </div>
  );
};

export default SentimentGraph;
