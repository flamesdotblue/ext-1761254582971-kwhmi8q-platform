import Neon3DButton from "./components/Neon3DButton";
import ScreenCenter from "./components/ScreenCenter";
import NeonAmbient from "./components/NeonAmbient";

export default function App() {
  return (
    <ScreenCenter>
      <NeonAmbient />
      <Neon3DButton aria-label="Neon button" />
    </ScreenCenter>
  );
}
