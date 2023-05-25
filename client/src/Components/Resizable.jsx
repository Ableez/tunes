import { useState, useEffect, useRef, useCallback } from "react";

function App() {
  const sidebarRef = useRef(null);
  const [isResizing, setIsResizing] = useState(false);
  const [sidebarWidth, setSidebarWidth] = useState(0);
  const [initialMouseX, setInitialMouseX] = useState(0);

  useEffect(() => {
    setSidebarWidth(sidebarRef.current.offsetWidth);
  }, []);

  const startResizing = useCallback((mouseDownEvent) => {
    setIsResizing(true);
    setInitialMouseX(mouseDownEvent.clientX);
  }, []);

  const stopResizing = useCallback(() => {
    setIsResizing(false);
  }, []);

  const resize = useCallback(
    (mouseMoveEvent) => {
      if (isResizing) {
        const currentMouseX = mouseMoveEvent.clientX;
        const sidebarLeft = sidebarRef.current.getBoundingClientRect().left;
        const newSidebarWidth =  sidebarWidth -  (currentMouseX - initialMouseX);
        
        // Prevent sidebar width from becoming negative or exceeding certain bounds
        const minWidth = 150;
        const maxWidth = 500;
        const clampedWidth = Math.max(minWidth, Math.min(newSidebarWidth, maxWidth));

        setSidebarWidth(clampedWidth);
        setInitialMouseX(currentMouseX);
      }
    },
    [isResizing, initialMouseX, sidebarWidth]
  );

  useEffect(() => {
    window.addEventListener("mousemove", resize);
    window.addEventListener("mouseup", stopResizing);
    return () => {
      window.removeEventListener("mousemove", resize);
      window.removeEventListener("mouseup", stopResizing);
    };
  }, [resize, stopResizing]);

  return (
    <div className="app-container">
      <div className="app-frame" />
      <div
        ref={sidebarRef}
        className="app-sidebar"
        style={{ flexBasis: sidebarWidth }}
        onMouseDown={(e) => e.preventDefault()}
      >
        <div className="app-sidebar-content" />
        <div className="app-sidebar-resizer" onMouseDown={startResizing} />
      </div>
    </div>
  );
}

export default App;
