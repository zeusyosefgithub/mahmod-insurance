// 'use server';

// import prisma from "@/lib/prisma";

// export default async function AddDataPrisma(title,content){
//     console.log(1);
//     const result = await prisma.post.create({
//         data: {
//             title,
//             content,
//             author: {create: {
//                 name: 'mahmod',
//                 email: 'mahmod213@gmail.com'
//             }},
//             published:true
//         }
//     })
// }