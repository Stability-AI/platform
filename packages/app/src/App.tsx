import { Topbar } from "./Topbar";

console.log("App");

export function App() {
  return (
    <div className="flex h-screen w-screen flex-col">
      <Topbar />
      <iframe
        src="https://codesandbox.io/p/sandbox/serene-maria-3q0m86?file=%2Fpackages%2Fsandbox-text-to-image%2Fsrc%2FTextToImage%2Findex.tsx%3A15%2C1"
        title="Stability-AI/platform"
        className="h-full w-full"
        allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
        sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
      />
    </div>
  );
}
