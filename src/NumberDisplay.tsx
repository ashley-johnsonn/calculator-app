interface DisplayProps {
  value: string | number;
}

export const NumberDisplay: React.FC<DisplayProps> = ({ value }) => {
  return (
    <div
      style={{
        padding: "20px",
        fontSize: "40px",
        backgroundColor: "#CEA6B1",
        borderRadius: "5px",
        textAlign: "right",
        minHeight: "60px",
        fontFamily: "monospace",
        width: "510px",
        marginBottom: "10px",
      }}
    >
      {value || "0"}
    </div>
  );
};
