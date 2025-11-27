interface DisplayProps {
  value: string | number;
}

export const NumberDisplay: React.FC<DisplayProps> = ({ value }) => {
  return (
    <div
      style={{
        padding: "20px",
        fontSize: "32px",
        backgroundColor: "#CEA6B1",
        border: "2px solid #333",
        borderRadius: "5px",
        textAlign: "right",
        minHeight: "60px",
        fontFamily: "monospace",
      }}
    >
      {value || "0"}
    </div>
  );
};
