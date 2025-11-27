interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  color?: string;
}

export const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  color = "#CEA6B1",
}) => {
  return (
    <button
      onClick={onClick}
      className="individual-button"
      style={{
        padding: "10px 10px",
        fontSize: "50px",
        backgroundColor: color,
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        width: "100px",
        height: "100px",
      }}
    >
      {children}
    </button>
  );
};
