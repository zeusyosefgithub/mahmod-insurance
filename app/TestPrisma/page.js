// import TestFormPrisma from "../Components/TestFormPrisma";
// import prisma from "@/lib/prisma";

// export async function GetPosts(){
    
//     const posts = await prisma.post.findMany({
//         where:{published: true},
//         include: {
//             author: {
//                 select: {name: true} 
//             }
//         }
//     });
//     return posts;
// }


// export default async function TestPrisma() {

//     const posts = await GetPosts();
//     console.log({ posts });



//     return (
//         <div className="flex justify-center">
//             <div>
//                 <div>Feed</div>

//                 <div className="m-20">
//                     <div>add Post</div>
//                     <div className="mt-10">
//                         <TestFormPrisma />
//                     </div>
//                 </div>

//                 <div>

//                 </div>

//                 <div className="m-20">
//                     {
//                         posts.map(post => {
//                             return <div key={post.id} className="border-2 border-black m-5 p-5 rounded-xl">
//                                 <div>{post.id}</div>
//                                 <div>{post.title}</div>
//                                 <div>{post.content}</div>
//                                 <div>{post.author.name}</div>
//                             </div>
//                         })
//                     }
//                 </div>
//             </div>
//         </div>
//     )
// }