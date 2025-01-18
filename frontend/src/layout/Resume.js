import { useState, useEffect } from "react";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import CloseIcon from '@mui/icons-material/Close';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import StarRateIcon from '@mui/icons-material/StarRate';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  borderRadius: '10px',
  boxShadow: 24,
  p: 4,
};

const ResumeCard = ({ resume }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className="w-full px-4 md:w-1/2 lg:w-3/2">
      <div onClick={handleOpen} className="cursor-pointer">
        <div class="mb-9 rounded-xl py-8 px-7 shadow-md transition-all hover:shadow-lg sm:p-9 lg:px-6 xl:px-9">
          <div className="flex flex-row justify-between items-center">
            <div>
              <h1 className="text-xl font-bold">{resume.version} Resume</h1>
              <p className="text-neutral-400">Click to view resume</p>
            </div>
            <div>
              {
                resume.version === "Master" ? (
                  <StarRateIcon className="!text-6xl" />
                ) : (
                  <ContactPageIcon className="!text-6xl" />
                )
              }
            </div>
          </div>
        </div>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="flex flex-row justify-between items-center">
            <h2 id="modal-modal-title" className="text-3xl font-bold">{resume.version} Resume</h2>
            <CloseIcon className="text-neutral-400 cursor-pointer" onClick={handleClose} />
          </div>

          <div id="modal-modal-description">
            <h3 className="font-bold mt-4">Summary</h3>
            <p>{resume.content.summary}</p>

            <h3 className="font-bold mt-4">Education</h3>
            <p>{resume.content.education}</p>

            <h3 className="font-bold mt-4">Experience</h3>
            <ul>
              {resume.content.experience.map((exp, index) => (
                <li key={index} className="list-disc ml-5">{exp}</li>
              ))}
            </ul>

            <h3 className="font-bold mt-4">Skills</h3>
            <p>{resume.content.skills.join(", ")}</p>
          </div>
        </Box>
      </Modal>
    </div>
  )
}

let resumes = [
  {
    user: "John Doe",
    content: {
      summary: "Software Engineer with 5 years experience in full-stack development",
      experience: [
        "Senior Developer at Tech Corp, 2020-Present",
        "Software Engineer at StartUp Inc, 2018-2020"
      ],
      education: "B.Sc. Computer Science, University of Technology",
      skills: ["JavaScript", "React", "Node.js", "Python"]
    },
    version: "Master"
  },
  {
    user: "Jane Smith",
    content: {
      summary: "Full Stack Developer specialized in React and modern JavaScript",
      experience: [
        "Lead Developer at Web Solutions, 2019-Present",
        "Frontend Developer at App Co, 2017-2019"
      ],
      education: "M.Sc. Software Engineering, Tech University",
      skills: ["React", "TypeScript", "MongoDB", "AWS"]
    },
    version: "Software"
  },
  {
    user: "Alex Johnson",
    content: {
      summary: "Frontend Developer with strong UI/UX background",
      experience: [
        "UI Developer at Design Studio, 2020-Present",
        "UX Designer at Creative Agency, 2018-2020"
      ],
      education: "B.A. Digital Design, Design Institute",
      skills: ["HTML/CSS", "React", "Figma", "UI/UX"]
    },
    version: "Design"
  }
]

const Resume = () => {
  // const [resumes, setResumes] = useState([]);

  // useEffect(() => {
  //   fetch("/api/resume/")
  //     .then((res) => res.json())
  //     .then((data) => setResumes(data.resumes));
  // }, []);

  return (
    <div>
      <header className="bg-white shadow mb-8">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold font-sans tracking-tight text-gray-900">My Resumes</h1>
        </div>
      </header>
      <div class="-mx-4 flex flex-wrap pt-10 p-40">
        {
          resumes.map((resume) => (
            <ResumeCard resume={resume} />
          ))
        }
      </div>
    </div>

  )
}

export default Resume;
