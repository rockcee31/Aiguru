import Image from "next/image";
import header from '../../../public/header.png'
export default function Persona(){
  const handleStart = async()=>{
         if (!name.trim()) return alert("Please enter a name.");
         const personName = toTitleCase(name)
         if (!name.trim()) return alert("Please tell something in about");
         
         try {
            const res = await axios.post("http://localhost:3000/persona", {
            name:personName,
            about:description
      });
          const personaName = res.data.name
          
          
          const about = res.data.about
          
          const image = res.data.image;
          setName(personaName)
           setPersona({ name: personaName, about, image }); // Store persona globally
           setStarted(true);                  // Signal app to go to ChatUI

         } catch (error) {
            console.error(error)
         }
       
    }
          return(
            <div>

            </div>
          )
}