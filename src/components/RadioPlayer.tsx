"use client";

import { useEffect } from "react";

export default function RadioPlayer() {
  useEffect(() => {
    // Inject the script required by Caster.fm securely
    const scriptId = "caster-fm-script";
    
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "//cdn.cloud.caster.fm/widgets/embed.js";
      script.async = true;
      document.body.appendChild(script);
    }

    return () => {
      // Optional cleanup
    };
  }, []);

  return (
    <div id="streaming" className="w-full flex justify-center py-4 relative z-10 pointer-events-auto">
      <div 
        className="cstrEmbed" 
        data-type="newStreamPlayer" 
        data-publicToken="3bab21b3-1b78-44d6-9006-748559cbfa43" 
        data-theme="light" 
        data-color="6357E2" 
        data-channelId="" 
        data-rendered="false"
      >
        <a href="https://www.caster.fm">Shoutcast Hosting</a> 
        <a href="https://www.caster.fm">Stream Hosting</a> 
        <a href="https://www.caster.fm">Radio Server Hosting</a>
      </div>
    </div>
  );
}
