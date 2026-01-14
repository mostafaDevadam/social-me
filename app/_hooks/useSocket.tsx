"use client";  // Ensures client-side only

import React, { useContext, useEffect, useState } from 'react'
import { io, Socket } from "socket.io-client";

export const useSocket = (url: string = `${process.env.NEXT_PUBLIC_SOCKET_URL}`): [Socket | null, boolean] => {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    // Initialize socket
    const socketInstance = io(url, {
      autoConnect: true,  // Automatically connect on init
      
    });

    setSocket(socketInstance);

    // Listen for connection events
    socketInstance.on("connect", () => {
      console.log("Socket connected:", socketInstance.id);
      setIsConnected(true);
    });

    socketInstance.on("disconnect", () => {
      console.log("Socket disconnected");
      setIsConnected(false);
    });

    // Cleanup: Disconnect on unmount
    return () => {
      socketInstance.disconnect();
      setIsConnected(false);
      setSocket(null);
    };
  }, [url]);  // Re-run if URL changes

  return [socket, isConnected];
};