// "use server"

// import { Resend } from 'resend';
// import EmailTemplate from '@/component/EmailTemplate/page';
// interface State {
//     error: string | null;
//     success : Boolean
// }

// export const sendEmail = async(formData : FormData) =>{
//     const name = formData.get('name') as string;
//     const email = formData.get('email') as string;
//     const message = formData.get('message') as string;
//     try{
//         const resend = new Resend(process.env.RESEND_API_KEY)
//         await resend.emails.send({
//             from:"Fahri <takumifahri@apps.ipb.ac.id>",
//             to: email,
//             subject: "Form Submission",
//             react: EmailTemplate({ name, email, message })
//         })
//         return{
//             error:null,
//             success:true
//         }
//     }catch(err){
//         console.log(err)
//         return {
    
//             error: (err as Error).message,
//             success : false
//         }
//     }
// }