import { Button } from "@mui/material";

export const BUTTON_STYLES = {
  backgroundColor: "var(--foreground)",
  color: "var(--background)",
  padding: "15px 25px",
};

export const SettingsButton = ({ disabled, onClick, children, ...props }) => {
  return (
    <Button
      sx={BUTTON_STYLES}
      variant="contained"
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </Button>
  );
};
