// import type { NextApiRequest, NextApiResponse } from "next";
// import EmailTemplate from "@/component/EmailTemplate/page";
// import { Resend } from "resend";

// const resend = new Resend(process.env.RESEND_API_KEY);

// export default async (req: NextApiRequest, res:NextApiResponse) => {
//     try{
//         const { data, error } = await resend.emails.send({
//             from: 'Client <kagawahizashi@gmail.com>',
//             to : ['takumiFahriR@gmail.com'],
//             subject : 'Contact Us',
//             react : await EmailTemplate({firstName: 'John', subject: 'Contact Us', message: 'Hello, this is a test message.'})
//         });
//         if(error){
//             return res.status(500).json({ error });
//         }

//         return res.status(200).json(data);
//     } catch (error) {
//         alert(error);
//         return res.status(500).json({ error });
//     }
   

// }