# Collaboard-2.0

## Real time Whiteboard's Flow/ Architecture of the application
![image](https://github.com/user-attachments/assets/249d8905-3946-4cfd-ab74-7f1e092c23f3)

## Tech-stack
### Frontend (deployed on Vercel)
- React for UI (Nextjs)
- Recoil for state management
- Socket-IO client for real-time communication and user colloboration

### Backend (deployed on Render)
- Nodejs (Express.js) for socket server
- Real-time Communication: WebSocket connection for low-latency updates
- Fallback to polling if WebSocket fails
- Room-based broadcasting for efficient updates

### Improvements/Next-steps
- Isolating services (Microservices + docker) along with proper event handling (by introducing NATS or Kafka, adding Message Queue)
- Scalability: Currently, the Socket.IO server holds all state in memory
- Reliability: Messages could be lost during server restarts
- Room persistence: Currently rooms are lost if server restarts
- Introducing additional productive toolkits in the toolbar
- Integration with AI 
