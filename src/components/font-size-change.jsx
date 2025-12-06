import { SettingsButton } from "@/components/settings-button";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useFontSize } from "@/contexts/font-size-context";

export const FontSizeChange = () => {
  const [fontSize, setSmallFontSize, setMediumFontSize, setLargeFontSize] =
    useFontSize();

  const handleDecreaseFontSize = () => {
    switch (fontSize) {
      case "large":
        setMediumFontSize();
        break;
      case "medium":
        setSmallFontSize();
        break;
      default:
        break;
    }
  };

  const handleIncreaseFontSize = () => {
    switch (fontSize) {
      case "small":
        setMediumFontSize();
        break;
      case "medium":
        setLargeFontSize();
        break;
      default:
        break;
    }
  };

  return (
    <div className="flex flex-row justify-between items-center w-full">
      <SettingsButton
        disabled={fontSize === "small"}
        onClick={handleDecreaseFontSize}
      >
        <RemoveIcon />
      </SettingsButton>
      <p className="text-lg font-bold">{fontSize}</p>
      <SettingsButton
        disabled={fontSize === "large"}
        onClick={handleIncreaseFontSize}
      >
        <AddIcon />
      </SettingsButton>
    </div>
  );
};
