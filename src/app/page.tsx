"use client";
import { usePathname } from 'next/navigation'
import { ReactNode, useEffect, useState } from "react";

export default function Home() {
  const path = usePathname();
  console.log(path);
  const [ContentComponent, setContentComponent] = useState<any>(null);

  useEffect(() => {
    if (path) {
      const loadComponent = async () => {
        try {
          // Assume a naming convention where the component for the project can be dynamically imported
          const component = null; //await dynamic(() => import(`${path}`));
          setContentComponent(component);
        } catch (err) {
          console.log('Failed to load the component', err);
          // Handle the error or load a default/fallback component
        }
      };

      loadComponent();
    }
  }, [location]);

  return <>{ContentComponent ? ContentComponent : <div></div>}</>
}
