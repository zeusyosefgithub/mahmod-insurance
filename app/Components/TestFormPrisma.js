// 'use client';

// import { useState } from "react";
// import AddDataPrisma from "./TestServerComponent";

// export default function TestFormPrisma() {
//     const [title, setTitle] = useState('');
//     const [content, setContent] = useState('');

//     const handleTitleChange = (e) => {
//         setTitle(e.target.value);
//     };

//     const handleContentChange = (e) => {
//         setContent(e.target.value);
//     };

    

//     const handleSubmit = (e) => {
//         e.preventDefault();
    
//         AddDataPrisma(title,content);

//         setTitle('');
//         setContent('');
//     };
//     return (
//         <form onSubmit={handleSubmit}>
//             <div className="flex justify-center items-center">
//                 <div>
//                     <label htmlFor="title">Title:</label>
//                     <input
//                         type="text"
//                         id="title"
//                         value={title}
//                         onChange={handleTitleChange}
//                         required
//                     />
//                 </div>
//                 <div className="mt-10">
//                     <label htmlFor="content">Content:</label>
//                     <textarea
//                         id="content"
//                         value={content}
//                         onChange={handleContentChange}
//                         required
//                     />
//                 </div>
                
//             </div>
//             <button type="submit">Submit</button>
            
//         </form>
//     )
// }