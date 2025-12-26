import React, {useEffect, useState} from 'react'
import axios from 'axios'
import toast from 'react-hot-toast'

import Navbar from '../components/Navbar'
import RateLimitedUI from '../components/RateLimitedUI'
import NoteCard from '../components/NoteCard'
import NotesNotFound from '../components/NotesNotFound'

const HomePage = () => {
  
  const [isRateLimited, setIsRateLimited] = useState(false);
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    const fetchNotes = async()=>{
      try {
        const response = await axios.get("http://localhost:5001/api/notes");
        console.log(response.data);

        setNotes(response.data);
        setIsRateLimited(false);

      } catch (error) {
        console.log("Error when fetching notes");

        if(error.response?.status==429){
          setIsRateLimited(true);
        }else{
          toast.error("Failed fetching the notes!");
        }

      }finally{
        setLoading(false);
      }
    }

    fetchNotes();

  }, [])

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 -z-10 pointer-events-none
      [background:radial-gradient(120%_120%_at_50%_0%,oklch(var(--color-neutral-content)/0.15)_0%,transparent_60%)]">
      </div>


      <Navbar />

      {isRateLimited && <RateLimitedUI />}

      

      <div className="max-w-7xl mx-auto p-4 mt-6">
        {loading && <div className="text-center text-base-content py-10">Loading notes...</div>}

        {!loading && notes.length === 0 && !isRateLimited && <NotesNotFound />}

        {!loading && notes.length > 0 && !isRateLimited && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {notes.map((note) => (
              <NoteCard key={note._id} note={note} setNotes={setNotes} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default HomePage