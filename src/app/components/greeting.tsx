import { useEffect, useState } from "react";

function Greeting() {
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const now = new Date();
    const hour = now.getHours();

    if (hour >= 5 && hour < 12) {
      setGreeting("Bom Dia! ☀️");
    } else if (hour >= 12 && hour < 18) {
      setGreeting("Boa Tarde! 🌤️");
    } else {
      setGreeting("Boa Noite! 🌙");
    }
  }, []);

  return <h1 className="text-sm font-light">{greeting}</h1>;
}

export default Greeting;
