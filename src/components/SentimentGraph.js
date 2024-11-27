import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const SentimentGraph = ({ positive, negative }) => {
  console.log("Positive:", positive, "Negative:", negative);

  const total = positive + negative;
  const adjustedPositive = total ? (positive / total) * 100 : 0;
  const adjustedNegative = total ? (negative / total) * 100 : 0;

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

  console.log("Adjusted Positive:", adjustedPositive);
  console.log("Adjusted Positive:", adjustedNegative);

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
          marginTop: "-50px",
          fontSize: "18px",
          fontWeight: "bold",
        }}
      >
        {positive}% Positive
      </div>
    </div>
  );
};

export default SentimentGraph;
