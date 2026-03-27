import { useState } from "react";
import type { Workspace } from "../data/workspaces";

const STATUS_LABEL: Record<string, string> = {
  available: "Ledig",
  busy: "Upptagen",
};

interface Props {
  workspace: Workspace;
  scale: number;
}

export default function WorkspaceHotspot({ workspace, scale }: Props) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      className={`hotspot hotspot--${workspace.status} ${hovered ? "hotspot--hovered" : ""}`}
      href={workspace.bookingUrl}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        left: workspace.x * scale,
        top: workspace.y * scale,
        width: workspace.width * scale,
        height: workspace.height * scale,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      aria-label={`Boka ${workspace.name} — ${STATUS_LABEL[workspace.status]}`}
    >
      {hovered && (
        <span className="hotspot__tooltip">
          {workspace.name} — {STATUS_LABEL[workspace.status]}
        </span>
      )}
    </a>
  );
}
