import { useEffect, useRef } from "react";

const agentId = import.meta.env.VITE_ELEVENLABS_AGENT_ID;

const VoiceDemo = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!agentId) {
      console.warn("Missing VITE_ELEVENLABS_AGENT_ID environment variable!");
    }

    const scriptId = "elevenlabs-convai-widget";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://unpkg.com/@elevenlabs/convai-widget-embed";
      script.async = true;
      script.type = "text/javascript";
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full rounded-xl border bg-card/60 shadow-elevated p-4"
    >
      {agentId ? (
        <elevenlabs-convai agent-id={agentId}></elevenlabs-convai>
      ) : (
        <p className="text-red-500">Missing agent ID!</p>
      )}
    </div>
  );
};

export default VoiceDemo;
