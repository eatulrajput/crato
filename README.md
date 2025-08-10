# Crato — Web MVP (React + ElevenLabs Agent ID only)

### Overview
Crato is a simple web MVP that embeds an ElevenLabs Conversational AI Agent in a React site (UI via Lovable). It connects using only the public Agent ID and the ElevenLabs React SDK. No WebRTC, signed URLs, or backend token generation yet.

### Current Scope
- React web app with ElevenLabs agent started via Agent ID
- Voice-first chat in the browser with live transcription and TTS replies
- Lovable-generated UI scaffold (buttons, layout, styles)
- No backend, no wearable integrations yet

### Out of Scope (for now)
- WebRTC or signed sessions
- Private agent security (requires backend)
- React Native app
- Tool-calling beyond basic client-side stubs

### Quick Start
Prerequisites:
- Node.js 18+
- An ElevenLabs Agent set to public access
- Modern browser with microphone

### Setup:
- git clone 
- npm install
- Create .env (or .env.local) with:
  - VITE_ELEVENLABS_AGENT_ID=your_agent_id

### Run:
- npm run dev
- Open the local URL, allow microphone permissions
- Click Start/Connect to talk to Crato

### Build:
- npm run build
- Deploy the dist/ folder (Netlify, Vercel, etc.). Use HTTPS so mic/audio work reliably.

### Minimal Code Pattern
- useConversation from the ElevenLabs React SDK
- Pass agentId from env
- Start session on user click (helps with autoplay/mic policies)
- Render transcript and audio output

##### Example env
VITE_ELEVENLABS_AGENT_ID=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx

##### Auth Notes
- Public Agent: no server required; agentId is enough
- Private Agent (future): you’ll need a backend to create signed URLs/tokens; don’t expose API keys in the browser

### Known Limitations
- Session may stop after idle or network hiccups; there’s no reconnect/token refresh yet
- Browser mic/audio policies require a user gesture to start audio
- No wearable data or camera analysis in this build
- Security: agent is public; anyone with the page can start sessions

### Roadmap (future)
- Switch to WebRTC for lower latency and stability
- Add backend to issue signed URLs/tokens (make the agent private)
- Tool-calling (weather tips, diary logs)
- React Native app (Expo) using ElevenLabs RN SDK
- Basic analytics and reconnect logic

#### Troubleshooting
- Agent doesn’t speak or hear: confirm mic permissions and HTTPS
- Immediate disconnect: ensure Agent is public in ElevenLabs and the ID is correct
- No audio playback on iOS: start session on a user click (button), not on page load
- High latency: close other tabs using mic/audio; try a different network

>License
MIT

>Credits
- ElevenLabs React SDK for conversational agent
- Lovable for React UI scaffolding
- [Hacknation.io](https://hack-nation.ai/)