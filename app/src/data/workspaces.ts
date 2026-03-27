export type WorkspaceStatus = "available" | "busy";

export interface Workspace {
  id: string;
  name: string;
  x: number;
  y: number;
  width: number;
  height: number;
  bookingUrl: string;
  zone: string;
  features: string[];
  status: WorkspaceStatus;
}

export interface MapConfig {
  image: string;
  imageWidth: number;
  imageHeight: number;
  workspaces: Workspace[];
}

const config: MapConfig = {
  image: "/floorplan.png",
  imageWidth: 649,
  imageHeight: 472,
  workspaces: [
    {
      id: "barcelona",
      name: "Barcelona",
      x: 340,
      y: 140,
      width: 55,
      height: 45,
      bookingUrl: "https://example.com/booking/barcelona",
      zone: "Conference room",
      features: ["projector", "whiteboard"],
      status: "available",
    },
    {
      id: "naples",
      name: "Naples",
      x: 340,
      y: 205,
      width: 55,
      height: 45,
      bookingUrl: "https://example.com/booking/naples",
      zone: "Conference room",
      features: ["screen"],
      status: "busy",
    },
  ],
};

export default config;
