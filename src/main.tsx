
  import { createRoot } from "react-dom/client";
  import App from "./app/App.tsx";
  import "./styles/index.css";
  
  // Test EmailJS en développement
  if (import.meta.env.DEV) {
    import('./test-emailjs.ts');
  }

  createRoot(document.getElementById("root")!).render(<App />);
  