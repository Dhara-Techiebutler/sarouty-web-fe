export const Style = {
  Box: {
    Arrow: {
      position: "absolute",
      top: "50%",
      left: 0,
      right: 0,
      transform: "translateY(-50%)",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      px: 2,
    },
    Button: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    Price: {
      display: "flex",
      gap: 1,
      alignItems: "center",
    },
    Icone: {
      display: "flex",
      gap: 1,
      alignItems: "center",
    },
    Chip: {
      position: "absolute",
      top: 10,
      left: 10,
      display: "flex",
      gap: 1,
    },
  },
  Typography: {
    Title: {
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
    },
  },
  ArrowIcone: {
    cursor: "pointer",
    color: "#fff",
    fontSize: 30,
    transform: "scaleX(0.7)",
  },
  card: {
    borderRadius: "12px",
    boxShadow: 1,
    position: "relative",
    overflow: "hidden",
  },
  button: {
    mt: 3,
    px: 5,
    py: 2,
    backgroundColor: "#EF6458",
    borderRadius: 15,
    mb: 2,
    border: "3px solid transparent",

    textTransform: "none",
    boxShadow: "none",
    "&:hover": {
      color: "#EF6458",
      backgroundColor: "transparent",
      border: "3px solid #EF6458",
      boxShadow: "none",
    },
  },

  Chip: {
    featured: {
      backgroundColor: "#59B8BA",
      color: "#fff",
      borderRadius: "4px",
      fontWeight: 500,
      fontSize: "12px",
      padding: "0px 1px",
      height: "20px",
      minWidth: "auto",
    },
  },
  CardContent: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    color: "#fff",
    padding: "16px",
  },
};
