import { useCallback, useEffect, useRef, useState } from "react";
import config from "../data/workspaces";
import WorkspaceHotspot from "./WorkspaceHotspot";

export default function MapContainer() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  const updateScale = useCallback(() => {
    if (!containerRef.current) return;
    const containerWidth = containerRef.current.clientWidth;
    setScale(containerWidth / config.imageWidth);
  }, []);

  useEffect(() => {
    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, [updateScale]);

  return (
    <div className="map-container" ref={containerRef}>
      <div
        className="map-inner"
        style={{
          width: config.imageWidth * scale,
          height: config.imageHeight * scale,
        }}
      >
        <img
          src={config.image}
          alt="Office floor plan"
          className="map-image"
          onLoad={updateScale}
          draggable={false}
        />

        {config.workspaces.map((ws) => (
          <WorkspaceHotspot
            key={ws.id}
            workspace={ws}
            scale={scale}
          />
        ))}
      </div>
    </div>
  );
}
