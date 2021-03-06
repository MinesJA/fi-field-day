class SocketConn {
  
  constructor(endpoint) {
    this.endpoint = endpoint
    this.connectWS()
  }
  
  connectWS() {
    const socket = new WebSocket(this.endpoint);
    console.log("new ws");
    socket.addEventListener('open', (event) => {
      socket.send('Hello Server!')
    })

    socket.addEventListener('message', (event) => {
      console.log('Message from server ', event.data)
    })
    
  }
}
